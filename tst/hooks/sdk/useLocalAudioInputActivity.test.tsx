// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { renderHook } from '@testing-library/react';

import { useLocalAudioInputActivity } from '../../../src/hooks/sdk/useLocalAudioInputActivity';
import { useDeviceController } from '../../../src/hooks/sdk/useDeviceController';
import { useAudioInputs } from '../../../src/providers/DevicesProvider';

// The hook reads the device controller from `useDeviceController`. These tests mock that dependency to
// verify the hook wires the analyser/observer when a controller is available (opt-in / in-meeting) and
// no-ops when it is not (not opted in, before a meeting).
jest.mock('../../../src/hooks/sdk/useDeviceController');
jest.mock('../../../src/providers/DevicesProvider');

const mockUseDeviceController = useDeviceController as jest.Mock;
const mockUseAudioInputs = useAudioInputs as jest.Mock;

function makeController(): any {
  return {
    addDeviceChangeObserver: jest.fn(),
    removeDeviceChangeObserver: jest.fn(),
    // Return an analyser without getByteTimeDomainData so the RAF loop doesn't start in jsdom.
    createAnalyserNodeForAudioInput: jest.fn().mockReturnValue({}),
  };
}

describe('useLocalAudioInputActivity', () => {
  beforeEach(() => {
    mockUseAudioInputs.mockReturnValue({ selectedDevice: 'mic-1', devices: [] });
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
});
