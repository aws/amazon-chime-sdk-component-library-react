// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioVideoFacade,
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
  DefaultActiveSpeakerPolicy,
  MeetingSessionStatus,
  MeetingSessionStatusCode,
  AudioVideoObserver,
  MultiLogger,
  MeetingSessionPOSTLogger,
  EventReporter
} from 'amazon-chime-sdk-js';

import {
  audioInputSelectionToDevice,
  supportsSetSinkId,
  videoInputSelectionToDevice
} from '../../utils/device-utils';
import { DeviceLabels, DeviceLabelTrigger, MeetingStatus } from '../../types';
import {
  DevicePermissionStatus,
  MeetingJoinData,
  AttendeeResponse,
  FullDeviceInfoType,
  PostLogConfig,
  ManagerConfig
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

  configuration: MeetingSessionConfiguration | null = null;

  meetingId: string | null = null;

  meetingRegion: string | null = null;

  getAttendee?: (
    chimeAttendeeId: string,
    externalUserId?: string
  ) => Promise<AttendeeResponse>;

  selectedAudioOutputDevice: string | null = null;

  selectedAudioOutputDeviceObservers: ((deviceId: string | null) => void)[] = [];

  selectedAudioInputDevice: string | null = null;

  selectedAudioInputDeviceObservers: ((deviceId: string | null) => void)[] = [];

  selectAudioInputDeviceError: Error | null = null;

  selectAudioInputDeviceErrorObservers: ((selectAudioInputDeviceError: Error | null) => void)[] = [];

  selectedVideoInputDevice: string | null = null;

  selectedVideoInputDeviceObservers: ((deviceId: string | null) => void)[] = [];

  selectVideoInputDeviceError: Error | null = null;

  selectVideoInputDeviceErrorObservers: ((selectVideoInputDeviceError: Error | null) => void)[] = [];

  deviceLabelTriggerChangeObservers: (() => void)[] = [];

  audioInputDevices: MediaDeviceInfo[] | null = null;

  audioOutputDevices: MediaDeviceInfo[] | null = null;

  videoInputDevices: MediaDeviceInfo[] | null = null;

  devicePermissionStatus = DevicePermissionStatus.UNSET;

  devicePermissionsObservers: ((permission: DevicePermissionStatus) => void)[] = [];

  activeSpeakerListener: ((activeSpeakers: string[]) => void) | null = null;

  activeSpeakerCallbacks: ((activeSpeakers: string[]) => void)[] = [];

  activeSpeakers: string[] = [];

  audioVideoCallbacks: ((audioVideo: AudioVideoFacade | null) => void)[] = [];

  devicesUpdatedCallbacks: ((
    fullDeviceInfo: FullDeviceInfoType
  ) => void)[] = [];

  logLevel: LogLevel = LogLevel.WARN;

  postLoggerConfig: PostLogConfig | null = null;

  eventReporter: EventReporter;

  simulcastEnabled: boolean = false;

  constructor(config: ManagerConfig) {
    this.logLevel = config.logLevel;

    if (config.simulcastEnabled) {
      this.simulcastEnabled = config.simulcastEnabled;
    }

    if (config.postLogConfig) {
      this.postLoggerConfig = config.postLogConfig;
    }
  }

  initializeMeetingManager(): void {
    this.meetingSession = null;
    this.audioVideo = null;
    this.configuration = null;
    this.meetingId = null;
    this.meetingRegion = null;
    this.selectedAudioOutputDevice = null;
    this.selectedAudioInputDevice = null;
    this.selectedVideoInputDevice = null;
    this.selectAudioInputDeviceError = null;
    this.selectVideoInputDeviceError = null;
    this.audioInputDevices = [];
    this.audioOutputDevices = [];
    this.videoInputDevices = [];
    this.activeSpeakers = [];
    this.activeSpeakerListener = null;
    this.meetingStatus = MeetingStatus.Loading;
    this.publishMeetingStatus();
    this.audioVideoObservers = {};
  }

  async join({ meetingInfo, attendeeInfo, deviceLabels = DeviceLabels.AudioAndVideo, eventReporter}: MeetingJoinData) {
    this.configuration = new MeetingSessionConfiguration(
      meetingInfo,
      attendeeInfo
    );

    if (this.simulcastEnabled) {
      this.configuration.enableUnifiedPlanForChromiumBasedBrowsers = true;
      this.configuration.enableSimulcastForUnifiedPlanChromiumBasedBrowsers = true;
    };

    this.meetingRegion = meetingInfo.MediaRegion;
    this.meetingId = this.configuration.meetingId;
    if (eventReporter) {
      this.eventReporter = eventReporter;
    }
    await this.initializeMeetingSession(this.configuration, deviceLabels);
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
        console.log('Unable to set device to null on leave.');
      }

      if (this.activeSpeakerListener) {
        this.audioVideo.unsubscribeFromActiveSpeakerDetector(
          this.activeSpeakerListener
        );
      }

      this.audioVideo.stop();
      this.audioVideo.removeObserver(this.audioVideoObservers);
    }
    this.initializeMeetingManager();
    this.publishAudioVideo();
    this.publishActiveSpeaker();
  }

  async initializeMeetingSession(
    configuration: MeetingSessionConfiguration,
    deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo,
  ): Promise<any> {
    const logger = this.createLogger(configuration);
    const deviceController = new DefaultDeviceController(logger);
    this.meetingSession = new DefaultMeetingSession(
      configuration,
      logger,
      deviceController,
      this.eventReporter
    );

    this.audioVideo = this.meetingSession.audioVideo;
    this.setupAudioVideoObservers();
    this.setupDeviceLabelTrigger(deviceLabels);
    await this.listAndSelectDevices();
    this.publishAudioVideo();
    this.setupActiveSpeakerDetection();
    this.meetingStatus = MeetingStatus.Loading;
    this.publishMeetingStatus();
  }

  createLogger(configuration: MeetingSessionConfiguration) {
    const consoleLogger = new ConsoleLogger('SDK', this.logLevel);
    let logger: ConsoleLogger | MultiLogger = consoleLogger;

    if (this.postLoggerConfig) {
      logger = new MultiLogger(
        consoleLogger,
        new MeetingSessionPOSTLogger(
          this.postLoggerConfig.name,
          configuration,
          this.postLoggerConfig.batchSize,
          this.postLoggerConfig.intervalMs,
          this.postLoggerConfig.url,
          this.postLoggerConfig.logLevel
        )
      );
    }

    return logger;
  }

  audioVideoDidStart = () => {
    console.log('[MeetingManager audioVideoDidStart] Meeting started successfully');
    this.meetingStatus = MeetingStatus.Succeeded;
    this.publishMeetingStatus();
  };

  audioVideoDidStop = (sessionStatus: MeetingSessionStatus) => {
    const sessionStatusCode = sessionStatus.statusCode();
    if (sessionStatusCode === MeetingSessionStatusCode.AudioCallEnded) {
      console.log('[MeetingManager audioVideoDidStop] Meeting ended for all');
      this.meetingStatus = MeetingStatus.Ended;
      this.publishMeetingStatus();
    } else if (sessionStatusCode === MeetingSessionStatusCode.AudioJoinedFromAnotherDevice) {
      console.log('[MeetingManager audioVideoDidStop] Meeting joined from another device');
      this.meetingStatus = MeetingStatus.JoinedFromAnotherDevice;
      this.publishMeetingStatus();
    } else {
      console.log(`[MeetingManager audioVideoDidStop] session stopped with code ${sessionStatusCode}`);
    }
    this.leave();
  };

  setupAudioVideoObservers() {
    if (!this.audioVideo) {
      return;
    }

    this.audioVideoObservers = {
      audioVideoDidStart: this.audioVideoDidStart,
      audioVideoDidStop: this.audioVideoDidStop
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

  setupDeviceLabelTrigger(deviceLabels: DeviceLabels | DeviceLabelTrigger = DeviceLabels.AudioAndVideo): void {
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
          const hasVideoInput = devices.some(value => value.kind === 'videoinput');

          const stream = await navigator.mediaDevices.getUserMedia({
            audio: constraints.audio,
            video: constraints.video && hasVideoInput,
          });

          this.devicePermissionStatus = DevicePermissionStatus.GRANTED;
          this.publishDevicePermissionStatus();
          return stream;
        } catch (error) {
          console.error('Failed to get device permissions');
          this.devicePermissionStatus = DevicePermissionStatus.DENIED;
          this.publishDevicePermissionStatus();
          throw new Error(error);
        }
      };
    }

    this.audioVideo?.setDeviceLabelTrigger(callback);
  }

  setupActiveSpeakerDetection(): void {
    this.publishActiveSpeaker();

    this.activeSpeakerListener = (activeSpeakers: string[]) => {
      this.activeSpeakers = activeSpeakers;
      this.activeSpeakerCallbacks.forEach(cb => cb(activeSpeakers));
    };

    this.audioVideo?.subscribeToActiveSpeakerDetector(
      new DefaultActiveSpeakerPolicy(),
      this.activeSpeakerListener
    );
  }

  async listAndSelectDevices(): Promise<void> {
    await this.updateDeviceLists();

    const hasAudioInput = this.audioInputDevices?.some(value => value.label) || false;
    const hasAudioOutput = this.audioOutputDevices?.some(value => value.label) || false;
    const hasVideoInput = this.videoInputDevices?.some(value => value.label) || false;

    if (
      hasAudioInput &&
      !this.selectedAudioInputDevice &&
      this.audioInputDevices &&
      this.audioInputDevices.length
    ) {
      this.selectedAudioInputDevice = this.audioInputDevices[0].deviceId;
      try {
        await this.audioVideo?.chooseAudioInputDevice(
          this.audioInputDevices[0].deviceId
        );
      } catch (error) {
        console.error(`Error in selecting audio input device - ${error}`);
      }
      this.publishSelectedAudioInputDevice();
    }
    if (
      hasAudioOutput &&
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
          console.error('Failed to choose audio output device.', error);
        }
      }
      this.publishSelectedAudioOutputDevice();
    }
    if (
      hasVideoInput &&
      !this.selectedVideoInputDevice &&
      this.videoInputDevices &&
      this.videoInputDevices.length
    ) {
      this.selectedVideoInputDevice = this.videoInputDevices[0].deviceId;
      this.publishSelectedVideoInputDevice();
    }
  }

  selectAudioInputDevice = async (deviceId: string): Promise<void> => {
    const receivedDevice = audioInputSelectionToDevice(deviceId);
    if (receivedDevice === null) {
      try {
        await this.audioVideo?.chooseAudioInputDevice(null);
        this.selectAudioInputDeviceError = null;
      } catch (error) {
        this.selectAudioInputDeviceError = error;
        console.error('Failed to choose audio input device.', error);
      }
      this.selectedAudioInputDevice = null;
    } else {
      try {
        await this.audioVideo?.chooseAudioInputDevice(receivedDevice);
        this.selectAudioInputDeviceError = null;
      } catch (error) {
        this.selectAudioInputDeviceError = error;
        console.error('Failed to choose audio input device.', error);
      }
      this.selectedAudioInputDevice = deviceId;
    }
    this.publishSelectedAudioInputDevice();
    this.publishSelectAudioInputDeviceError();
  };

  selectAudioOutputDevice = async (deviceId: string): Promise<void> => {
    try {
      await this.audioVideo?.chooseAudioOutputDevice(deviceId);
      this.selectedAudioOutputDevice = deviceId;
      this.publishSelectedAudioOutputDevice();
    } catch (error) {
      console.error(`Error setting audio output - ${error}`);
    }
  };

  selectVideoInputDevice = async (deviceId: string): Promise<void> => {
    const receivedDevice = videoInputSelectionToDevice(deviceId);
    if (receivedDevice === null) {
      try {
        await this.audioVideo?.chooseVideoInputDevice(null);
        this.selectVideoInputDeviceError = null;
      } catch (error) {
        this.selectVideoInputDeviceError = error;
        console.error('Failed to choose video input device.', error);
      }
      this.selectedVideoInputDevice = null;
    } else {
      try {
        await this.audioVideo?.chooseVideoInputDevice(receivedDevice);
        this.selectVideoInputDeviceError = null;
      } catch (error) {
        this.selectVideoInputDeviceError = error;
        console.error('Failed to choose video input device.', error);
      }
      this.selectedVideoInputDevice = deviceId;
    }
    this.publishSelectedVideoInputDevice();
    this.publishSelectVideoInputDeviceError();
  };

  invokeDeviceProvider = (deviceLabels: DeviceLabels) => {
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
      callback => callback !== callbackToRemove
    );
  };

  publishAudioVideo = () => {
    this.audioVideoCallbacks.forEach(callback => {
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
      callback => callback !== callbackToRemove
    );
  };

  publishActiveSpeaker = () => {
    this.activeSpeakerCallbacks.forEach(callback => {
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
      callback => callback !== callbackToRemove
    );
  };

  private publishDevicePermissionStatus = (): void => {
    for (let i = 0; i < this.devicePermissionsObservers.length; i += 1) {
      const callback = this.devicePermissionsObservers[i];
      callback(this.devicePermissionStatus);
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
    this.selectedVideoInputDeviceObservers = this.selectedVideoInputDeviceObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectedVideoInputDevice = (): void => {
    for (let i = 0; i < this.selectedVideoInputDeviceObservers.length; i += 1) {
      const callback = this.selectedVideoInputDeviceObservers[i];
      callback(this.selectedVideoInputDevice);
    }
  };

  subscribeToSelectedAudioInputDevice = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioInputDevice = (
    callbackToRemove: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioInputDeviceObservers = this.selectedAudioInputDeviceObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectedAudioInputDevice = (): void => {
    for (let i = 0; i < this.selectedAudioInputDeviceObservers.length; i += 1) {
      const callback = this.selectedAudioInputDeviceObservers[i];
      callback(this.selectedAudioInputDevice);
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
    this.selectedAudioOutputDeviceObservers = this.selectedAudioOutputDeviceObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectedAudioOutputDevice = (): void => {
    for (
      let i = 0;
      i < this.selectedAudioOutputDeviceObservers.length;
      i += 1
    ) {
      const callback = this.selectedAudioOutputDeviceObservers[i];
      callback(this.selectedAudioOutputDevice);
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
      callback => callback !== callbackToRemove
    );
  };

  private publishMeetingStatus = () => {
    this.meetingStatusObservers.forEach(callback => {
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
    this.selectAudioInputDeviceErrorObservers = this.selectAudioInputDeviceErrorObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectAudioInputDeviceError = (): void => {
    for (let i = 0; i < this.selectAudioInputDeviceErrorObservers.length; i += 1) {
      const callback = this.selectAudioInputDeviceErrorObservers[i];
      callback(this.selectAudioInputDeviceError);
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
    this.selectVideoInputDeviceErrorObservers = this.selectVideoInputDeviceErrorObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectVideoInputDeviceError = (): void => {
    for (let i = 0; i < this.selectVideoInputDeviceErrorObservers.length; i += 1) {
      const callback = this.selectVideoInputDeviceErrorObservers[i];
      callback(this.selectVideoInputDeviceError);
    }
  };

  subscribeToDeviceLabelTriggerChange = (
    callback: () => void
  ): void => {
    this.deviceLabelTriggerChangeObservers.push(callback);
  };

  unsubscribeFromDeviceLabelTriggerChange = (
    callbackToRemove: () => void
  ): void => {
    this.deviceLabelTriggerChangeObservers = this.deviceLabelTriggerChangeObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishDeviceLabelTriggerChange = (): void => {
    for (const callback of this.deviceLabelTriggerChangeObservers) {
      callback();
    }
  };

}

export default MeetingManager;
