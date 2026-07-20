// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActiveSpeakerPolicy,
  AudioInputDevice,
  AudioVideoFacade,
  AudioVideoObserver,
  DefaultActiveSpeakerPolicy,
  DefaultBrowserBehavior,
  DefaultDeviceController,
  DefaultMeetingSession,
  EventAttributes,
  EventController,
  EventName,
  EventObserver,
  Logger,
  MeetingSessionConfiguration,
  MeetingSessionStatus,
  MeetingSessionStatusCode,
  VideoInputDevice,
} from 'amazon-chime-sdk-js';

import {
  DeviceLabels,
  DeviceLabelTrigger,
  DeviceLabelTriggerStatus,
  MeetingStatus,
} from '../../types';
import {
  AttendeeResponse,
  FullDeviceInfoType,
  MeetingManagerJoinOptions,
  ParsedJoinParams,
} from './types';

function noOpDeviceLabelHook(): Promise<MediaStream> {
  return Promise.resolve(new MediaStream());
}

export class MeetingManager implements AudioVideoObserver {
  meetingSession: DefaultMeetingSession | null = null;

  meetingStatus: MeetingStatus = MeetingStatus.Loading;

  meetingStatusObservers: ((meetingStatus: MeetingStatus) => void)[] = [];

  audioVideo: AudioVideoFacade | null = null;

  audioVideoObservers: AudioVideoObserver = {};

  meetingSessionConfiguration: MeetingSessionConfiguration | undefined;

  meetingId: string | null = null;

  getAttendee?: (
    chimeAttendeeId: string,
    externalUserId?: string
  ) => Promise<AttendeeResponse>;

  selectedAudioOutputDevice: string | null;

  selectedAudioOutputDeviceObservers: ((deviceId: string | null) => void)[] =
    [];

  selectedAudioInputDevice: AudioInputDevice | undefined;

  selectedAudioInputDeviceObservers: ((
    device: AudioInputDevice | undefined
  ) => void)[] = [];

  selectedVideoInputDevice: VideoInputDevice | undefined;

  selectedVideoInputDeviceObservers: ((
    device: VideoInputDevice | undefined
  ) => void)[] = [];

  audioInputDevices: MediaDeviceInfo[] | null = null;

  audioOutputDevices: MediaDeviceInfo[] | null = null;

  videoInputDevices: MediaDeviceInfo[] | null = null;

  deviceLabelTriggerStatus = DeviceLabelTriggerStatus.UNTRIGGERED;

  deviceLabelTriggerStatusObservers: ((
    status: DeviceLabelTriggerStatus
  ) => void)[] = [];

  deviceLabelTriggerObservers: (() => void)[] = [];

  activeSpeakerListener: ((activeSpeakers: string[]) => void) | null = null;

  activeSpeakerCallbacks: ((activeSpeakers: string[]) => void)[] = [];

  activeSpeakers: string[] = [];

  audioVideoCallbacks: ((audioVideo: AudioVideoFacade | null) => void)[] = [];

  devicesUpdatedCallbacks: ((fullDeviceInfo: FullDeviceInfoType) => void)[] =
    [];

  private logger: Logger;

  private meetingEventObserverSet = new Set<
    (name: EventName, attributes: EventAttributes) => void
  >();

  private eventDidReceiveRef: EventObserver;

  private deviceLabels: DeviceLabels | DeviceLabelTrigger;

  /**
   * When the application opts in (via `MeetingProvider`'s `persistDeviceController`),
   * `DeviceControllerProvider` creates a `DefaultDeviceController` before any meeting and injects it
   * here. In that case device APIs work before `join()`, and this manager **borrows** the controller:
   * it builds the session from it but never destroys it (the provider owns its lifecycle).
   *
   * When not opted in this stays `undefined`; `join()` creates its own controller and `leave()`
   * destroys it — exactly the pre-existing behavior.
   */
  private injectedDeviceController: DefaultDeviceController | undefined;

