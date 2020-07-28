// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioVideoFacade,
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration
} from 'amazon-chime-sdk-js';

import {
  audioInputSelectionToDevice,
  videoInputSelectionToDevice
} from '../../utils/device-utils';

enum DevicePermissionStatus {
  UNSET = 'UNSET',
  IN_PROGRESS = 'IN_PROGRESS',
  GRANTED = 'GRANTED',
  DENIED = 'DENIED'
}

interface MeetingJoinData {
  meetingInfo: any;
  attendeeInfo: any;
}

interface AttendeeResponse {
  name?: string;
}

type FullDeviceInfoType = {
  selectedAudioOutputDevice: string | null;
  selectedAudioInputDevice: string | null;
  selectedVideoInputDevice: string | null;
  audioInputDevices: MediaDeviceInfo[] | null;
  audioOutputDevices: MediaDeviceInfo[] | null;
  videoInputDevices: MediaDeviceInfo[] | null;
};

export class MeetingManager {
  meetingSession: DefaultMeetingSession | null = null;

  audioVideo: AudioVideoFacade | null = null;

  configuration: MeetingSessionConfiguration | null = null;

  meetingId: string | null = null;

  getAttendee?: (
    chimeAttendeeId: string,
    externalUserId?: string
  ) => Promise<AttendeeResponse>;

  selectedAudioOutputDevice: string | null = null;

  selectedAudioOutputDeviceObservers: ((
    deviceId: string | null
  ) => void)[] = [];

  selectedAudioInputDevice: string | null = null;

  selectedAudioInputDeviceObservers: ((deviceId: string | null) => void)[] = [];

  selectedVideoInputDevice: string | null = null;

  selectedVideoInputDeviceObservers: ((deviceId: string | null) => void)[] = [];

  audioInputDevices: MediaDeviceInfo[] | null = null;

  audioOutputDevices: MediaDeviceInfo[] | null = null;

  videoInputDevices: MediaDeviceInfo[] | null = null;

  devicePermissions = DevicePermissionStatus.UNSET;

  devicePermissionsObservers: ((permission: string) => void)[] = [];

  audioVideoCallbacks: ((audioVideo: AudioVideoFacade | null) => void)[] = [];

  devicesUpdatedCallbacks: ((
    fullDeviceInfo: FullDeviceInfoType
  ) => void)[] = [];

  initializeMeetingManager(): void {
    this.meetingSession = null;
    this.audioVideo = null;
    this.configuration = null;
    this.meetingId = null;
    this.selectedAudioOutputDevice = null;
    this.selectedAudioInputDevice = null;
    this.selectedVideoInputDevice = null;
    this.audioInputDevices = [];
    this.audioOutputDevices = [];
    this.videoInputDevices = [];
  }

  async join({ meetingInfo, attendeeInfo }: MeetingJoinData) {
    this.configuration = new MeetingSessionConfiguration(
      meetingInfo,
      attendeeInfo
    );
    this.meetingId = this.configuration.meetingId;
    await this.initializeMeetingSession(this.configuration);
  }

  async start(): Promise<void> {
    this.audioVideo?.start();
    await this.meetingSession?.screenShare.open();
    await this.meetingSession?.screenShareView.open();
  }

  async leave(): Promise<void> {
    if (this.audioVideo) {
      this.audioVideo.stopContentShare();

      await this.audioVideo.stopLocalVideoTile();
      await this.audioVideo.chooseVideoInputDevice(null);

      this.audioVideo.unbindAudioElement();
      await this.audioVideo.chooseAudioInputDevice(null);
      this.audioVideo.stop();
    }

    this.initializeMeetingManager();
    this.publishAudioVideoUpdate();
  }

  async initializeMeetingSession(
    configuration: MeetingSessionConfiguration
  ): Promise<any> {
    const logger = new ConsoleLogger('SDK', LogLevel.WARN);
    const deviceController = new DefaultDeviceController(logger);
    configuration.enableWebAudio = false;
    this.meetingSession = new DefaultMeetingSession(
      configuration,
      logger,
      deviceController
    );

    this.audioVideo = this.meetingSession.audioVideo;
    this.setupDeviceLabelTrigger();
    await this.listAndSelectDevices();
    this.publishAudioVideoUpdate();
  }

  async updateDeviceLists(): Promise<void> {
    this.audioInputDevices =
      (await this.audioVideo?.listAudioInputDevices()) || [];
    this.videoInputDevices =
      (await this.audioVideo?.listVideoInputDevices()) || [];
    this.audioOutputDevices =
      (await this.audioVideo?.listAudioOutputDevices()) || [];
  }

