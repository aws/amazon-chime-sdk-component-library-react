// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultEventController,
  EventAttributes,
  EventName,
  MeetingSessionConfiguration,
  MeetingSessionCredentials,
  MeetingSessionURLs,
  NoOpDebugLogger,
} from 'amazon-chime-sdk-js';

import { MeetingManager } from '../../../src/providers/MeetingProvider/MeetingManager';
import { MeetingManagerJoinOptions } from '../../../src/providers/MeetingProvider/types';

import '@testing-library/jest-dom';

import { act, renderHook } from '@testing-library/react';

import {
  MeetingProvider,
  useMeetingManager,
} from '../../../src/providers/MeetingProvider';
import { useDeviceController } from '../../../src/hooks/sdk/useDeviceController';

describe('Meeting Provider', () => {
  it('events are received correctly', async () => {
    // Mock the user agent to ensure the MeetingManager event subscription is
    // set up. Otherwise, the amazon-chime-sdk-js will not detect a valid
    // browser to use.
    const userAgentGet = jest.spyOn(navigator, 'userAgent', 'get');
    userAgentGet.mockReturnValue(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    );

    // Event details
    const eventName = 'audioInputFailed';
    const audioInputErrorMessage = 'Something went wrong';

    // Setup MeetingManager and EventController
    const joinData = {
      meetingInfo: {
        meetingId: '',
        externalMeetingId: '',
        mediaplacement: new MeetingSessionURLs(),
      },
      attendeeInfo: new MeetingSessionCredentials(),
    };
    let eventController = new DefaultEventController(
      new MeetingSessionConfiguration(
        joinData.meetingInfo,
        joinData.attendeeInfo
      ),
      new NoOpDebugLogger()
    );
    let meetingManagerJoinOptions: MeetingManagerJoinOptions = {
      eventController: eventController,
    };
    let meetingManager = new MeetingManager(
      new ConsoleLogger('MeetingManager')
    );
    await meetingManager.join(
      new MeetingSessionConfiguration(
        joinData.meetingInfo,
        joinData.attendeeInfo
      ),
      meetingManagerJoinOptions
    );

    let calls = 0;
    const callback = (name: EventName, attributes: EventAttributes): void => {
      expect(name).toBe(eventName);
      expect(attributes.audioInputErrorMessage).toBe(audioInputErrorMessage);
      calls += 1;
    };

    // Can get events
    meetingManager.subscribeToEventDidReceive(callback);
    await eventController.publishEvent(eventName, {
      audioInputErrorMessage,
    });

    await new Promise((r) => setTimeout(r, 10));
    // Should have been called once
    expect(calls).toBe(1);

    // Will not get events after unsubscribing
    meetingManager.unsubscribeFromEventDidReceive(callback);
    await eventController.publishEvent(eventName, {
      audioInputErrorMessage,
    });

    await new Promise((r) => setTimeout(r, 10));
    // Should have been only called once
    expect(calls).toBe(1);

    // Can add a new observer after removing
    meetingManager.subscribeToEventDidReceive(callback);
    await eventController.publishEvent(eventName, {
      audioInputErrorMessage,
    });

    await new Promise((r) => setTimeout(r, 10));
    // Should have been called twice
    expect(calls).toBe(2);
  });

  it('exposes the provided device controller and its eventController before any meeting', async () => {
    const eventController = new DefaultEventController(
      new MeetingSessionConfiguration(
        {
          meetingId: '',
          externalMeetingId: '',
          mediaplacement: new MeetingSessionURLs(),
        },
        new MeetingSessionCredentials()
      ),
      new NoOpDebugLogger()
    );
    const deviceController = new DefaultDeviceController(
      new NoOpDebugLogger(),
      { enableWebAudio: false },
      undefined,
      eventController
    );

    const { result } = renderHook(() => useDeviceController(), {
      wrapper: ({ children }) => (
        <MeetingProvider deviceController={deviceController}>
          {children}
        </MeetingProvider>
      ),
    });

    // The provided controller is available before any meeting and carries its eventController, so
    // pre-meeting device events report to it.
    expect(result.current).toBe(deviceController);
    expect(result.current?.eventController).toBe(eventController);

    // A pre-meeting device event published through it reaches an observer.
    let received = 0;
    const observer = {
      eventDidReceive: (name: EventName): void => {
        if (name === 'audioInputFailed') {
          received += 1;
        }
      },
    };
    eventController.addObserver(observer);
    await result.current?.eventController?.publishEvent('audioInputFailed', {
      audioInputErrorMessage: 'nope',
    });
    await new Promise((r) => setTimeout(r, 10));
    expect(received).toBe(1);
  });

  it('exposes a provided controller with no eventController when none was constructed with one', () => {
    const deviceController = new DefaultDeviceController(new NoOpDebugLogger(), {
      enableWebAudio: false,
    });

    const { result } = renderHook(() => useDeviceController(), {
      wrapper: ({ children }) => (
        <MeetingProvider deviceController={deviceController}>
          {children}
        </MeetingProvider>
      ),
    });

    // The controller is available but has no eventController (the meeting session creates one on join).
    expect(result.current).toBe(deviceController);
    expect(result.current?.eventController).toBeUndefined();
  });

  it('should not change params', async () => {
    // @ts-ignore
    const meetingProviderParams: MeetingManager = jest.fn();

    // Render and unmount the provider.
    const { unmount } = renderHook(() => useMeetingManager(), {
      wrapper: ({ children }) => (
        <MeetingProvider {...meetingProviderParams}>{children}</MeetingProvider>
      ),
    });

    await act(async () => {
      unmount();
    });

    expect(meetingProviderParams).toStrictEqual(meetingProviderParams);
  });

  it('does not call leave() on unmount when not opted in (no deviceController)', async () => {
    // Backward compatibility: existing consumers pass no deviceController, and the base provider did
    // no unmount cleanup. Unmounting must not tear down their session.
    const leaveSpy = jest
      .spyOn(MeetingManager.prototype, 'leave')
      .mockResolvedValue(undefined);

    const { unmount } = renderHook(() => useMeetingManager(), {
      wrapper: ({ children }) => <MeetingProvider>{children}</MeetingProvider>,
    });

    await act(async () => {
      unmount();
    });

    expect(leaveSpy).not.toHaveBeenCalled();
    leaveSpy.mockRestore();
  });

  it('calls leave() on unmount when opted in (deviceController provided)', async () => {
    // The opt-in path releases the controller's media on unmount (leave() stops inputs without
    // destroying a builder-owned controller).
    const leaveSpy = jest
      .spyOn(MeetingManager.prototype, 'leave')
      .mockResolvedValue(undefined);
    const deviceController = new DefaultDeviceController(new NoOpDebugLogger(), {
      enableWebAudio: false,
    });

    const { unmount } = renderHook(() => useMeetingManager(), {
      wrapper: ({ children }) => (
        <MeetingProvider deviceController={deviceController}>
          {children}
        </MeetingProvider>
      ),
    });

    await act(async () => {
      unmount();
    });

    expect(leaveSpy).toHaveBeenCalledTimes(1);
    leaveSpy.mockRestore();
  });
});