  /**
   * The object device methods should target: the in-meeting `audioVideo` facade when a meeting is
   * active, otherwise the injected pre-meeting controller (if opted in). Both implement the JS SDK
   * `DeviceControllerFacade`, so list/select/observe/preview/analyser calls work through either.
   * `undefined` only when there is no meeting AND no injected controller (not opted in) — in which
   * case device methods are no-ops, exactly as before.
   */
  private get deviceSource():
    | AudioVideoFacade
    | DefaultDeviceController
    | null {
    return this.audioVideo ?? this.injectedDeviceController ?? null;
  }

  getDeviceLabels(): DeviceLabels | DeviceLabelTrigger {
    return this.deviceLabels;
  }

  constructor(logger: Logger, deviceController?: DefaultDeviceController) {
    this.logger = logger;
    this.injectedDeviceController = deviceController;
    this.eventDidReceiveRef = {
      eventDidReceive: (name: EventName, attributes: EventAttributes) => {
        this.publishEventDidReceiveUpdate(name, attributes);
      },
    };
  }

  /**
   * Reset session-scoped state only. Split out of `initializeMeetingManager()` so that an opted-in
   * `leave()` can end the session while **keeping** device selection state for a warm rejoin.
   */
  private resetSessionState(): void {
    this.meetingSession = null;
    this.audioVideo = null;
    this.meetingSessionConfiguration = undefined;
    this.meetingId = null;
    this.activeSpeakers = [];
    this.activeSpeakerListener = null;
    this.audioVideoObservers = {};
  }

  /** Reset device selection/enumeration state. Kept separate so it is only run on the legacy
   * (self-created controller) path, where the controller is destroyed and device state must be wiped. */
  private resetDeviceState(): void {
    this.selectedAudioOutputDevice = null;
    this.selectedAudioInputDevice = undefined;
    this.selectedVideoInputDevice = undefined;
    this.audioInputDevices = [];
    this.audioOutputDevices = [];
    this.videoInputDevices = [];
  }

  initializeMeetingManager(): void {
    this.resetSessionState();
    this.resetDeviceState();
  }

  async join(
    meetingSessionConfiguration: MeetingSessionConfiguration,
    options?: MeetingManagerJoinOptions
  ): Promise<void> {
    const {
      deviceLabels,
      eventController,
      enableWebAudio,
      activeSpeakerPolicy,
      skipDeviceSelection,
    } = this.parseJoinParams(options);
    this.meetingSessionConfiguration = meetingSessionConfiguration;
    this.meetingId = this.meetingSessionConfiguration.meetingId;

    let deviceController: DefaultDeviceController;
    if (this.injectedDeviceController) {
      // Opted in: reuse the provider-owned controller so pre-meeting device selections carry into
      // the session. It may have been used by a prior meeting; `DefaultMeetingSession` only binds an
      // eventController when one isn't already set, so clear the (now-stale) reference to let this
      // session bind its own — otherwise device-level events would publish to a dead controller.
      deviceController = this.injectedDeviceController;
      deviceController.eventController = undefined;
      // `enableWebAudio` is constructor-only in the JS SDK, so on the opted-in path it was already
      // fixed when `DeviceControllerProvider` built the controller (from `MeetingProvider`'s
      // `enableWebAudio` prop). A value passed via `join()` options here cannot be applied and is
      // silently dropped — warn so a builder migrating from the legacy join-option pattern doesn't
      // get Voice Focus quietly disabled with no signal.
      if (enableWebAudio) {
        this.logger.warn(
          'MeetingManager: `enableWebAudio` was passed to join(), but the device controller is ' +
            'hosted by MeetingProvider (persistDeviceController). enableWebAudio is constructor-only ' +
            'and must be set via the MeetingProvider `enableWebAudio` prop; the join() value is ignored.'
        );
      }
    } else {
      // Not opted in: create the controller here, exactly as before. `enableWebAudio` comes from the
      // join options on this legacy path.
      deviceController = new DefaultDeviceController(this.logger, {
        enableWebAudio: enableWebAudio,
      });
    }

    this.meetingSession = new DefaultMeetingSession(
      meetingSessionConfiguration,
      this.logger,
      deviceController,
      eventController
    );

    this.audioVideo = this.meetingSession.audioVideo;

    if (eventController) {
      eventController.addObserver(this.eventDidReceiveRef);
    } else {
      this.meetingSession.eventController.addObserver(this.eventDidReceiveRef);
    }

    this.setupAudioVideoObservers();
    this.setupDeviceLabelTrigger(deviceLabels);
    if (!skipDeviceSelection) {
      this.logger.info('[MeetingManager.join] listing and selecting devices');
      await this.listAndSelectDevices(deviceLabels);
    }

    this.publishAudioVideo();
    this.setupActiveSpeakerDetection(activeSpeakerPolicy);
    this.meetingStatus = MeetingStatus.Loading;
    this.publishMeetingStatus();
  }

