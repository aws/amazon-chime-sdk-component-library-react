// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import {
  ConsoleLogger,
  DefaultActiveSpeakerPolicy,
  DefaultBrowserBehavior,
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
    // Report setSinkId support so the audio-output selection / warm-rejoin re-apply path runs.
    jest
      .spyOn(DefaultBrowserBehavior.prototype, 'supportsSetSinkId')
      .mockReturnValue(true);
    meetingManager = new MeetingManager(new ConsoleLogger('MeetingManager'));
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
        stopAudioInput: jest.fn().mockResolvedValue(undefined),
        stopVideoInput: jest.fn().mockResolvedValue(undefined),
        chooseAudioOutput: jest.fn().mockResolvedValue(undefined),
        setDeviceLabelTrigger: jest.fn().mockReturnValue({}),
        subscribeToActiveSpeakerDetector: jest.fn().mockReturnValue({}),
        unsubscribeFromActiveSpeakerDetector: jest.fn().mockReturnValue({}),
        stopContentShare: jest.fn().mockReturnValue({}),
        stopLocalVideoTile: jest.fn().mockReturnValue({}),
        unbindAudioElement: jest.fn().mockReturnValue({}),
        stop: jest.fn().mockReturnValue({}),
      },
      // The controller MeetingManager creates on the non-opted-in path; leave() destroys it.
      deviceController: {
        chooseAudioOutput: jest.fn().mockResolvedValue(undefined),
        destroy: jest.fn().mockResolvedValue(undefined),
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

  describe('leave', () => {
    it('destroys the self-created controller and wipes device state when not opted in', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);
      meetingManager.selectedAudioOutputDevice = 'speaker-1';
      // Capture the destroy spy before leave(): leave() nulls meetingSession, so it is unreachable
      // through meetingManager.meetingSession afterward.
      const destroySpy = meetingManager.meetingSession?.deviceController.destroy;

      await meetingManager.leave();

      // Not opted in => the controller MeetingManager created is destroyed on leave, and device
      // state is fully reset (legacy behavior).
      expect(destroySpy).toHaveBeenCalled();
      expect(meetingManager.selectedAudioOutputDevice).toBeNull();
      expect(meetingManager.selectedAudioInputDevice).toBeUndefined();
      expect(meetingManager.audioVideo).toBeNull();
    });
  });

  describe('with an injected device controller (opted in)', () => {
    let injectedController: any;

    beforeEach(() => {
      injectedController = {
        destroy: jest.fn().mockResolvedValue(undefined),
        listAudioInputDevices: jest.fn().mockResolvedValue([]),
        listVideoInputDevices: jest.fn().mockResolvedValue([]),
        listAudioOutputDevices: jest.fn().mockResolvedValue([]),
        startAudioInput: jest.fn().mockResolvedValue({}),
        startVideoInput: jest.fn().mockResolvedValue({}),
        stopAudioInput: jest.fn().mockResolvedValue(undefined),
        stopVideoInput: jest.fn().mockResolvedValue(undefined),
        chooseAudioOutput: jest.fn().mockResolvedValue(undefined),
        setDeviceLabelTrigger: jest.fn(),
        eventController: undefined,
      };
      meetingManager = new MeetingManager(
        new ConsoleLogger('MeetingManager'),
        injectedController
      );
    });

    it('enumerates devices before a meeting via setupDevices (no MeetingSession)', async () => {
      await meetingManager.setupDevices();

      expect(injectedController.setDeviceLabelTrigger).toHaveBeenCalled();
      expect(injectedController.listAudioInputDevices).toHaveBeenCalled();
      // No meeting was ever joined.
      expect(meetingManager.meetingSession).toBeNull();
    });

    it('reuses the injected controller on join instead of creating a new one', async () => {
      // @ts-ignore - reset so we can assert it is NOT constructed on the opted-in path
      DefaultDeviceController.mockClear?.();
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);
      expect(DefaultDeviceController).not.toHaveBeenCalled();
    });

    it('does NOT destroy the injected controller on leave, and keeps the output selection', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);
      meetingManager.selectedAudioOutputDevice = 'speaker-1';

      await meetingManager.leave();

      // Provider owns the controller => must NOT be destroyed; output selection persists for rejoin.
      expect(injectedController.destroy).not.toHaveBeenCalled();
      expect(meetingManager.selectedAudioOutputDevice).toBe('speaker-1');
      // Session is torn down; live input selections are cleared so the next setup re-acquires them.
      expect(meetingManager.audioVideo).toBeNull();
      expect(meetingManager.selectedAudioInputDevice).toBeUndefined();
    });

    it('releases the injected controller media on a pre-meeting leave (no meeting yet)', async () => {
      // setupDevices() acquires a live mic on the injected controller with no meeting (audioVideo null).
      await meetingManager.setupDevices();
      expect(meetingManager.audioVideo).toBeNull();

      // A pre-meeting leave() (e.g. lobby "cancel") must still stop the controller's streams, not skip
      // release just because there is no meeting — otherwise the mic/camera leak until unmount.
      await meetingManager.leave();

      expect(injectedController.stopAudioInput).toHaveBeenCalled();
      expect(injectedController.stopVideoInput).toHaveBeenCalled();
    });

    it('clears the injected controller eventController on leave (no stale between-meetings ref)', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);

      await meetingManager.leave();

      // Cleared on leave so pre-rejoin device events do not publish to the ended session.
      expect(injectedController.eventController).toBeUndefined();
    });

    it('re-applies the preserved audio output device on warm rejoin', async () => {
      // First meeting selects a non-default speaker, then leaves (output selection preserved).
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);
      meetingManager.selectedAudioOutputDevice = 'speaker-1';
      await meetingManager.leave();
      expect(meetingManager.selectedAudioOutputDevice).toBe('speaker-1');

      // Rejoin: listAndSelectDevices' default-pick guard is skipped (output already set), so the
      // preserved sink must be explicitly re-applied. In-meeting the device source is the audioVideo
      // facade (which delegates to the same shared controller in production), so assert on it.
      await meetingManager.join(mockMeetingSessionConfiguration, mockMeetingManagerJoinOptions);

      expect(meetingManager.audioVideo?.chooseAudioOutput).toHaveBeenCalledWith(
        'speaker-1'
      );
    });
  });
});
