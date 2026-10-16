// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { renderHook } from '@testing-library/react';
import React from 'react';

import { useLocalAudioInputActivity } from '../../../src/hooks/sdk/useLocalAudioInputActivity';
import { useDeviceController } from '../../../src/hooks/sdk/useDeviceController';
import { MeetingContext } from '../../../src/providers/MeetingProvider';

// The hook reads the device controller from `useDeviceController`. These tests mock that dependency to
// verify the hook wires the analyser/observer when a controller is available (opt-in / in-meeting) and
// no-ops when it is not (not opted in, before a meeting).
jest.mock('../../../src/hooks/sdk/useDeviceController');

const mockUseDeviceController = useDeviceController as jest.Mock;

function makeController(analyser: any = {}): any {
  return {
    addDeviceChangeObserver: jest.fn(),
    removeDeviceChangeObserver: jest.fn(),
    // By default return an analyser without getByteTimeDomainData so the RAF loop doesn't start in jsdom.
    createAnalyserNodeForAudioInput: jest.fn().mockReturnValue(analyser),
  };
}

function makeMeetingManager(): any {
  const observers: Array<() => void> = [];
  return {
    subscribeToSelectedAudioInputDevice: jest.fn((cb: () => void) =>
      observers.push(cb)
    ),
    unsubscribeFromSelectedAudioInputDevice: jest.fn((cb: () => void) => {
      const index = observers.indexOf(cb);
      if (index >= 0) observers.splice(index, 1);
    }),
    // Mimics MeetingManager.publishSelectedAudioInputDevice after startAudioInputDevice resolves.
    publishSelectedAudioInputDevice: () => observers.forEach((cb) => cb()),
    observers,
  };
}

function withMeetingManager(meetingManager: any) {
  return ({ children }: { children?: React.ReactNode }) => (
    <MeetingContext.Provider value={meetingManager}>
      {children}
    </MeetingContext.Provider>
  );
}

describe('useLocalAudioInputActivity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('wires the analyser and device-change observer when a controller is available (opt-in)', () => {
    const controller = makeController();
    mockUseDeviceController.mockReturnValue(controller);

    const cb = jest.fn();
    const { unmount } = renderHook(() => useLocalAudioInputActivity(cb));

    // Controller present => the hook subscribes and reads the analyser through it.
    expect(controller.addDeviceChangeObserver).toHaveBeenCalledTimes(1);
    expect(controller.createAnalyserNodeForAudioInput).toHaveBeenCalledTimes(1);

    // Cleanup removes the observer it added.
    unmount();
    expect(controller.removeDeviceChangeObserver).toHaveBeenCalledTimes(1);
  });

  it('does nothing when no controller is available (not opted in, before a meeting)', () => {
    mockUseDeviceController.mockReturnValue(undefined);

    const cb = jest.fn();
    const { unmount } = renderHook(() => useLocalAudioInputActivity(cb));

    // No controller => the effect early-returns; nothing is wired and the callback never fires.
    expect(cb).not.toHaveBeenCalled();
    // Unmounting is safe even though nothing was set up.
    expect(() => unmount()).not.toThrow();
  });

  it('re-subscribes to the new controller when it becomes available (non-opt-in join)', () => {
    // Start with no controller (pre-meeting, not opted in)...
    mockUseDeviceController.mockReturnValue(undefined);
    const cb = jest.fn();
    const { rerender } = renderHook(() => useLocalAudioInputActivity(cb));

    // ...then a meeting is joined and join() creates + publishes a controller.
    const controller = makeController();
    mockUseDeviceController.mockReturnValue(controller);
    rerender();

    expect(controller.addDeviceChangeObserver).toHaveBeenCalledTimes(1);
    expect(controller.createAnalyserNodeForAudioInput).toHaveBeenCalledTimes(1);
  });

  it('attaches again when the same audio input is restarted (rejoin with a kept selection)', () => {
    const controller = makeController();
    // Mic stopped by leave(): no active input yet, so no analyser.
    controller.createAnalyserNodeForAudioInput.mockReturnValue(null);
    mockUseDeviceController.mockReturnValue(controller);
    const meetingManager = makeMeetingManager();

    renderHook(() => useLocalAudioInputActivity(jest.fn()), {
      wrapper: withMeetingManager(meetingManager),
    });
    expect(controller.createAnalyserNodeForAudioInput).toHaveBeenCalledTimes(1);

    // startAudioInputDevice(sameDeviceId) resolves and publishes the unchanged selection.
    const removeOriginalInputs = jest.fn();
    controller.createAnalyserNodeForAudioInput.mockReturnValue({
      removeOriginalInputs,
    });
    meetingManager.publishSelectedAudioInputDevice();

    expect(controller.createAnalyserNodeForAudioInput).toHaveBeenCalledTimes(2);

    // A later restart releases the previous analyser before attaching a new one.
    meetingManager.publishSelectedAudioInputDevice();
    expect(removeOriginalInputs).toHaveBeenCalledTimes(1);
    expect(controller.createAnalyserNodeForAudioInput).toHaveBeenCalledTimes(3);
  });

  it('releases the analyser and unsubscribes on unmount', () => {
    const removeOriginalInputs = jest.fn();
    const controller = makeController({ removeOriginalInputs });
    mockUseDeviceController.mockReturnValue(controller);
    const meetingManager = makeMeetingManager();

    const { unmount } = renderHook(
      () => useLocalAudioInputActivity(jest.fn()),
      {
        wrapper: withMeetingManager(meetingManager),
      }
    );
    expect(meetingManager.observers).toHaveLength(1);

    unmount();
    expect(removeOriginalInputs).toHaveBeenCalledTimes(1);
    expect(
      meetingManager.unsubscribeFromSelectedAudioInputDevice
    ).toHaveBeenCalledTimes(1);
    expect(meetingManager.observers).toHaveLength(0);
  });
});
