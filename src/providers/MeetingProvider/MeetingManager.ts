// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActiveSpeakerPolicy,
  AudioTransformDevice,
  AudioVideoFacade,
  AudioVideoObserver,
  DefaultActiveSpeakerPolicy,
  DefaultDeviceController,
  DefaultMeetingSession,
  Device,
  EventAttributes,
  EventController,
  EventName,
  EventObserver,
  isAudioTransformDevice,
  isVideoTransformDevice,
  Logger,
  MeetingSessionConfiguration,
  MeetingSessionStatus,
  MeetingSessionStatusCode,
  VideoTransformDevice,
} from 'amazon-chime-sdk-js';

import { DeviceLabels, DeviceLabelTrigger, MeetingStatus } from '../../types';
import {
  audioInputSelectionToDevice,
  supportsSetSinkId,
  videoInputSelectionToDevice,
} from '../../utils/device-utils';
import {
  AttendeeResponse,
  DevicePermissionStatus,
  FullDeviceInfoType,
  MeetingManagerJoinOptions,
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

  selectedAudioOutputDevice: string | null = null;

  selectedAudioOutputDeviceObservers: ((deviceId: string | null) => void)[] =
    [];

  selectedAudioInputDevice: string | null = null;

  selectedAudioInputTransformDevice: Device | AudioTransformDevice | null =
    null;

  selectedAudioInputDeviceObservers: ((deviceId: string | null) => void)[] = [];

  selectedAudioInputTransformDeviceObservers: ((
    device: Device | AudioTransformDevice | null
  ) => void)[] = [];

  selectAudioInputDeviceError: Error | null = null;

  selectAudioInputDeviceErrorObservers: ((
    selectAudioInputDeviceError: Error | null
  ) => void)[] = [];

  selectedVideoInputDevice: string | null = null;

  selectedVideoInputTransformDevice: Device | VideoTransformDevice | null =
    null;

  selectedVideoInputTransformDeviceObservers: ((
    device: Device | VideoTransformDevice | null
  ) => void)[] = [];

  selectedVideoInputDeviceObservers: ((deviceId: string | null) => void)[] = [];

  selectVideoInputDeviceError: Error | null = null;

  selectVideoInputDeviceErrorObservers: ((
    selectVideoInputDeviceError: Error | null
  ) => void)[] = [];

  deviceLabelTriggerChangeObservers: (() => void)[] = [];

  audioInputDevices: MediaDeviceInfo[] | null = null;

  audioOutputDevices: MediaDeviceInfo[] | null = null;

  videoInputDevices: MediaDeviceInfo[] | null = null;

  devicePermissionStatus = DevicePermissionStatus.UNSET;

  devicePermissionsObservers: ((permission: DevicePermissionStatus) => void)[] =
    [];

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

  constructor(logger: Logger) {
    this.logger = logger;
    this.eventDidReceiveRef = {
      eventDidReceive: (name: EventName, attributes: EventAttributes) => {
        this.publishEventDidReceiveUpdate(name, attributes);
      },
    };
  }

  initializeMeetingManager(): void {
    this.meetingSession = null;
    this.audioVideo = null;
    this.meetingSessionConfiguration = undefined;
    this.meetingId = null;
    this.selectedAudioOutputDevice = null;
    this.selectedAudioInputDevice = null;
    this.selectedAudioInputTransformDevice = null;
    this.selectedVideoInputDevice = null;
    this.selectedVideoInputTransformDevice = null;
    this.selectAudioInputDeviceError = null;
    this.selectVideoInputDeviceError = null;
    this.audioInputDevices = [];
    this.audioOutputDevices = [];
    this.videoInputDevices = [];
    this.activeSpeakers = [];
    this.activeSpeakerListener = null;
    this.audioVideoObservers = {};
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
    } = this.parseJoinParams(options);
    this.meetingSessionConfiguration = meetingSessionConfiguration;
    this.meetingId = this.meetingSessionConfiguration.meetingId;

    const deviceController = new DefaultDeviceController(this.logger, {
      enableWebAudio: enableWebAudio,
    });
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
    await this.listAndSelectDevices(deviceLabels);
    this.publishAudioVideo();
    this.setupActiveSpeakerDetection(activeSpeakerPolicy);
    this.meetingStatus = MeetingStatus.Loading;
    this.publishMeetingStatus();
  }

  private parseJoinParams(options?: MeetingManagerJoinOptions) {
    const deviceLabels: DeviceLabels | DeviceLabelTrigger =
      options?.deviceLabels || DeviceLabels.AudioAndVideo;
    const eventController: EventController | undefined =
      options?.eventController;
    const enableWebAudio: boolean = options?.enableWebAudio || false;
    const activeSpeakerPolicy: ActiveSpeakerPolicy =
      options?.activeSpeakerPolicy || new DefaultActiveSpeakerPolicy();
    return {
      deviceLabels,
      eventController,
      enableWebAudio,
      activeSpeakerPolicy,
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

      try {
        await this.audioVideo.chooseVideoInputDevice(null);
        await this.audioVideo.chooseAudioInputDevice(null);
        await this.audioVideo.chooseAudioOutputDevice(null);
      } catch (error) {
        this.logger.info('Unable to set device to null on leave.');
      }

      if (this.activeSpeakerListener) {
        this.audioVideo.unsubscribeFromActiveSpeakerDetector(
          this.activeSpeakerListener
        );
      }

      this.audioVideo.stop();
    }
    this.initializeMeetingManager();
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

  audioVideoDidStop = (sessionStatus: MeetingSessionStatus): void => {
    const sessionStatusCode = sessionStatus.statusCode();
    switch (sessionStatusCode) {
      case MeetingSessionStatusCode.MeetingEnded:
        this.logger.info(
          `[MeetingManager audioVideoDidStop] Meeting ended for all: ${sessionStatusCode}`
        );
        this.meetingStatus = MeetingStatus.Ended;
        this.publishMeetingStatus();
        this.leave();
        break;
      case MeetingSessionStatusCode.Left:
        this.logger.info(
          `[MeetingManager audioVideoDidStop] Left the meeting: ${sessionStatusCode}`
        );
        this.meetingStatus = MeetingStatus.Left;
        this.publishMeetingStatus();
        this.leave();
        break;
      case MeetingSessionStatusCode.AudioJoinedFromAnotherDevice:
        this.logger.info(
          `[MeetingManager audioVideoDidStop] Meeting joined from another device: ${sessionStatusCode}`
        );
        this.meetingStatus = MeetingStatus.JoinedFromAnotherDevice;
        this.publishMeetingStatus();
        this.leave();
        break;
      default:
        // The following status codes are Failures according to MeetingSessionStatus
        if (sessionStatus.isFailure()) {
          this.logger.info(
            `[MeetingManager audioVideoDidStop] Non-Terminal failure occured: ${sessionStatusCode}`
          );
          this.meetingStatus = MeetingStatus.Failed;
          this.publishMeetingStatus();
        } else if (sessionStatus.isTerminal()) {
          this.logger.info(
            `[MeetingManager audioVideoDidStop] Terminal failure occured: ${sessionStatusCode}`
          );
          this.meetingStatus = MeetingStatus.TerminalFailure;
          this.publishMeetingStatus();
        }
        this.logger.info(
          `[MeetingManager audioVideoDidStop] session stopped with code ${sessionStatusCode}`
        );
        this.leave();
    }

    if (this.audioVideo) {
      this.audioVideo.removeObserver(this.audioVideoObservers);
    }
  };

  setupAudioVideoObservers(): void {
    if (!this.audioVideo) {
      return;
    }

    this.audioVideoObservers = {
      audioVideoDidStart: this.audioVideoDidStart,
      audioVideoDidStop: this.audioVideoDidStop,
    };

    this.audioVideo.addObserver(this.audioVideoObservers);
  }

  async updateDeviceLists(): Promise<void> {
    this.audioInputDevices =
      (await this.audioVideo?.listAudioInputDevices()) || [];
    this.videoInputDevices =
      (await this.audioVideo?.listVideoInputDevices()) || [];
    this.audioOutputDevices =
      (await this.audioVideo?.listAudioOutputDevices()) || [];
  }

  setupDeviceLabelTrigger(
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo
  ): void {
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
        this.devicePermissionStatus = DevicePermissionStatus.IN_PROGRESS;
        this.publishDevicePermissionStatus();
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const hasVideoInput = devices.some(
            (value) => value.kind === 'videoinput'
          );

          const stream = await navigator.mediaDevices.getUserMedia({
            audio: constraints.audio,
            video: constraints.video && hasVideoInput,
          });

          this.devicePermissionStatus = DevicePermissionStatus.GRANTED;
          this.publishDevicePermissionStatus();
          return stream;
        } catch (error) {
          this.logger.error('Failed to get device permissions');
          this.devicePermissionStatus = DevicePermissionStatus.DENIED;
          this.publishDevicePermissionStatus();
          throw new Error(error);
        }
      };
    }

    this.audioVideo?.setDeviceLabelTrigger(callback);
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
      this.selectedAudioInputTransformDevice = this.selectedAudioInputDevice;
      try {
        await this.audioVideo?.chooseAudioInputDevice(
          this.audioInputDevices[0].deviceId
        );
      } catch (error) {
        this.logger.error(`Error in selecting audio input device - ${error}`);
      }
      this.publishSelectedAudioInputDevice();
      this.publishSelectedAudioInputTransformDevice();
    }
    if (
      isAudioDeviceRequested &&
      !this.selectedAudioOutputDevice &&
      this.audioOutputDevices &&
      this.audioOutputDevices.length
    ) {
      this.selectedAudioOutputDevice = this.audioOutputDevices[0].deviceId;
      if (supportsSetSinkId()) {
        try {
          await this.audioVideo?.chooseAudioOutputDevice(
            this.audioOutputDevices[0].deviceId
          );
        } catch (error) {
          this.logger.error(`Failed to choose audio output device. ${error}`);
        }
      }
      this.publishSelectedAudioOutputDevice();
    }
    if (
      isVideoDeviceRequested &&
      !this.selectedVideoInputDevice &&
      this.videoInputDevices &&
      this.videoInputDevices.length
    ) {
      this.selectedVideoInputDevice = this.videoInputDevices[0].deviceId;
      this.selectedVideoInputTransformDevice = this.selectedVideoInputDevice;
      this.publishSelectedVideoInputDevice();
      this.publishSelectedVideoInputTransformDevice();
    }
  }

  selectAudioInputDevice = async (
    device: Device | AudioTransformDevice
  ): Promise<void> => {
    let receivedDevice = device;
    if (typeof device === 'string') {
      receivedDevice = audioInputSelectionToDevice(device);
    }
    if (receivedDevice === null) {
      try {
        await this.audioVideo?.chooseAudioInputDevice(null);
        this.selectAudioInputDeviceError = null;
      } catch (error) {
        this.selectAudioInputDeviceError = error;
        this.logger.error(`Failed to choose audio input device. ${error}`);
      }
      this.selectedAudioInputTransformDevice = null;
      this.selectedAudioInputDevice = null;
    } else {
      try {
        await this.audioVideo?.chooseAudioInputDevice(receivedDevice);
        this.selectAudioInputDeviceError = null;
      } catch (error) {
        this.selectAudioInputDeviceError = error;
        this.logger.error(`Failed to choose audio input device. ${error}`);
      }

      let innerDevice = null;
      if (isAudioTransformDevice(device)) {
        innerDevice = await device.intrinsicDevice();
      } else {
        innerDevice = device;
      }

      const deviceId =
        DefaultDeviceController.getIntrinsicDeviceId(innerDevice);
      if (typeof deviceId === 'string') {
        this.selectedAudioInputDevice = deviceId;
      } else if (Array.isArray(deviceId) && deviceId[0]) {
        this.selectedAudioInputDevice = deviceId[0];
      }
      this.selectedAudioInputTransformDevice = device;
    }
    this.publishSelectedAudioInputDevice();
    this.publishSelectAudioInputDeviceError();
    this.publishSelectedAudioInputTransformDevice();
  };

  selectAudioOutputDevice = async (deviceId: string): Promise<void> => {
    try {
      await this.audioVideo?.chooseAudioOutputDevice(deviceId);
      this.selectedAudioOutputDevice = deviceId;
      this.publishSelectedAudioOutputDevice();
    } catch (error) {
      this.logger.error(`Error setting audio output ${error}`);
    }
  };

  selectVideoInputDevice = async (
    device: Device | VideoTransformDevice
  ): Promise<void> => {
    let receivedDevice = device;
    if (typeof device === 'string') {
      receivedDevice = videoInputSelectionToDevice(device);
    }
    if (receivedDevice === null) {
      try {
        await this.audioVideo?.chooseVideoInputDevice(null);
        this.selectVideoInputDeviceError = null;
      } catch (error) {
        this.selectVideoInputDeviceError = error;
        this.logger.error(`Failed to choose video input device. ${error}`);
      }
      this.selectedVideoInputDevice = null;
      this.selectedVideoInputTransformDevice = null;
    } else {
      try {
        await this.audioVideo?.chooseVideoInputDevice(receivedDevice);
        this.selectVideoInputDeviceError = null;
      } catch (error) {
        this.selectVideoInputDeviceError = error;
        this.logger.error(`Failed to choose video input device.',${error}`);
      }
      let innerDevice = null;
      if (isVideoTransformDevice(device)) {
        innerDevice = await device.intrinsicDevice();
      } else {
        innerDevice = device;
      }

      const deviceId =
        DefaultDeviceController.getIntrinsicDeviceId(innerDevice);
      if (typeof deviceId === 'string') {
        this.selectedVideoInputDevice = deviceId;
      } else if (Array.isArray(deviceId) && deviceId[0]) {
        this.selectedVideoInputDevice = deviceId[0];
      }
      this.selectedVideoInputTransformDevice = device;
    }
    this.publishSelectedVideoInputDevice();
    this.publishSelectVideoInputDeviceError();
    this.publishSelectedVideoInputTransformDevice();
  };

  invokeDeviceProvider = (deviceLabels: DeviceLabels): void => {
    this.setupDeviceLabelTrigger(deviceLabels);
    this.publishDeviceLabelTriggerChange();
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

  subscribeToDevicePermissionStatus = (
    callback: (permission: DevicePermissionStatus) => void
  ): void => {
    this.devicePermissionsObservers.push(callback);
  };

  unsubscribeFromDevicePermissionStatus = (
    callbackToRemove: (permission: DevicePermissionStatus) => void
  ): void => {
    this.devicePermissionsObservers = this.devicePermissionsObservers.filter(
      (callback) => callback !== callbackToRemove
    );
  };

  private publishDevicePermissionStatus = (): void => {
    for (const observer of this.devicePermissionsObservers) {
      observer(this.devicePermissionStatus);
    }
  };

  subscribeToSelectedVideoInputDevice = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedVideoInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedVideoInputDevice = (
    callbackToRemove: (deviceId: string | null) => void
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

  subscribeToSelectedVideoInputTransformDevice = (
    callback: (device: Device | VideoTransformDevice) => void
  ): void => {
    this.selectedVideoInputTransformDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedVideoInputTranformDevice = (
    callbackToRemove: (device: Device | VideoTransformDevice) => void
  ): void => {
    this.selectedVideoInputTransformDeviceObservers =
      this.selectedVideoInputTransformDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedVideoInputTransformDevice = (): void => {
    for (const observer of this.selectedVideoInputTransformDeviceObservers) {
      observer(this.selectedVideoInputTransformDevice);
    }
  };

  subscribeToSelectedAudioInputDevice = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioInputDeviceObservers.push(callback);
  };

  subscribeToSelectedAudioInputTransformDevice = (
    callback: (device: Device | AudioTransformDevice | null) => void
  ): void => {
    this.selectedAudioInputTransformDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioInputDevice = (
    callbackToRemove: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioInputDeviceObservers =
      this.selectedAudioInputDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  unsubscribeFromSelectedAudioInputTransformDevice = (
    callbackToRemove: (device: Device | AudioTransformDevice | null) => void
  ): void => {
    this.selectedAudioInputTransformDeviceObservers =
      this.selectedAudioInputTransformDeviceObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectedAudioInputDevice = (): void => {
    for (const observer of this.selectedAudioInputDeviceObservers) {
      observer(this.selectedAudioInputDevice);
    }
  };

  private publishSelectedAudioInputTransformDevice = (): void => {
    for (const observer of this.selectedAudioInputTransformDeviceObservers) {
      observer(this.selectedAudioInputTransformDevice);
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

  subscribeToSelectAudioInputDeviceError = (
    callback: (errorMessage: Error | null) => void
  ): void => {
    this.selectAudioInputDeviceErrorObservers.push(callback);
  };

  unsubscribeFromSelectAudioInputDeviceError = (
    callbackToRemove: (errorMessage: Error | null) => void
  ): void => {
    this.selectAudioInputDeviceErrorObservers =
      this.selectAudioInputDeviceErrorObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectAudioInputDeviceError = (): void => {
    for (const observer of this.selectAudioInputDeviceErrorObservers) {
      observer(this.selectAudioInputDeviceError);
    }
  };

  subscribeToSelectVideoInputDeviceError = (
    callback: (errorMessage: Error | null) => void
  ): void => {
    this.selectVideoInputDeviceErrorObservers.push(callback);
  };

  unsubscribeFromSelectVideoInputDeviceError = (
    callbackToRemove: (errorMessage: Error | null) => void
  ): void => {
    this.selectVideoInputDeviceErrorObservers =
      this.selectVideoInputDeviceErrorObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishSelectVideoInputDeviceError = (): void => {
    for (const observer of this.selectVideoInputDeviceErrorObservers) {
      observer(this.selectVideoInputDeviceError);
    }
  };

  subscribeToDeviceLabelTriggerChange = (callback: () => void): void => {
    this.deviceLabelTriggerChangeObservers.push(callback);
  };

  unsubscribeFromDeviceLabelTriggerChange = (
    callbackToRemove: () => void
  ): void => {
    this.deviceLabelTriggerChangeObservers =
      this.deviceLabelTriggerChangeObservers.filter(
        (callback) => callback !== callbackToRemove
      );
  };

  private publishDeviceLabelTriggerChange = (): void => {
    for (const callback of this.deviceLabelTriggerChangeObservers) {
      callback();
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
