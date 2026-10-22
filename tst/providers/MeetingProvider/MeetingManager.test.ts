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
  MeetingSessionStatus,
  MeetingSessionStatusCode,
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
    muteLocalAudioInputStream: jest.fn(),
    unmuteLocalAudioInputStream: jest.fn(),
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
      expect(received[received.length - 1]).toBe(
        meetingManager.deviceController
      );
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
      // Non-persist: the controller is destroyed, so its mute flag is not reset.
      expect(controller?.unmuteLocalAudioInputStream).not.toHaveBeenCalled();
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

    it('keeps device selections and stops media on leave, without destroying the hosted controller', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      meetingManager.selectedAudioOutputDevice = 'speaker-1';
      meetingManager.selectedAudioInputDevice = 'mic-1';
      meetingManager.selectedVideoInputDevice = 'cam-1';

      await meetingManager.leave();

      // Provider owns the controller => must NOT be destroyed.
      expect(hostedController.destroy).not.toHaveBeenCalled();
      expect(meetingManager.deviceController).toBe(hostedController);
      // Media streams are stopped on leave (hardware released)...
      expect(hostedController.stopAudioInput).toHaveBeenCalled();
      expect(hostedController.stopVideoInput).toHaveBeenCalled();
      // ...but the device *selections* persist across leave/rejoin (the opt-in contract), for input
      // as well as output. Restarting the media is the application's responsibility.
      expect(meetingManager.selectedAudioOutputDevice).toBe('speaker-1');
      expect(meetingManager.selectedAudioInputDevice).toBe('mic-1');
      expect(meetingManager.selectedVideoInputDevice).toBe('cam-1');
      // The session itself is torn down.
      expect(meetingManager.audioVideo).toBeNull();
    });

    it('resets the controller mute flag on leave, after the mic is stopped', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );

      await meetingManager.leave();

      expect(
        hostedController.unmuteLocalAudioInputStream
      ).toHaveBeenCalledTimes(1);
      // Unmuting before the stop would re-enable the live track while the session is still up.
      expect(
        hostedController.stopAudioInput.mock.invocationCallOrder[0]
      ).toBeLessThan(
        hostedController.unmuteLocalAudioInputStream.mock.invocationCallOrder[0]
      );
    });

    it('does not mute the audio transform of the next meeting after leaving while muted', async () => {
      // Model the JS SDK DefaultDeviceController: a mute flag that survives stopAudioInput and is
      // applied to the transform device when the mic starts (Web Audio path).
      let muted = false;
      hostedController.muteLocalAudioInputStream.mockImplementation(() => {
        muted = true;
      });
      hostedController.unmuteLocalAudioInputStream.mockImplementation(() => {
        muted = false;
      });
      hostedController.startAudioInput.mockImplementation(
        async (device: any) => {
          await device?.mute?.(muted);
          return {};
        }
      );

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await meetingManager.startAudioInputDevice('mic-1');
      // Mute in meeting 1 (realtimeMuteLocalAudio reaches the controller like this).
      hostedController.muteLocalAudioInputStream();
      await meetingManager.leave();

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      const voiceFocus = {
        mute: jest.fn().mockResolvedValue(undefined),
        intrinsicMedia: jest.fn().mockResolvedValue('mic-1'),
        transformStream: jest.fn(),
        stop: jest.fn(),
        createAudioNode: jest.fn(),
      };
      await meetingManager.startAudioInputDevice(voiceFocus as any);

      expect(voiceFocus.mute).toHaveBeenCalledWith(false);
      expect(voiceFocus.mute).not.toHaveBeenCalledWith(true);
    });

    it('releases the hosted controller media on a pre-meeting leave (no meeting yet)', async () => {
      // No meeting was joined (audioVideo null), but the controller may hold a live mic/camera from
      // device setup. A pre-meeting leave() (e.g. lobby "cancel") must still stop its streams.
      expect(meetingManager.audioVideo).toBeNull();

      await meetingManager.leave();

      expect(hostedController.stopAudioInput).toHaveBeenCalled();
      expect(hostedController.stopVideoInput).toHaveBeenCalled();
    });

    it('destroys the SDK-created eventController on audioVideoDidStop, not during leave (after the terminal publish)', async () => {
      // Builder supplied no eventController, so the meeting session binds its own onto the controller
      // during join. Simulate that binding (the session ctor is mocked out here).
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      const sessionEventController = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
        destroy: jest.fn().mockResolvedValue(undefined),
      };
      hostedController.eventController = sessionEventController;

      await meetingManager.leave();

      // leave() must NOT tear it down yet: the terminal event (meetingEnded) still has to publish
      // against a live configuration first. The controller stays bound and alive through leave().
      expect(hostedController.eventController).toBe(sessionEventController);
      expect(sessionEventController.destroy).not.toHaveBeenCalled();

      // The SDK fires audioVideoDidStop after it publishes the terminal event. Only now unbind (so the
      // next join creates a fresh controller) and destroy (release the reporter timer and listeners).
      await meetingManager.audioVideoDidStop(
        new MeetingSessionStatus(MeetingSessionStatusCode.Left)
      );

      expect(hostedController.eventController).toBeUndefined();
      expect(sessionEventController.destroy).toHaveBeenCalledTimes(1);
    });

    it('does not clear an eventController passed to join() and bound onto a bare controller (builder-owned)', async () => {
      // Builder opts in with a controller that has no eventController, but passes their own to join().
      // The session binds that join eventController onto the controller; it is builder-owned, so leave()
      // must not clear it.
      const joinEventController: any = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
        destroy: jest.fn().mockResolvedValue(undefined),
      };

      await meetingManager.join(mockMeetingSessionConfiguration, {
        eventController: joinEventController,
      });
      // Simulate the session binding the join eventController onto the bare controller.
      hostedController.eventController = joinEventController;

      await meetingManager.leave();

      expect(hostedController.eventController).toBe(joinEventController);
      expect(joinEventController.destroy).not.toHaveBeenCalled();
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

    it('warns when the join() eventController differs from the one on the device controller', async () => {
      // Builder supplies an eventController on the controller and a different one to join(): device
      // events go to the controller's, meeting events to join()'s. Warn so the split is not silent.
      const logger = new ConsoleLogger('MeetingManager');
      const warn = jest.spyOn(logger, 'warn').mockImplementation(() => {});
      const manager = new MeetingManager(logger, hostedController);
      hostedController.eventController = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
      };

      await manager.join(mockMeetingSessionConfiguration, {
        eventController: {
          addObserver: jest.fn(),
          removeObserver: jest.fn(),
          publishEvent: jest.fn(),
        } as any,
      });

      expect(warn).toHaveBeenCalledWith(
        expect.stringContaining('differs from the one on the provided')
      );
    });

    it('does not warn when the same eventController is on the controller and passed to join()', async () => {
      // Matching eventControllers => unified, no warning.
      const logger = new ConsoleLogger('MeetingManager');
      const warn = jest.spyOn(logger, 'warn').mockImplementation(() => {});
      const sharedEventController: any = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
      };
      const manager = new MeetingManager(logger, hostedController);
      hostedController.eventController = sharedEventController;

      await manager.join(mockMeetingSessionConfiguration, {
        eventController: sharedEventController,
      });

      expect(warn).not.toHaveBeenCalledWith(
        expect.stringContaining('differs from the one on the provided')
      );
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

      expect(hostedController.chooseAudioOutput).toHaveBeenCalledWith(
        'speaker-1'
      );
    });

    it('does not republish input selections as undefined on leave (UI keeps the selection)', async () => {
      // The device dropdowns subscribe to these; leave() must not notify them with `undefined`,
      // or the UI shows an empty selection even though the choice is preserved for rejoin.
      const audioReceived: any[] = [];
      const videoReceived: any[] = [];
      meetingManager.subscribeToSelectedAudioInputDevice((d) =>
        audioReceived.push(d)
      );
      meetingManager.subscribeToSelectedVideoInputDevice((d) =>
        videoReceived.push(d)
      );

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await meetingManager.startAudioInputDevice('mic-1');
      await meetingManager.startVideoInputDevice('cam-1');

      await meetingManager.leave();

      expect(audioReceived[audioReceived.length - 1]).toBe('mic-1');
      expect(videoReceived[videoReceived.length - 1]).toBe('cam-1');
    });

    it('does not override preserved input selections on a skipDeviceSelection rejoin', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      meetingManager.selectedAudioInputDevice = 'mic-1';
      meetingManager.selectedVideoInputDevice = 'cam-1';
      await meetingManager.leave();

      hostedController.startAudioInput.mockClear();
      hostedController.startVideoInput.mockClear();

      // Customer's recommended rejoin path: the library selects/starts nothing; the app owns restart.
      await meetingManager.join(mockMeetingSessionConfiguration, {
        skipDeviceSelection: true,
      });

      expect(meetingManager.selectedAudioInputDevice).toBe('mic-1');
      expect(meetingManager.selectedVideoInputDevice).toBe('cam-1');
      expect(hostedController.startAudioInput).not.toHaveBeenCalled();
      expect(hostedController.startVideoInput).not.toHaveBeenCalled();
    });

    it('restarts the preserved input on a warm rejoin', async () => {
      // `leave()` stops the mic but keeps the selection, so listAndSelectDevices' default-pick guard
      // is skipped. It must restart the kept device instead of leaving the user without a mic.
      hostedController.listAudioInputDevices.mockResolvedValue([
        { deviceId: 'mic-0' },
      ] as any);

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await meetingManager.startAudioInputDevice('mic-1');
      await meetingManager.leave();

      hostedController.startAudioInput.mockClear();
      const published: any[] = [];
      meetingManager.subscribeToSelectedAudioInputDevice((d) =>
        published.push(d)
      );

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );

      expect(meetingManager.selectedAudioInputDevice).toBe('mic-1');
      expect(hostedController.startAudioInput).toHaveBeenCalledTimes(1);
      expect(hostedController.startAudioInput).toHaveBeenCalledWith('mic-1');
      // Published so listeners such as the activity meter can attach to the restarted mic.
      expect(published).toContain('mic-1');
    });

    it('restarts the underlying device of a preserved transform device on rejoin', async () => {
      const transformDevice: any = {
        mute: jest.fn(),
        stop: jest.fn(),
        intrinsicDevice: jest.fn().mockResolvedValue('mic-1'),
      };

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await meetingManager.startAudioInputDevice(transformDevice);
      await meetingManager.leave();

      hostedController.startAudioInput.mockClear();
      // DefaultDeviceController is mocked in this suite; give getDeviceId its static ID lookup.
      // @ts-ignore
      DefaultDeviceController.getIntrinsicDeviceId = (d: any) => d;

      await meetingManager.listAndSelectDevices();

      // The stale transform is not reused; its inner device is restarted.
      expect(hostedController.startAudioInput).toHaveBeenCalledTimes(1);
      expect(hostedController.startAudioInput).toHaveBeenCalledWith('mic-1');
      expect(meetingManager.selectedAudioInputDevice).toBe('mic-1');
    });

    it('restarts the preserved input only once after leave', async () => {
      // Device setup page calls listAndSelectDevices, then join() calls it again.
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await meetingManager.startAudioInputDevice('mic-1');
      await meetingManager.leave();

      hostedController.startAudioInput.mockClear();

      await meetingManager.listAndSelectDevices();
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );

      expect(hostedController.startAudioInput).toHaveBeenCalledTimes(1);
    });

    it('does not restart when the builder already restarted the input after leave', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await meetingManager.startAudioInputDevice('mic-1');
      await meetingManager.leave();

      await meetingManager.startAudioInputDevice('mic-1');
      hostedController.startAudioInput.mockClear();

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );

      expect(hostedController.startAudioInput).not.toHaveBeenCalled();
    });

    it('keeps the input running and logs when the restart fails', async () => {
      const logger = new ConsoleLogger('MeetingManager');
      const error = jest.spyOn(logger, 'error').mockImplementation(() => {});
      const manager = new MeetingManager(logger, hostedController);

      await manager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      await manager.startAudioInputDevice('mic-1');
      await manager.leave();

      hostedController.startAudioInput.mockRejectedValueOnce(
        new Error('NotReadableError')
      );

      await expect(manager.listAndSelectDevices()).resolves.toBeUndefined();
      expect(error).toHaveBeenCalledWith(
        expect.stringContaining('failed to restart the selected audio input')
      );
      expect(manager.selectedAudioInputDevice).toBe('mic-1');
    });

    describe('handleAudioInputsChanged', () => {
      it('starts the device while the mic is in use', async () => {
        await meetingManager.join(
          mockMeetingSessionConfiguration,
          mockMeetingManagerJoinOptions
        );
        await meetingManager.startAudioInputDevice('mic-1');
        hostedController.startAudioInput.mockClear();

        await meetingManager.handleAudioInputsChanged('mic-2');

        expect(hostedController.startAudioInput).toHaveBeenCalledWith('mic-2');
        expect(meetingManager.selectedAudioInputDevice).toBe('mic-2');
      });

      it('selects and publishes without starting after leave, then rejoin starts the new device', async () => {
        await meetingManager.join(
          mockMeetingSessionConfiguration,
          mockMeetingManagerJoinOptions
        );
        await meetingManager.startAudioInputDevice('mic-1');
        await meetingManager.leave();
        hostedController.startAudioInput.mockClear();
        const published: any[] = [];
        meetingManager.subscribeToSelectedAudioInputDevice((d) =>
          published.push(d)
        );

        // mic-1 is unplugged while the user is out of the meeting.
        await meetingManager.handleAudioInputsChanged('mic-2');

        expect(hostedController.startAudioInput).not.toHaveBeenCalled();
        expect(meetingManager.selectedAudioInputDevice).toBe('mic-2');
        expect(published).toEqual(['mic-2']);

        // Back on the device setup page, the new selection is restarted, not the lost one.
        await meetingManager.listAndSelectDevices();
        expect(hostedController.startAudioInput).toHaveBeenCalledTimes(1);
        expect(hostedController.startAudioInput).toHaveBeenCalledWith('mic-2');
      });

      it('starts the device again once the mic restarted after leave', async () => {
        await meetingManager.join(
          mockMeetingSessionConfiguration,
          mockMeetingManagerJoinOptions
        );
        await meetingManager.startAudioInputDevice('mic-1');
        await meetingManager.leave();
        await meetingManager.listAndSelectDevices();
        hostedController.startAudioInput.mockClear();

        await meetingManager.handleAudioInputsChanged('mic-2');

        expect(hostedController.startAudioInput).toHaveBeenCalledWith('mic-2');
      });
    });
  });

  describe('handleAudioInputsChanged (not opted in)', () => {
    it('starts the device during a meeting', async () => {
      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      const controller = meetingManager.deviceController as any;
      controller.startAudioInput.mockClear();

      await meetingManager.handleAudioInputsChanged('mic-2');

      expect(controller.startAudioInput).toHaveBeenCalledWith('mic-2');
      expect(meetingManager.selectedAudioInputDevice).toBe('mic-2');
    });
  });
});
