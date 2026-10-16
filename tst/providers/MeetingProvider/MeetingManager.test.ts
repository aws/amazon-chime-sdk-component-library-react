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
    setDeviceLabelTrigger: jest.fn(),
    addDeviceChangeObserver: jest.fn(),
    removeDeviceChangeObserver: jest.fn(),
    destroy: jest.fn().mockResolvedValue(undefined),
    eventController: undefined,
  };
}

function makeEventController(): any {
  return {
    addObserver: jest.fn(),
    removeObserver: jest.fn(),
    publishEvent: jest.fn(),
    destroy: jest.fn().mockResolvedValue(undefined),
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
    DefaultMeetingSession = jest
      .fn()
      .mockImplementation(
        (_configuration, _logger, deviceController, eventController) => {
          // Bind like the real constructor: use the join() eventController or create one, and attach
          // it to the device controller only when the controller has none.
          const sessionEventController =
            eventController ?? makeEventController();
          if (deviceController && !deviceController.eventController) {
            deviceController.eventController = sessionEventController;
          }
          return {
            audioVideo: {
              addObserver: jest.fn().mockReturnValue({}),
              removeObserver: jest.fn().mockReturnValue({}),
              subscribeToActiveSpeakerDetector: jest.fn().mockReturnValue({}),
              unsubscribeFromActiveSpeakerDetector: jest
                .fn()
                .mockReturnValue({}),
              stopContentShare: jest.fn().mockReturnValue({}),
              stopLocalVideoTile: jest.fn().mockReturnValue({}),
              unbindAudioElement: jest.fn().mockReturnValue({}),
              start: jest.fn().mockReturnValue({}),
              stop: jest.fn().mockReturnValue({}),
            },
            deviceController,
            eventController: sessionEventController,
            // Matches amazon-chime-sdk-js 3.32.0: destroys the event controller, leaves the binding.
            destroy: jest.fn().mockImplementation(async () => {
              await sessionEventController.destroy?.();
            }),
          };
        }
      );
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

  describe('audioVideoDidStop destroys the meeting session', () => {
    let hostedController: any;

    const leftStatus = (): MeetingSessionStatus =>
      new MeetingSessionStatus(MeetingSessionStatusCode.Left);

    // The observer join() registered on the session, captured before leave() resets audioVideo.
    const registeredObserver = (manager: MeetingManager): any =>
      (manager.audioVideo?.addObserver as jest.Mock).mock.calls[0][0];

    beforeEach(() => {
      hostedController = makeController();
      meetingManager = new MeetingManager(
        new ConsoleLogger('MeetingManager'),
        hostedController
      );
    });

    it('destroys the session on audioVideoDidStop, after leave() and the terminal publish', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration);
      const session: any = meetingManager.meetingSession;
      const observer = registeredObserver(meetingManager);

      await meetingManager.leave();
      expect(session.destroy).not.toHaveBeenCalled();

      await observer.audioVideoDidStop(leftStatus());
      expect(session.destroy).toHaveBeenCalledTimes(1);
    });

    it('runs leave() before destroying the session when the meeting ends remotely', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration);
      const session: any = meetingManager.meetingSession;

      await registeredObserver(meetingManager).audioVideoDidStop(
        new MeetingSessionStatus(MeetingSessionStatusCode.MeetingEnded)
      );

      expect(session.audioVideo.stop).toHaveBeenCalled();
      expect(session.destroy).toHaveBeenCalledTimes(1);
      expect(session.audioVideo.stop.mock.invocationCallOrder[0]).toBeLessThan(
        session.destroy.mock.invocationCallOrder[0]
      );
      expect(meetingManager.meetingSession).toBeNull();
    });

    it('unbinds the SDK-created eventController so the next join binds a fresh one', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration);
      const firstEventController: any =
        meetingManager.meetingSession?.eventController;
      expect(hostedController.eventController).toBe(firstEventController);
      const observer = registeredObserver(meetingManager);

      await meetingManager.leave();
      await observer.audioVideoDidStop(leftStatus());

      expect(firstEventController.destroy).toHaveBeenCalledTimes(1);
      expect(hostedController.eventController).toBeUndefined();

      await meetingManager.join(mockMeetingSessionConfiguration);
      const secondEventController =
        meetingManager.meetingSession?.eventController;
      expect(secondEventController).not.toBe(firstEventController);
      expect(hostedController.eventController).toBe(secondEventController);
    });

    it('destroys and unbinds a join() eventController the session bound onto the controller', async () => {
      const firstEventController = makeEventController();
      await meetingManager.join(mockMeetingSessionConfiguration, {
        eventController: firstEventController,
      });
      expect(hostedController.eventController).toBe(firstEventController);
      const observer = registeredObserver(meetingManager);

      await meetingManager.leave();
      await observer.audioVideoDidStop(leftStatus());

      expect(firstEventController.destroy).toHaveBeenCalledTimes(1);
      expect(hostedController.eventController).toBeUndefined();

      const secondEventController = makeEventController();
      await meetingManager.join(mockMeetingSessionConfiguration, {
        eventController: secondEventController,
      });
      expect(hostedController.eventController).toBe(secondEventController);
    });

    it('keeps a builder eventController mounted on the controller', async () => {
      const mountedEventController = makeEventController();
      hostedController.eventController = mountedEventController;
      await meetingManager.join(mockMeetingSessionConfiguration);
      const observer = registeredObserver(meetingManager);

      await meetingManager.leave();
      await observer.audioVideoDidStop(leftStatus());

      expect(mountedEventController.destroy).not.toHaveBeenCalled();
      expect(hostedController.eventController).toBe(mountedEventController);
    });

    it('keeps a join() eventController that has no destroy() bound to the controller', async () => {
      const eventController: any = {
        addObserver: jest.fn(),
        removeObserver: jest.fn(),
        publishEvent: jest.fn(),
      };
      await meetingManager.join(mockMeetingSessionConfiguration, {
        eventController,
      });
      const observer = registeredObserver(meetingManager);

      await meetingManager.leave();
      await observer.audioVideoDidStop(leftStatus());

      expect(hostedController.eventController).toBe(eventController);
    });

    it('keeps the public audioVideoDidStop limited to leave()', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration);
      const session: any = meetingManager.meetingSession;

      await meetingManager.audioVideoDidStop(leftStatus());

      expect(session.audioVideo.stop).toHaveBeenCalled();
      expect(session.destroy).not.toHaveBeenCalled();
    });

    it('destroys the session the observer belongs to after a rejoin', async () => {
      await meetingManager.join(mockMeetingSessionConfiguration);
      const firstSession: any = meetingManager.meetingSession;
      const firstObserver = registeredObserver(meetingManager);
      await meetingManager.leave();

      await meetingManager.join(mockMeetingSessionConfiguration);
      const secondSession: any = meetingManager.meetingSession;

      await firstObserver.audioVideoDidStop(leftStatus());

      expect(firstSession.destroy).toHaveBeenCalledTimes(1);
      expect(secondSession.destroy).not.toHaveBeenCalled();
    });

    it('destroys the session when the controller is not persisted', async () => {
      const manager = new MeetingManager(new ConsoleLogger('MeetingManager'));
      await manager.join(mockMeetingSessionConfiguration);
      const session: any = manager.meetingSession;
      const sessionEventController: any = session.eventController;
      const observer = registeredObserver(manager);

      await manager.leave();
      await observer.audioVideoDidStop(leftStatus());

      expect(session.destroy).toHaveBeenCalledTimes(1);
      expect(sessionEventController.destroy).toHaveBeenCalledTimes(1);
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

    it('releases the hosted controller media on a pre-meeting leave (no meeting yet)', async () => {
      // No meeting was joined (audioVideo null), but the controller may hold a live mic/camera from
      // device setup. A pre-meeting leave() (e.g. lobby "cancel") must still stop its streams.
      expect(meetingManager.audioVideo).toBeNull();

      await meetingManager.leave();

      expect(hostedController.stopAudioInput).toHaveBeenCalled();
      expect(hostedController.stopVideoInput).toHaveBeenCalled();
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

    it('does not auto-open a default input on a warm rejoin when a selection is preserved', async () => {
      // Default (non-skip) rejoin: because the input selection now persists, listAndSelectDevices'
      // "pick + start devices[0]" guard is skipped — the mic is NOT auto-reopened. Restarting the
      // media is the application's responsibility (matching how the library already treats video).
      hostedController.listAudioInputDevices.mockResolvedValue([
        { deviceId: 'mic-0' },
      ] as any);

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );
      meetingManager.selectedAudioInputDevice = 'mic-1';
      await meetingManager.leave();

      hostedController.startAudioInput.mockClear();

      await meetingManager.join(
        mockMeetingSessionConfiguration,
        mockMeetingManagerJoinOptions
      );

      expect(meetingManager.selectedAudioInputDevice).toBe('mic-1');
      expect(hostedController.startAudioInput).not.toHaveBeenCalled();
    });
  });
});