  private parseJoinParams(
    options?: MeetingManagerJoinOptions
  ): ParsedJoinParams {
    const deviceLabels: DeviceLabels | DeviceLabelTrigger =
      options?.deviceLabels || DeviceLabels.AudioAndVideo;
    const eventController: EventController | undefined =
      options?.eventController;
    const enableWebAudio: boolean = options?.enableWebAudio || false;
    const activeSpeakerPolicy: ActiveSpeakerPolicy =
      options?.activeSpeakerPolicy || new DefaultActiveSpeakerPolicy();
    const skipDeviceSelection = options?.skipDeviceSelection || false;

    return {
      deviceLabels,
      eventController,
      enableWebAudio,
      activeSpeakerPolicy,
      skipDeviceSelection,
    };
  }

  async start(): Promise<void> {
    this.audioVideo?.start();
  }

  async leave(): Promise<void> {
    if (this.audioVideo) {
      this.audioVideo.stopContentShare();
      this.audioVideo.stopLocalVideoTile();
      this.audioVideo.unbindAudioElement();
    }

    try {
      if (this.injectedDeviceController) {
        // Opted in: the provider owns the controller, so release the media it holds (stop mic +
        // camera) but do NOT destroy it — it must survive for a warm rejoin. Do not
        // `chooseAudioOutput(null)` either; that is only a default-output selection and the output
        // choice is convenient to preserve. Release goes through the injected controller directly
        // (not `audioVideo`) so a pre-meeting `leave()` — e.g. a lobby "cancel" after
        // `setupDevices()` but before `join()`, when `audioVideo` is still null — still stops the
        // live mic/camera the controller acquired, instead of leaking it until provider unmount.
        await this.injectedDeviceController.stopAudioInput();
        await this.injectedDeviceController.stopVideoInput();
        // The controller is reused across meetings; drop the ended session's eventController so
        // pre-rejoin device operations don't publish device events into a stale session (the next
        // `join()` binds a fresh one). Cleared here, not only at join, to close the between-meetings
        // window.
        this.injectedDeviceController.eventController = undefined;
      } else if (this.audioVideo) {
        // Not opted in: destroy the controller this manager created, exactly as before.
        await this.meetingSession?.deviceController.chooseAudioOutput(null);
        await this.meetingSession?.deviceController.destroy();
      }
    } catch (error) {
      this.logger.info(
        'MeetingManager failed to clean up media resources on leave'
      );
    }

    if (this.audioVideo) {
      if (this.activeSpeakerListener) {
        this.audioVideo.unsubscribeFromActiveSpeakerDetector(
          this.activeSpeakerListener
        );
      }

      this.audioVideo.stop();
    }

    if (this.injectedDeviceController) {
      // Keep device selection state (warm rejoin); only tear down the session. But the streams were
      // just stopped, so clear the tracked *input* selections — otherwise the next setupDevices()/
      // listAndSelectDevices() would skip re-acquiring them (guard is `!selectedAudioInputDevice`),
      // leaving a dead mic/camera while the UI still shows a device selected. Output selection (a
      // setSinkId choice, no live stream) is left intact but is explicitly re-applied on the next
      // join (see `listAndSelectDevices`), since a fresh session's audio-mix controller starts on
      // the default sink.
      this.resetSessionState();
      this.selectedAudioInputDevice = undefined;
      this.publishSelectedAudioInputDevice();
      this.selectedVideoInputDevice = undefined;
      this.publishSelectedVideoInputDevice();
    } else {
      this.initializeMeetingManager();
    }

    this.publishAudioVideo();
    this.publishActiveSpeaker();
  }

  audioVideoDidStart = (): void => {
    this.logger.info(
      '[MeetingManager audioVideoDidStart] Meeting started successfully'
    );
    this.meetingStatus = MeetingStatus.Succeeded;
    this.publishMeetingStatus();
  };

