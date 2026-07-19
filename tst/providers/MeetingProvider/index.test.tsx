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

import { DeviceProvider } from '../../../src/providers/DeviceProvider';
import {
  MeetingProvider,
  useMeetingManager,
} from '../../../src/providers/MeetingProvider';

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
    // MeetingManager now borrows a device controller (constructed by the device layer). This test
    // runs a real join(), so provide a real DefaultDeviceController for it to build the session from.
    let meetingManager = new MeetingManager(
      new ConsoleLogger('MeetingManager'),
      {
        deviceController: new DefaultDeviceController(
          new ConsoleLogger('MeetingManager')
        ),
      }
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

  it('should not change params', async () => {
    // @ts-ignore
    const meetingProviderParams: MeetingManager = jest.fn();

    // Render and unmount the provider. MeetingProvider now reads useDeviceManager(), so it must be
    // mounted within a DeviceProvider (which owns the device layer it borrows the controller from).
    const { unmount } = renderHook(() => useMeetingManager(), {
      wrapper: ({ children }) => (
        <DeviceProvider>
          <MeetingProvider {...meetingProviderParams}>
            {children}
          </MeetingProvider>
        </DeviceProvider>
      ),
    });

    await act(async () => {
      unmount();
    });

    expect(meetingProviderParams).toStrictEqual(meetingProviderParams);
  });
});