  setupDeviceLabelTrigger(): void {
    const callback = async (): Promise<MediaStream> => {
      this.devicePermissions = DevicePermissionStatus.IN_PROGRESS;
      this.notifyDevicePermissionChange();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });
      return stream;
    };
    this.audioVideo?.setDeviceLabelTrigger(callback);
    this.devicePermissions = DevicePermissionStatus.GRANTED;
    this.notifyDevicePermissionChange();
  }

  async listAndSelectDevices(): Promise<void> {
    await this.updateDeviceLists();
    if (
      !this.selectedAudioInputDevice &&
      this.audioInputDevices &&
      this.audioInputDevices.length
    ) {
      this.selectedAudioInputDevice = this.audioInputDevices[0].deviceId;
      await this.audioVideo?.chooseAudioInputDevice(
        this.audioInputDevices[0].deviceId
      );
      this.publishSelectedAudioInputDeviceChange();
    }
    if (
      !this.selectedAudioOutputDevice &&
      this.audioOutputDevices &&
      this.audioOutputDevices.length
    ) {
      this.selectedAudioOutputDevice = this.audioOutputDevices[0].deviceId;
      await this.audioVideo?.chooseAudioOutputDevice(
        this.audioOutputDevices[0].deviceId
      );
      this.publishSelectedAudioOutputDeviceChange();
    }
    if (
      !this.selectedVideoInputDevice &&
      this.videoInputDevices &&
      this.videoInputDevices.length
    ) {
      this.selectedVideoInputDevice = this.videoInputDevices[0].deviceId;
      await this.audioVideo?.chooseVideoInputDevice(
        this.videoInputDevices[0].deviceId
      );
      this.publishSelectedVideoInputDeviceChange();
    }
  }

  selectAudioInputDevice = async (deviceId: string): Promise<void> => {
    try {
      const receivedDevice = audioInputSelectionToDevice(deviceId);
      if (receivedDevice === null) {
        await this.audioVideo?.chooseAudioInputDevice(null);
        this.selectedAudioInputDevice = null;
      } else {
        await this.audioVideo?.chooseAudioInputDevice(receivedDevice);
        this.selectedAudioInputDevice = deviceId;
      }
      this.publishSelectedAudioInputDeviceChange();
    } catch (error) {
      console.error(`Error setting audio input - ${error}`);
    }
  };

  selectAudioOutputDevice = async (deviceId: string): Promise<void> => {
    try {
      await this.audioVideo?.chooseAudioOutputDevice(deviceId);
      this.selectedAudioOutputDevice = deviceId;
      this.publishSelectedAudioOutputDeviceChange();
    } catch (error) {
      console.error(`Error setting audio output - ${error}`);
    }
  };

  selectVideoInputDevice = async (deviceId: string): Promise<void> => {
    try {
      const receivedDevice = videoInputSelectionToDevice(deviceId);
      if (receivedDevice === null) {
        await this.audioVideo?.chooseVideoInputDevice(null);
        this.selectedVideoInputDevice = null;
      } else {
        await this.audioVideo?.chooseVideoInputDevice(receivedDevice);
        this.selectedVideoInputDevice = deviceId;
      }
      this.publishSelectedVideoInputDeviceChange();
    } catch (error) {
      console.error(`Error setting video input - ${error}`);
    }
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

  unsubscribeToAudioVideo = (
    callbackToRemove: (av: AudioVideoFacade | null) => void
  ): void => {
    this.audioVideoCallbacks = this.audioVideoCallbacks.filter(
      callback => callback !== callbackToRemove
    );
  };

  publishAudioVideoUpdate = () => {
    this.audioVideoCallbacks.forEach(callback => {
      callback(this.audioVideo);
    });
  };

  subscribeToDevicePermissionUpdate = (
    callback: (permission: string) => void
  ): void => {
    this.devicePermissionsObservers.push(callback);
  };

  unSubscribeFromDevicePermissionUpdate = (
    callbackToRemove: (permission: string) => void
  ): void => {
    this.devicePermissionsObservers = this.devicePermissionsObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private notifyDevicePermissionChange = (): void => {
    for (let i = 0; i < this.devicePermissionsObservers.length; i += 1) {
      const callback = this.devicePermissionsObservers[i];
      callback(this.devicePermissions);
    }
  };

  subscribeToSelectedVideoInputDeviceChange = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedVideoInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedVideoInputDeviceChange = (
    callbackToRemove: (deviceId: string | null) => void
  ): void => {
    this.selectedVideoInputDeviceObservers = this.selectedVideoInputDeviceObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectedVideoInputDeviceChange = (): void => {
    for (let i = 0; i < this.selectedVideoInputDeviceObservers.length; i += 1) {
      const callback = this.selectedVideoInputDeviceObservers[i];
      callback(this.selectedVideoInputDevice);
    }
  };

  subscribeToSelectedAudioInputDeviceChange = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioInputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioInputDeviceChange = (
    callbackToRemove: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioInputDeviceObservers = this.selectedAudioInputDeviceObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectedAudioInputDeviceChange = (): void => {
    for (let i = 0; i < this.selectedAudioInputDeviceObservers.length; i += 1) {
      const callback = this.selectedAudioInputDeviceObservers[i];
      callback(this.selectedAudioInputDevice);
    }
  };

  subscribeToSelectedAudioOutputDeviceChange = (
    callback: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioOutputDeviceObservers.push(callback);
  };

  unsubscribeFromSelectedAudioOutputDeviceChange = (
    callbackToRemove: (deviceId: string | null) => void
  ): void => {
    this.selectedAudioOutputDeviceObservers = this.selectedAudioOutputDeviceObservers.filter(
      callback => callback !== callbackToRemove
    );
  };

  private publishSelectedAudioOutputDeviceChange = (): void => {
    for (
      let i = 0;
      i < this.selectedAudioOutputDeviceObservers.length;
      i += 1
    ) {
      const callback = this.selectedAudioOutputDeviceObservers[i];
      callback(this.selectedAudioOutputDevice);
    }
  };
}

export default MeetingManager;
