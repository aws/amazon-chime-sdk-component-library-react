// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioVideoFacade,
  AudioVideoObserver,
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  DeviceChangeObserver,
  Logger,
  LogLevel,
  MeetingSessionConfiguration,
  MeetingSessionPOSTLogger
} from 'amazon-chime-sdk-js';

import { audioInputSelectionToDevice, videoInputSelectionToDevice } from '../../utils/device-utils';

enum DevicePermissionStatus {
  UNSET = 'UNSET',
  IN_PROGRESS = 'IN_PROGRESS',
  GRANTED = 'GRANTED',
  DENIED = 'DENIED'
}

const BASE_URL: string = [
  location.protocol,
  '//',
  location.host,
  location.pathname.replace(/\/*$/, '/')
].join('');

type FullDeviceInfoType = {
  selectedAudioOutputDevice: string | null;
  selectedAudioInputDevice: string | null;
  selectedVideoInputDevice: string | null;
  audioInputDevices: MediaDeviceInfo[] | null;
  audioOutputDevices: MediaDeviceInfo[] | null;
  videoInputDevices: MediaDeviceInfo[] | null;
};

class MeetingManager implements DeviceChangeObserver {
  private static readonly LOGGER_BATCH_SIZE: number = 85;

  private static readonly LOGGER_INTERVAL_MS: number = 1150;

  meetingSession: DefaultMeetingSession | null = null;

  audioVideo: AudioVideoFacade | null = null;

  selfVideo: HTMLVideoElement | null = null;

  attendeeVideo: HTMLVideoElement | null = null;

  configuration: MeetingSessionConfiguration | null = null;

  meetingId: string | null = null;

  attendeeName: string | null = null;

  region: string | null = null;

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
    this.attendeeName = null;
    this.region = null;
    this.selectedAudioOutputDevice = null;
    this.selectedAudioOutputDeviceObservers = [];
    this.selectedAudioInputDevice = null;
    this.selectedAudioInputDeviceObservers = [];
    this.selectedVideoInputDevice = null;
    this.selectedVideoInputDeviceObservers = [];
    this.audioInputDevices = [];
    this.audioOutputDevices = [];
    this.videoInputDevices = [];
  }

  async authenticate(
    meetingId: string,
    name: string,
    region: string
  ): Promise<string> {
    this.meetingId = meetingId;
    this.attendeeName = name;
    this.region = region;
    const joinInfo = (await this.joinMeeting(meetingId, name, region)).JoinInfo;
    this.configuration = new MeetingSessionConfiguration(
      joinInfo.Meeting,
      joinInfo.Attendee
    );

    await this.initializeMeetingSession(this.configuration);
    return joinInfo.Meeting;
  }

  async joinMeeting(
    meetingId: string,
    name: string,
    region: string
  ): Promise<any> {
    const response = await fetch(
      `${BASE_URL}join?title=${encodeURIComponent(
        meetingId
      )}&name=${encodeURIComponent(name)}&region=${encodeURIComponent(region)}`,
      {
        method: 'POST'
      }
    );
    const json = await response.json();
    if (json.error) {
      throw new Error(`Server error: ${json.error}`);
    }
    return json;
  }

  async initializeMeetingSession(
    configuration: MeetingSessionConfiguration
  ): Promise<any> {
    let logger: Logger;
    if (
      location.hostname === 'localhost' ||
      location.hostname === '127.0.0.1' ||
      location.hostname === '0.0.0.0'
    ) {
      logger = new ConsoleLogger('SDK', LogLevel.WARN);
    } else {
      logger = new MeetingSessionPOSTLogger(
        'SDK',
        configuration,
        MeetingManager.LOGGER_BATCH_SIZE,
        MeetingManager.LOGGER_INTERVAL_MS,
        `${BASE_URL}logs`,
        LogLevel.INFO
      );
    }
    const deviceController = new DefaultDeviceController(logger);
    configuration.enableWebAudio = false;
    this.meetingSession = new DefaultMeetingSession(
      configuration,
      logger,
      deviceController
    );
    this.audioVideo = this.meetingSession.audioVideo;
    this.audioVideo.addDeviceChangeObserver(this);
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

  // Start meeting view
  async join(): Promise<void> {
    await this.listAndSelectDevices();

    this.audioVideo?.start();
    await this.meetingSession?.screenShare.open();
    await this.meetingSession?.screenShareView.open();
  }

  async endMeeting(): Promise<any> {
    this.leaveMeeting();
    if (this.meetingId) {
      await fetch(
        `${BASE_URL}end?title=${encodeURIComponent(this.meetingId)}`,
        {
          method: 'POST',
        }
      );
    }
  }

  async leaveMeeting(): Promise<void> {
    this.stopContentShare();
    await this.audioVideo?.stopLocalVideoTile();
    await this.audioVideo?.chooseVideoInputDevice(null);

    this.audioVideo?.unbindAudioElement();
    await this.audioVideo?.chooseAudioInputDevice(null);
    this.audioVideo?.stop();

    this.initializeMeetingManager();
    this.publishAudioVideoUpdate();
  }

  async startContentShare(): Promise<void> {
    await this.audioVideo?.startContentShareFromScreenCapture();
  }

  stopContentShare(): void {
    this.audioVideo?.stopContentShare();
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

  startVideoPreview(element: HTMLVideoElement): void {
    this.audioVideo?.startVideoPreviewForVideoInput(element);
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

  addObserver(observer: AudioVideoObserver): void {
    if (!this.audioVideo) {
      console.log('AudioVideo not initialized. Cannot add observer');
      return;
    }
    this.audioVideo.addObserver(observer);
  }

  removeObserver(observer: AudioVideoObserver): void {
    if (!this.audioVideo) {
      console.log('AudioVideo not initialized. Cannot remove observer');
      return;
    }
    this.audioVideo.removeObserver(observer);
  }

  async getAttendeeInfo(presentAttendeeId: string) {
    if (!this.meetingId) {
      return;
    }

    const url = `${BASE_URL}attendee?title=${encodeURIComponent(
      this.meetingId
    )}&attendee=${encodeURIComponent(presentAttendeeId)}`;

    try {
      const res = await fetch(url, {
        method: 'GET'
      });

      if (!res.ok) {
        throw new Error('Invalid server response');
      }

      const json = await res.json();
      const { AttendeeId: id, Name: name } = json.AttendeeInfo;
      return { id, name };
    } catch (e) {
      console.log(`Error fetching attendee: ${e.message}`);
      return null;
    }
  }

  /**
   * ====================================================================
   * Observer methods
   * ====================================================================
   */
  audioInputsChanged(freshAudioInputDeviceList: MediaDeviceInfo[]): void {
    console.log('DeviceChangeObserver audioInputsChanged');
    freshAudioInputDeviceList.forEach((mediaDeviceInfo: MediaDeviceInfo) => {
      console.log('audioInputsChanged mediaDeviceInfo', mediaDeviceInfo);
    });
  }

  audioOutputsChanged(freshAudioOutputDeviceList: MediaDeviceInfo[]): void {
    console.log('DeviceChangeObserver audioOutputsChanged');
  }

  videoInputsChanged(freshVideoInputDeviceList: MediaDeviceInfo[]): void {
    console.log('DeviceChangeObserver videoInputsChanged');
  }

  /**
   * ====================================================================
   * Subscribe and unsubscribe from SDK events
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