  audioVideoDidStartConnecting = (reconnecting: boolean): void => {
    if (this.meetingStatus === MeetingStatus.Reconnecting) {
      return;
    }
    if (reconnecting) {
      this.meetingStatus = MeetingStatus.Reconnecting;
      this.publishMeetingStatus();
    }
  };

  audioVideoDidStop = (sessionStatus: MeetingSessionStatus): void => {
    const sessionStatusCode = sessionStatus.statusCode();
    switch (sessionStatusCode) {
      case MeetingSessionStatusCode.MeetingEnded:
        this.logger.info(
          `[MeetingManager audioVideoDidStop] Meeting ended for all: ${sessionStatusCode}`
        );
        this.meetingStatus = MeetingStatus.Ended;
        break;
      case MeetingSessionStatusCode.Left:
        this.logger.info(
          `[MeetingManager audioVideoDidStop] Left the meeting: ${sessionStatusCode}`
        );
        this.meetingStatus = MeetingStatus.Left;
        break;
      case MeetingSessionStatusCode.AudioJoinedFromAnotherDevice:
        this.logger.info(
          `[MeetingManager audioVideoDidStop] Meeting joined from another device: ${sessionStatusCode}`
        );
        this.meetingStatus = MeetingStatus.JoinedFromAnotherDevice;
        break;
      default:
        // The following status codes are Failures according to MeetingSessionStatus
        if (sessionStatus.isFailure() && !sessionStatus.isTerminal()) {
          this.logger.info(
            `[MeetingManager audioVideoDidStop] Non-Terminal failure occurred: ${sessionStatusCode}`
          );
          this.meetingStatus = MeetingStatus.Failed;
        } else if (sessionStatus.isTerminal()) {
          this.logger.info(
            `[MeetingManager audioVideoDidStop] Terminal failure occurred: ${sessionStatusCode}`
          );
          this.meetingStatus = MeetingStatus.TerminalFailure;
        } else {
          this.logger.info(
            `[MeetingManager audioVideoDidStop] session stopped with code ${sessionStatusCode}`
          );
        }
    }

    this.publishMeetingStatus();
    this.audioVideo?.removeObserver(this.audioVideoObservers);
    this.leave();
  };

  setupAudioVideoObservers(): void {
    if (!this.audioVideo) {
      return;
    }

    this.audioVideoObservers = {
      audioVideoDidStart: this.audioVideoDidStart,
      audioVideoDidStartConnecting: this.audioVideoDidStartConnecting,
      audioVideoDidStop: this.audioVideoDidStop,
    };

    this.audioVideo.addObserver(this.audioVideoObservers);
  }

  async updateDeviceLists(): Promise<void> {
    // `deviceSource` is the in-meeting facade, or the injected pre-meeting controller when opted in,
    // so device enumeration works before `join()`. Falls back to `audioVideo` (today's behavior)
    // when not opted in.
    this.audioInputDevices =
      (await this.deviceSource?.listAudioInputDevices()) || [];
    this.videoInputDevices =
      (await this.deviceSource?.listVideoInputDevices()) || [];
    this.audioOutputDevices =
      (await this.deviceSource?.listAudioOutputDevices()) || [];
  }

