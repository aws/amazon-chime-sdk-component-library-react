// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import {
  ConsoleLogger,
  DefaultActiveSpeakerPolicy,
  DefaultDeviceController,
  DefaultMeetingSession,
  MeetingSessionConfiguration,
} from 'amazon-chime-sdk-js';

import { MeetingManager } from '../../../src/providers/MeetingProvider/MeetingManager';
import { MeetingManagerJoinOptions } from '../../../src/providers/MeetingProvider/types';

describe('Meeting Manager', () => {
  let mockMeetingManagerJoinOptions: MeetingManagerJoinOptions;
  let mockMeetingSessionConfiguration: MeetingSessionConfiguration;
  let meetingManager: MeetingManager;
  // eslint-disable-next-line
  const GlobalAny = global as any;

  beforeEach(() => {
    // @ts-ignore
    MeetingSessionConfiguration = jest.fn().mockImplementation(() => {});
    mockMeetingSessionConfiguration = new MeetingSessionConfiguration();
    // MeetingManager now borrows a DefaultDeviceController from the device layer (it no longer
    // creates its own). Inject a mock; join() sets `eventController = undefined` on it before
    // building the session, so a plain writable object suffices.
    const mockDeviceController = {} as DefaultDeviceController;
    meetingManager = new MeetingManager(new ConsoleLogger('MeetingManager'), {
      deviceController: mockDeviceController,
    });
    // @ts-ignore
    DefaultDeviceController = jest.fn().mockReturnValue({});
    // @ts-ignore
    DefaultMeetingSession = jest.fn().mockReturnValue({
      audioVideo: {
        addObserver: jest.fn().mockReturnValue({}),
        removeObserver: jest.fn().mockReturnValue({}),
        listAudioInputDevices: jest.fn().mockReturnValue({}),
        listVideoInputDevices: jest.fn().mockReturnValue({}),
        listAudioOutputDevices: jest.fn().mockReturnValue({}),
        startAudioInput: jest.fn().mockReturnValue({}),
        setDeviceLabelTrigger: jest.fn().mockReturnValue({}),
        subscribeToActiveSpeakerDetector: jest.fn().mockReturnValue({}),
      },
      eventController:  {
        addObserver: jest.fn().mockReturnValue({}),
        removeObserver: jest.fn().mockReturnValue({}),
      },
    });
    GlobalAny.navigator = jest.fn().mockReturnValue({
      mediaDevices: jest.fn().mockReturnValue({
        enumerateDevices: jest.fn().mockReturnValue(() => {}),
        getUserMedia: jest.fn().mockReturnValue({
          some: () => {}
        }),
      })
    });
  });

  describe('join', () => {
    it('should call subscribeToActiveSpeakerDetector with new DefaultActiveSpeakerPolicy if one is not passed via MeetinManagerJoinOptions', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);
      expect(meetingManager?.audioVideo?.subscribeToActiveSpeakerDetector).toHaveBeenCalledWith(
        new DefaultActiveSpeakerPolicy(),
        meetingManager.activeSpeakerListener,
      );
      expect(meetingManager?.audioVideo?.subscribeToActiveSpeakerDetector).toHaveBeenCalledTimes(
        1
      );
    });

    it('should call DefaultMeetingSession', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);
      expect(DefaultMeetingSession).toHaveBeenCalledTimes(1);
    });

    it('should call addObserver on AudioVideoFacade', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);
      expect(meetingManager?.audioVideo?.addObserver).toHaveBeenCalledTimes(
        1
      );
    });
  });
});
