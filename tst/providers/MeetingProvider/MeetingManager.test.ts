// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import {
  ConsoleLogger,
  DefaultActiveSpeakerPolicy,
  DefaultBrowserBehavior,
  DefaultDeviceController,
  DefaultMeetingSession,
  DeviceControllerBasedMediaStreamBroker,
  MeetingSessionConfiguration,
} from 'amazon-chime-sdk-js';

import { MeetingManager } from '../../../src/providers/MeetingProvider/MeetingManager';
import { MeetingManagerJoinOptions } from '../../../src/providers/MeetingProvider/types';

// A fake device controller. All device operations run through this (before and during a meeting), so
// tests assert on it for device behavior.
function makeController(): any {
  return {
    listAudioInputDevices: jest.fn().mockResolvedValue([]),
    listVideoInputDevices: jest.fn().mockResolvedValue([]),
    listAudioOutputDevices: jest.fn().mockResolvedValue([]),
    startAudioInput: jest.fn().mockResolvedValue({}),
    startVideoInput: jest.fn().mockResolvedValue({}),
    stopAudioInput: jest.fn().mockResolvedValue(undefined),
    stopVideoInput: jest.fn().mockResolvedValue(undefined),
    chooseAudioOutput: jest.fn().mockResolvedValue(undefined),
    setDeviceLabelTrigger: jest.fn(),
    addDeviceChangeObserver: jest.fn(),
    removeDeviceChangeObserver: jest.fn(),
    destroy: jest.fn().mockResolvedValue(undefined),
    eventController: undefined,
  };
}

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
    // Not opted in: join() creates the controller. Hand back a fake so device ops resolve.
    // @ts-ignore
    DefaultDeviceController = jest
      .fn()
      .mockImplementation(() => makeController());
    // The session's audioVideo exposes only *session* operations. Device operations must go through
    // the device controller, not this facade — so omitting them here makes a misroute fail loudly.
    // @ts-ignore
    DefaultMeetingSession = jest.fn().mockImplementation(() => ({
      audioVideo: {
        addObserver: jest.fn().mockReturnValue({}),
        removeObserver: jest.fn().mockReturnValue({}),
        subscribeToActiveSpeakerDetector: jest.fn().mockReturnValue({}),
        unsubscribeFromActiveSpeakerDetector: jest.fn().mockReturnValue({}),
        stopContentShare: jest.fn().mockReturnValue({}),
        stopLocalVideoTile: jest.fn().mockReturnValue({}),
        unbindAudioElement: jest.fn().mockReturnValue({}),
        start: jest.fn().mockReturnValue({}),
        stop: jest.fn().mockReturnValue({}),
      },
      eventController: {
        addObserver: jest.fn().mockReturnValue({}),
        removeObserver: jest.fn().mockReturnValue({}),
      },
    }));
    GlobalAny.navigator = jest.fn().mockReturnValue({
      mediaDevices: jest.fn().mockReturnValue({
        enumerateDevices: jest.fn().mockReturnValue(() => {}),
        getUserMedia: jest.fn().mockReturnValue({
          some: () => {},
        }),
      }),
    });
  });

  describe('constructor', () => {
    it('does not create a device controller when none is supplied (not opted in)', () => {
      // The controller is created by join() (or supplied by the provider), never in the constructor,
      // so a not-opted-in app performs no device work before joining.
      expect(meetingManager.deviceController).toBeUndefined();
      expect(DefaultDeviceController).not.toHaveBeenCalled();
    });
  });

  describe('join', () => {
    it('should call subscribeToActiveSpeakerDetector with new DefaultActiveSpeakerPolicy if one is not passed via MeetinManagerJoinOptions', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      expect(
        meetingManager?.audioVideo?.subscribeToActiveSpeakerDetector
      ).toHaveBeenCalledWith(
        new DefaultActiveSpeakerPolicy(),
        meetingManager.activeSpeakerListener
      );
      expect(
        meetingManager?.audioVideo?.subscribeToActiveSpeakerDetector
      ).toHaveBeenCalledTimes(1);
    });

    it('should call DefaultMeetingSession', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      expect(DefaultMeetingSession).toHaveBeenCalledTimes(1);
    });

    it('should call addObserver on AudioVideoFacade', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      expect(meetingManager?.audioVideo?.addObserver).toHaveBeenCalledTimes(1);
    });

    it('creates the device controller when not opted in and publishes it', async () => {
      const received: (DeviceControllerBasedMediaStreamBroker | undefined)[] =
        [];
      meetingManager.subscribeToDeviceController((dc) => received.push(dc));

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );

      // join() created a controller and published it; it is now the manager's device source.
      expect(DefaultDeviceController).toHaveBeenCalledTimes(1);
      expect(meetingManager.deviceController).toBeDefined();
      expect(received[received.length - 1]).toBe(meetingManager.deviceController);
    });

    it('builds the session from the same controller and selects devices through it', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, {
        ...mockMeetingManagerJoinOptions,
      });
      // Device enumeration during join goes through the controller, not the audioVideo facade.
      expect(
        meetingManager.deviceController?.listAudioInputDevices
      ).toHaveBeenCalled();
      expect(
        meetingManager.deviceController?.setDeviceLabelTrigger
      ).toHaveBeenCalled();
    });

    it('does NOT enumerate/select devices when skipDeviceSelection is set', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration, {
        skipDeviceSelection: true,
      });
      // The label trigger is still installed, but no listing/selection runs.
      expect(
        meetingManager.deviceController?.listAudioInputDevices
      ).not.toHaveBeenCalled();
      expect(
        meetingManager.deviceController?.listVideoInputDevices
      ).not.toHaveBeenCalled();
    });
  });

  describe('leave (not opted in)', () => {
    it('destroys the self-created controller, clears and republishes it, and wipes device state', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      meetingManager.selectedAudioOutputDevice = 'speaker-1';
      const controller = meetingManager.deviceController;
      const received: (DeviceControllerBasedMediaStreamBroker | undefined)[] =
        [];
      meetingManager.subscribeToDeviceController((dc) => received.push(dc));

      await meetingManager.leave();

      // Not opted in => the controller join() created is destroyed and cleared, and device state is
      // fully reset. Consumers are told the controller is gone.
      expect(controller?.destroy).toHaveBeenCalled();
      expect(meetingManager.deviceController).toBeUndefined();
      expect(received[received.length - 1]).toBeUndefined();
      expect(meetingManager.selectedAudioOutputDevice).toBeNull();
      expect(meetingManager.selectedAudioInputDevice).toBeUndefined();
      expect(meetingManager.audioVideo).toBeNull();
    });

    it('is safe to call with no meeting and no controller', async () => {
      // A not-opted-in app that never joined has no controller; leave() must not throw.
      await expect(meetingManager.leave()).resolves.toBeUndefined();
      expect(meetingManager.deviceController).toBeUndefined();
    });

    it('creates a fresh controller on re-join after a non-persist leave', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      const first = meetingManager.deviceController;
      await meetingManager.leave();
      expect(meetingManager.deviceController).toBeUndefined();

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      // Non-persist: each meeting gets its own controller — never the destroyed one.
      expect(meetingManager.deviceController).toBeDefined();
      expect(meetingManager.deviceController).not.toBe(first);
    });
  });

  describe('device selection (negative paths)', () => {
    it('startAudioInputDevice rethrows and does not update the selection when the controller fails', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      const before = meetingManager.selectedAudioInputDevice;
      (
        meetingManager.deviceController?.startAudioInput as jest.Mock
      ).mockRejectedValueOnce(new Error('device in use'));

      await expect(
        meetingManager.startAudioInputDevice('mic-2')
      ).rejects.toThrow(/failed to select audio input device/i);
      // Selection is unchanged because the start failed.
      expect(meetingManager.selectedAudioInputDevice).toBe(before);
    });

    it('startVideoInputDevice rethrows and does not update the selection when the controller fails', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      const before = meetingManager.selectedVideoInputDevice;
      (
        meetingManager.deviceController?.startVideoInput as jest.Mock
      ).mockRejectedValueOnce(new Error('camera in use'));

      await expect(
        meetingManager.startVideoInputDevice('cam-2')
      ).rejects.toThrow(/failed to select video input device/i);
      expect(meetingManager.selectedVideoInputDevice).toBe(before);
    });
  });

  describe('with a hosted device controller (opted in)', () => {
    let hostedController: any;

    beforeEach(() => {
      hostedController = makeController();
      // Builder provides the controller to the constructor (via MeetingProvider's `deviceController`).
      meetingManager = new MeetingManager(
        new ConsoleLogger('MeetingManager'),
        hostedController
      );
    });

    it('exposes the hosted controller immediately (before any meeting)', () => {
      expect(meetingManager.deviceController).toBe(hostedController);
      // subscribe should call back synchronously with the current controller.
      const received: (DeviceControllerBasedMediaStreamBroker | undefined)[] =
        [];
      meetingManager.subscribeToDeviceController((dc) => received.push(dc));
      expect(received[0]).toBe(hostedController);
    });

    it('reuses the hosted controller on join instead of creating a new one', async () => {
      // @ts-ignore - reset so we can assert it is NOT constructed on the opted-in path
      DefaultDeviceController.mockClear?.();
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      expect(DefaultDeviceController).not.toHaveBeenCalled();
      expect(meetingManager.deviceController).toBe(hostedController);
    });

    it('does NOT destroy the hosted controller on leave, and keeps the output selection', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      meetingManager.selectedAudioOutputDevice = 'speaker-1';

      await meetingManager.leave();

      // Provider owns the controller => must NOT be destroyed; output selection persists for rejoin.
      expect(hostedController.destroy).not.toHaveBeenCalled();
      expect(meetingManager.deviceController).toBe(hostedController);
      expect(meetingManager.selectedAudioOutputDevice).toBe('speaker-1');
      // Session is torn down; live input selections are cleared so the next setup re-acquires them.
      expect(meetingManager.audioVideo).toBeNull();
      expect(meetingManager.selectedAudioInputDevice).toBeUndefined();
    });

    it('releases the hosted controller media on a pre-meeting leave (no meeting yet)', async () => {
      // No meeting was joined (audioVideo null), but the controller may hold a live mic/camera from
      // device setup. A pre-meeting leave() (e.g. lobby "cancel") must still stop its streams.
      expect(meetingManager.audioVideo).toBeNull();

      await meetingManager.leave();

      expect(hostedController.stopAudioInput).toHaveBeenCalled();
      expect(hostedController.stopVideoInput).toHaveBeenCalled();
    });

    it('clears a session-supplied eventController on leave (no stale between-meetings ref)', async () => {
      // Builder supplied no eventController, so the meeting session binds its own onto the controller
      // during join. Simulate that binding (the session ctor is mocked out here).
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      hostedController.eventController = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
      };

      await meetingManager.leave();

      // Cleared on leave (the session bound it, so the builder does not own it) so pre-rejoin device
      // events do not publish to the ended session's controller.
      expect(hostedController.eventController).toBeUndefined();
    });

    it('keeps a builder-supplied eventController across leave (survives for warm rejoin)', async () => {
      // Builder provides a controller carrying its own eventController: it is builder-owned, so
      // leave() must preserve it, not clear it.
      const builderEventController: any = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
      };
      const controllerWithEvents = makeController();
      controllerWithEvents.eventController = builderEventController;
      const manager = new MeetingManager(
        new ConsoleLogger('MeetingManager'),
        controllerWithEvents
      );

      await manager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await manager.leave();

      // Preserved so pre-rejoin device events keep reporting to the builder's controller.
      expect(controllerWithEvents.eventController).toBe(builderEventController);
    });

    it('keeps an eventController attached after mount but before join (builder-owned)', async () => {
      // Builder opts in with a controller that has no eventController, then attaches their own before
      // join (a valid window, since the provider reads the controller at mount). leave() must treat it
      // as builder-owned and preserve it — the decision is made at join from the controller's state,
      // not at construction.
      const builderEventController: any = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
      };
      hostedController.eventController = builderEventController;

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await meetingManager.leave();

      expect(hostedController.eventController).toBe(builderEventController);
    });

    it('re-applies the preserved audio output device on warm rejoin', async () => {
      // First meeting selects a non-default speaker, then leaves (output selection preserved).
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      meetingManager.selectedAudioOutputDevice = 'speaker-1';
      await meetingManager.leave();
      expect(meetingManager.selectedAudioOutputDevice).toBe('speaker-1');

      hostedController.chooseAudioOutput.mockClear();

      // Rejoin: listAndSelectDevices' default-pick guard is skipped (output already set), so the
      // preserved sink must be explicitly re-applied through the controller.
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );

      expect(hostedController.chooseAudioOutput).toHaveBeenCalledWith('speaker-1');
    });
  });
});