  setupDeviceLabelTrigger(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): void {
    /**
     * A builder can set device labels either using `meetingManager.join`,
     * `meetingManager.invokeDeviceProvider`, or (opted in) `meetingManager.setupDevices`. All use
     * `setupDeviceLabelTrigger`, thus, set the `deviceLabels` in this method.
     */
    this.deviceLabels = deviceLabels;

    let callback: DeviceLabelTrigger;

    if (typeof deviceLabels === 'function') {
      callback = deviceLabels;
    } else if (deviceLabels === DeviceLabels.None) {
      callback = noOpDeviceLabelHook;
    } else {
      const constraints: MediaStreamConstraints = {};

      switch (deviceLabels) {
        case DeviceLabels.Audio:
          constraints.audio = true;
          break;
        case DeviceLabels.Video:
          constraints.video = true;
          break;
        case DeviceLabels.AudioAndVideo:
          constraints.audio = true;
          constraints.video = true;
          break;
      }

      callback = async (): Promise<MediaStream> => {
        this.deviceLabelTriggerStatus = DeviceLabelTriggerStatus.IN_PROGRESS;
        this.publishDeviceLabelTriggerStatus();
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const hasVideoInput = devices.some(
            (value) => value.kind === 'videoinput'
          );

          const stream = await navigator.mediaDevices.getUserMedia({
            audio: constraints.audio,
            video: constraints.video && hasVideoInput,
          });

          this.deviceLabelTriggerStatus = DeviceLabelTriggerStatus.GRANTED;
          this.publishDeviceLabelTriggerStatus();
          return stream;
        } catch (error) {
          this.logger.error('MeetingManager failed to get device permissions');
          this.deviceLabelTriggerStatus = DeviceLabelTriggerStatus.DENIED;
          this.publishDeviceLabelTriggerStatus();
          throw error;
        }
      };
    }

