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
  DeviceControllerBasedMediaStreamBroker,
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

  deviceController: DeviceControllerBasedMediaStreamBroker | undefined;

  deviceControllerCallbacks: ((
    deviceController: DeviceControllerBasedMediaStreamBroker | undefined
  ) => void)[] = [];

  private persistDeviceController: boolean;

  /**
   * The eventController the device controller was constructed with, captured so `leave()` can restore
   * it. `DefaultMeetingSession` assigns its own eventController onto the device controller only when the
   * controller has none; for a persisted controller that outlives the session, restoring this on leave
   * clears a session-assigned controller (captured value was `undefined`) while keeping a
   * builder-supplied one.
   */
  private hostedEventController: EventController | undefined;

  getDeviceLabels(): DeviceLabels | DeviceLabelTrigger {
    return this.deviceLabels;
  }

  constructor(logger: Logger, deviceController?: DeviceControllerBasedMediaStreamBroker) {
    this.logger = logger;
    this.deviceController = deviceController;
    this.persistDeviceController = !!deviceController;
    this.hostedEventController = deviceController?.eventController;
    this.eventDidReceiveRef = {
      eventDidReceive: (name: EventName, attributes: EventAttributes) => {
        this.publishEventDidReceiveUpdate(name, attributes);
      },
    };
  }

  private resetSessionState(): void {
    this.meetingSession = null;
    this.audioVideo = null;
    this.meetingSessionConfiguration = undefined;
    this.meetingId = null;
    this.activeSpeakers = [];
    this.activeSpeakerListener = null;
    this.audioVideoObservers = {};
  }

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

    if (!this.deviceController) {
      this.deviceController = new DefaultDeviceController(this.logger, {
        enableWebAudio: enableWebAudio,
      });
      this.publishDeviceController();
    } else if (enableWebAudio) {
      this.logger.warn(
        'MeetingManager: `enableWebAudio` passed to join() is ignored when a `deviceController` is ' +
          'provided to MeetingProvider. Construct that controller with `{ enableWebAudio: true }` instead.'
      );
    }

    if (!eventController && this.deviceController.eventController) {
      this.logger.info(
        'MeetingManager: the provided device controller has its own eventController; device events ' +
          'report to it, while meeting events use a separate event controller. Pass an eventController ' +
          'to join() to unify them.'
      );
    }

    this.meetingSession = new DefaultMeetingSession(
      meetingSessionConfiguration,
      this.logger,
      this.deviceController,
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
    this.audioVideo?.stopContentShare();
    this.audioVideo?.stopLocalVideoTile();
    this.audioVideo?.unbindAudioElement();

    await this.cleanUpDeviceController();
    this.tearDownActiveSpeaker();
    this.audioVideo?.stop();
    this.resetState();

    this.publishAudioVideo();
    this.publishActiveSpeaker();
  }

  private async cleanUpDeviceController(): Promise<void> {
    try {
      if (this.persistDeviceController) {
        await this.deviceController?.stopAudioInput();
        await this.deviceController?.stopVideoInput();
        if (this.deviceController) {
          this.deviceController.eventController = this.hostedEventController;
        }
      } else {
        await this.deviceController?.chooseAudioOutput(null);
        await this.deviceController?.destroy();
        this.deviceController = undefined;
        this.publishDeviceController();
      }
    } catch (error) {
      this.logger.info(
        'MeetingManager failed to clean up media resources on leave'
      );
    }
  }

  private tearDownActiveSpeaker(): void {
    if (this.activeSpeakerListener) {
      this.audioVideo?.unsubscribeFromActiveSpeakerDetector(
        this.activeSpeakerListener
      );
    }
  }

  private resetState(): void {
    if (this.persistDeviceController) {
      this.resetSessionState();
      this.selectedAudioInputDevice = undefined;
      this.publishSelectedAudioInputDevice();
      this.selectedVideoInputDevice = undefined;
      this.publishSelectedVideoInputDevice();
    } else {
      this.initializeMeetingManager();
    }
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
    this.audioInputDevices =
      (await this.deviceController?.listAudioInputDevices()) || [];
    this.videoInputDevices =
      (await this.deviceController?.listVideoInputDevices()) || [];
    this.audioOutputDevices =
      (await this.deviceController?.listAudioOutputDevices()) || [];
  }

  setupDeviceLabelTrigger(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): void {
    /**
     * A builder can set device labels either using `meetingManager.join` or
     * `meetingManager.invokeDeviceProvider`. Both use `setupDeviceLabelTrigger`, thus, set the
     * `deviceLabels` in this method.
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

    this.deviceController?.setDeviceLabelTrigger(callback);
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
        await this.deviceController?.startAudioInput(
          this.audioInputDevices[0].deviceId
        );
      } catch (error) {
        this.logger.error(
          `MeetingManager failed to select audio input device on join: ${error}`
        );
      }
      this.publishSelectedAudioInputDevice();
    }
    if (isAudioDeviceRequested) {
      if (!this.selectedAudioOutputDevice && this.audioOutputDevices?.length) {
        this.selectedAudioOutputDevice = this.audioOutputDevices[0].deviceId;
        this.publishSelectedAudioOutputDevice();
      }
      if (
        this.selectedAudioOutputDevice &&
        new DefaultBrowserBehavior().supportsSetSinkId()
      ) {
        try {
          await this.deviceController?.chooseAudioOutput(
            this.selectedAudioOutputDevice
          );
        } catch (error) {
          this.logger.error(
            `MeetingManager failed to select audio output device: ${error}`
          );
        }
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
      await this.deviceController?.startAudioInput(device);
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
      await this.deviceController?.chooseAudioOutput(deviceId);
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
      await this.deviceController?.startVideoInput(device);
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
      await this.deviceController?.stopVideoInput();
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

  subscribeToDeviceController = (
    callback: (
      deviceController: DeviceControllerBasedMediaStreamBroker | undefined
    ) => void
  ): void => {
    this.deviceControllerCallbacks.push(callback);
    callback(this.deviceController);
  };

  unsubscribeFromDeviceController = (
    callbackToRemove: (
      deviceController: DeviceControllerBasedMediaStreamBroker | undefined
    ) => void
  ): void => {
    this.deviceControllerCallbacks = this.deviceControllerCallbacks.filter(
      (callback) => callback !== callbackToRemove
    );
  };

  publishDeviceController = (): void => {
    this.deviceControllerCallbacks.forEach((callback) => {
      callback(this.deviceController);
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