    this.deviceSource?.setDeviceLabelTrigger(callback);
  }

  /**
   * Pre-meeting entry point (opt-in). Install the permission/label trigger, then enumerate and
   * default-select devices — all with no `MeetingSession`, via the injected controller. Safe to call
   * before a meeting exists. No-op source-wise if not opted in (no controller, no meeting).
   */
  async setupDevices(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): Promise<void> {
    this.setupDeviceLabelTrigger(deviceLabels);
    await this.listAndSelectDevices(deviceLabels);
  }

  private setupActiveSpeakerDetection(
    activeSpeakerPolicy: ActiveSpeakerPolicy
  ): void {
    this.publishActiveSpeaker();

    this.activeSpeakerListener = (activeSpeakers: string[]) => {
      this.activeSpeakers = activeSpeakers;
      this.activeSpeakerCallbacks.forEach((cb) => cb(activeSpeakers));
    };

    this.audioVideo?.subscribeToActiveSpeakerDetector(
      activeSpeakerPolicy
        ? activeSpeakerPolicy
        : new DefaultActiveSpeakerPolicy(),
      this.activeSpeakerListener
    );
  }

  async listAndSelectDevices(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): Promise<void> {
    await this.updateDeviceLists();

    // If `deviceLabels` is of `DeviceLabelTrigger` type, no device will be selected.
    // In this case, you need to handle the device selection yourself.
    if (typeof deviceLabels === 'function') return;

    let isAudioDeviceRequested: boolean = false;
    let isVideoDeviceRequested: boolean = false;

    switch (deviceLabels) {
      case DeviceLabels.None:
        break;
      case DeviceLabels.Audio:
        isAudioDeviceRequested = true;
        break;
      case DeviceLabels.Video:
        isVideoDeviceRequested = true;
        break;
      case DeviceLabels.AudioAndVideo:
        isAudioDeviceRequested = true;
        isVideoDeviceRequested = true;
        break;
    }

    if (
      isAudioDeviceRequested &&
      !this.selectedAudioInputDevice &&
      this.audioInputDevices &&
      this.audioInputDevices.length
    ) {
      this.selectedAudioInputDevice = this.audioInputDevices[0].deviceId;
      try {
        await this.deviceSource?.startAudioInput(
          this.audioInputDevices[0].deviceId
        );
      } catch (error) {
        this.logger.error(
          `MeetingManager failed to select audio input device on join: ${error}`
        );
      }
      this.publishSelectedAudioInputDevice();
    }
    if (
      isAudioDeviceRequested &&
      !this.selectedAudioOutputDevice &&
      this.audioOutputDevices &&
      this.audioOutputDevices.length
    ) {
      this.selectedAudioOutputDevice = this.audioOutputDevices[0].deviceId;
      if (new DefaultBrowserBehavior().supportsSetSinkId()) {
        try {
          await this.deviceSource?.chooseAudioOutput(
            this.audioOutputDevices[0].deviceId
          );
        } catch (error) {
          this.logger.error(
            `MeetingManager failed to select audio output device on join: ${error}`
          );
        }
      }
      this.publishSelectedAudioOutputDevice();
    } else if (
      isAudioDeviceRequested &&
      this.selectedAudioOutputDevice &&
      new DefaultBrowserBehavior().supportsSetSinkId()
    ) {
      // Warm rejoin (opted in): the output selection was preserved across `leave()`, so the guarded
      // default-pick above is skipped — but the new meeting session's audio-mix controller starts on
      // the default sink. Re-apply the preserved selection so remote audio actually routes to the
      // chosen device instead of the system default (which would silently disagree with the UI).
      try {
        await this.deviceSource?.chooseAudioOutput(
          this.selectedAudioOutputDevice
        );
      } catch (error) {
        this.logger.error(
          `MeetingManager failed to re-apply audio output device on rejoin: ${error}`
        );
      }
    }
    if (
      isVideoDeviceRequested &&
      !this.selectedVideoInputDevice &&
      this.videoInputDevices &&
      this.videoInputDevices.length
    ) {
      this.selectedVideoInputDevice = this.videoInputDevices[0].deviceId;
      this.publishSelectedVideoInputDevice();
    }
  }

  startAudioInputDevice = async (device: AudioInputDevice): Promise<void> => {
    try {
      await this.deviceSource?.startAudioInput(device);
      this.selectedAudioInputDevice = device;
      this.publishSelectedAudioInputDevice();
    } catch (error) {
      const newError = new Error(
        'MeetingManager failed to select audio input device.'
      );
      if (error instanceof Error) {
        newError.name = error.name;
        newError.message += ' ' + error.message;
      }
      this.logger.error(newError.toString());
      throw newError;
    }
  };

  startAudioOutputDevice = async (deviceId: string): Promise<void> => {
    try {
      await this.deviceSource?.chooseAudioOutput(deviceId);
      this.selectedAudioOutputDevice = deviceId;
      this.publishSelectedAudioOutputDevice();
    } catch (error) {
      this.logger.error(
        `MeetingManager failed to select audio output device: ${error}`
      );
      throw new Error('MeetingManager failed to select audio output device');
    }
  };

  startVideoInputDevice = async (device: VideoInputDevice): Promise<void> => {
    try {
      await this.deviceSource?.startVideoInput(device);
      this.selectedVideoInputDevice = device;
      this.publishSelectedVideoInputDevice();
    } catch (error) {
      const newError = new Error(
        'MeetingManager failed to select video input device.'
      );
      if (error instanceof Error) {
        newError.name = error.name;
        newError.message += ' ' + error.message;
      }
      this.logger.error(newError.toString());
      throw newError;
    }
  };

  stopVideoInputDevice = async (): Promise<void> => {
    try {
      await this.deviceSource?.stopVideoInput();
      this.selectedVideoInputDevice = undefined;
      this.publishSelectedVideoInputDevice();
    } catch (error) {
      this.logger.error(
        `MeetingManager failed to unselect video input device: ${error}`
      );
      throw new Error('MeetingManager failed to unselect video input device');
    }
  };

  selectVideoInputDevice = (device: VideoInputDevice): void => {
    this.selectedVideoInputDevice = device;
    this.publishSelectedVideoInputDevice();
  };

  invokeDeviceProvider = (deviceLabels: DeviceLabels): void => {
    this.setupDeviceLabelTrigger(deviceLabels);
    this.publishDeviceLabelTrigger();
  };

  /**
   * ====================================================================
   * Subscriptions
   * ====================================================================
   */

  subscribeToAudioVideo = (
    callback: (av: AudioVideoFacade | null) => void
  ): void => {
    this.audioVideoCallbacks.push(callback);
  };

  unsubscribeFromAudioVideo = (
    callbackToRemove: (av: AudioVideoFacade | null) => void
  ): void => {
    this.audioVideoCallbacks = this.audioVideoCallbacks.filter(
      (callback) => callback !== callbackToRemove
    );
  };

  publishAudioVideo = (): void => {
    this.audioVideoCallbacks.forEach((callback) => {
      callback(this.audioVideo);
    });
  };

  subscribeToActiveSpeaker = (
    callback: (activeSpeakers: string[]) => void
  ): void => {
    this.activeSpeakerCallbacks.push(callback);
    callback(this.activeSpeakers);
  };

  unsubscribeFromActiveSpeaker = (
    callbackToRemove: (activeSpeakers: string[]) => void
  ): void => {
    this.activeSpeakerCallbacks = this.activeSpeakerCallbacks.filter(
      (callback) => callback !== callbackToRemove
    );
  };

  publishActiveSpeaker = (): void => {
    this.activeSpeakerCallbacks.forEach((callback) => {
      callback(this.activeSpeakers);
    });
  };

  subscribeToSelectedVideoInputDevice = (
    callback: (device: VideoInputDevice | undefined) => void
  ): void => {
    this.selectedVideoInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedVideoInputDevice = (
    callbackToRemove: (device: VideoInputDevice | undefined) => void
  ): void => {
    this.selectedVideoInputDeviceObservers =
      this.selectedVideoInputDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedVideoInputDevice = (): void => {
    for (const observer of this.selectedVideoInputDeviceObservers) {
      observer(this.selectedVideoInputDevice);
    }
  };

  subscribeToSelectedAudioInputDevice = (
    callback: (device: AudioInputDevice) => void
  ): void => {
    this.selectedAudioInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioInputDevice = (
    callbackToRemove: (device: AudioInputDevice) => void
  ): void => {
    this.selectedAudioInputDeviceObservers =
      this.selectedAudioInputDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedAudioInputDevice = (): void => {
    for (const observer of this.selectedAudioInputDeviceObservers) {
      observer(this.selectedAudioInputDevice);
    }
  };

  subscribeToSelectedAudioOutputDevice = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioOutputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioOutputDevice = (
    callbackToRemove: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioOutputDeviceObservers =
      this.selectedAudioOutputDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedAudioOutputDevice = (): void => {
    for (const observer of this.selectedAudioOutputDeviceObservers) {
      observer(this.selectedAudioOutputDevice);
    }
  };

  subscribeToMeetingStatus = (
    callback: (meetingStatus: MeetingStatus) => void
  ): void => {
    this.meetingStatusObservers.push(callback);
    callback(this.meetingStatus);
  };

  unsubscribeFromMeetingStatus = (
    callbackToRemove: (meetingStatus: MeetingStatus) => void
  ): void => {
    this.meetingStatusObservers = this.meetingStatusObservers.filter(
      (callback) => callback !== callbackToRemove
    );
  };

  private publishMeetingStatus = (): void => {
    this.meetingStatusObservers.forEach((callback) => {
      callback(this.meetingStatus);
    });
  };

  subscribeToDeviceLabelTrigger = (callback: () => void): void => {
    this.deviceLabelTriggerObservers.push(callback);
  };

  unsubscribeFromDeviceLabelTrigger = (callbackToRemove: () => void): void => {
    this.deviceLabelTriggerObservers = this.deviceLabelTriggerObservers.filter(
      (callback) => callback !== callbackToRemove
    );
  };

  private publishDeviceLabelTrigger = (): void => {
    for (const callback of this.deviceLabelTriggerObservers) {
      callback();
    }
  };

  subscribeToDeviceLabelTriggerStatus = (
    callback: (permission: DeviceLabelTriggerStatus) => void
  ): void => {
    this.deviceLabelTriggerStatusObservers.push(callback);
  };

  unsubscribeFromDeviceLabelTriggerStatus = (
    callbackToRemove: (permission: DeviceLabelTriggerStatus) => void
  ): void => {
    this.deviceLabelTriggerStatusObservers =
      this.deviceLabelTriggerStatusObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishDeviceLabelTriggerStatus = (): void => {
    for (const observer of this.deviceLabelTriggerStatusObservers) {
      observer(this.deviceLabelTriggerStatus);
    }
  };

  subscribeToEventDidReceive = (
    callback: (name: EventName, attributes: EventAttributes) => void
  ): void => {
    this.meetingEventObserverSet.add(callback);
  };

  unsubscribeFromEventDidReceive = (
    callbackToRemove: (name: EventName, attributes: EventAttributes) => void
  ): void => {
    this.meetingEventObserverSet.delete(callbackToRemove);
  };

  private publishEventDidReceiveUpdate = (
    name: EventName,
    attributes: EventAttributes
  ): void => {
    this.meetingEventObserverSet.forEach((callback) =>
      callback(name, attributes)
    );
  };
}

export default MeetingManager;
