import React, {useContext, useState, ReactNode, createContext } from 'react';
import {
  AudioVideoFacade,
  AudioVideoObserver,
  ConsoleLogger,
  ContentShareObserver,
  DefaultDeviceController,
  DefaultMeetingSession,
  Device,
  DeviceChangeObserver,
  Logger,
  LogLevel,
  MeetingSessionConfiguration,
  MeetingSessionPOSTLogger
} from 'amazon-chime-sdk-js';

import { DevicePermissionStatus } from '../enums';
import { VIDEO_INPUT, AUDIO_INPUT } from '../constants';

const BASE_URL: string = [
  location.protocol,
  '//',
  location.host,
  location.pathname.replace(/\/*$/, '/'),
].join('');

type FullDeviceInfoType = {
  currentAudioInputDevice: MediaDeviceInfo | null;
  currentAudioOutputDevice: MediaDeviceInfo | null;
  currentVideoInputDevice: MediaDeviceInfo | null;
  audioInputDevices: MediaDeviceInfo[] | null;
  audioOutputDevices: MediaDeviceInfo[] | null;
  videoInputDevices: MediaDeviceInfo[] | null;
};

export class MeetingManager implements DeviceChangeObserver {
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

  currentAudioInputDevice: MediaDeviceInfo | null = null;
  currentAudioOutputDevice: MediaDeviceInfo | null = null;
  currentVideoInputDevice: MediaDeviceInfo | null = null;

  audioInputDevices: MediaDeviceInfo[] | null = null;
  audioOutputDevices: MediaDeviceInfo[] | null = null;
  videoInputDevices: MediaDeviceInfo[] | null = null;

  devicePermissions = DevicePermissionStatus.UNSET;

  devicePermissionsObservers: ((permission: string) => void)[] = [];

  audioVideoCallbacks: ((audioVideo: AudioVideoFacade | null) => void)[] = [];

  devicesUpdatedCallbacks: ((
    fullDeviceInfo: FullDeviceInfoType
  ) => void)[] = [];

  initializeMeetingManager() {
    this.meetingSession = null;
    this.audioVideo = null;
    this.configuration = null;
    this.meetingId = null;
    this.attendeeName = null;
    this.region = null;
    this.currentAudioInputDevice = null;
    this.currentAudioOutputDevice = null;
    this.currentVideoInputDevice = null;
    this.audioInputDevices = [];
    this.audioOutputDevices = [];
    this.videoInputDevices = [];
  }

  async authenticate(meetingId: string, name: string, region: string): Promise<string> {
    this.meetingId = meetingId;
    this.attendeeName = name;
    this.region = region;
    const joinInfo = (await this.joinMeeting(meetingId, name, region)).JoinInfo;
    this.configuration = new MeetingSessionConfiguration(joinInfo.Meeting, joinInfo.Attendee);

    await this.initializeMeetingSession(this.configuration);
    return joinInfo.Meeting;
  }

  async joinMeeting(meetingId: string, name: string, region: string): Promise<any> {
    const response = await fetch(
      `${BASE_URL}join?title=${encodeURIComponent(meetingId)}&name=${encodeURIComponent(name)}&region=${encodeURIComponent(region)}`,
      {
        method: 'POST',
      }
    );
    const json = await response.json();
    if (json.error) {
      throw new Error(`Server error: ${json.error}`);
    }
    return json;
  }

  async initializeMeetingSession(configuration: MeetingSessionConfiguration): Promise<any> {
    let logger: Logger;
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '0.0.0.0') {
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
    this.meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);
    this.audioVideo = this.meetingSession.audioVideo;
    this.audioVideo.addDeviceChangeObserver(this);
    this.setupDeviceLabelTrigger();
    await this.listAndSelectDevices();
    this.publishDevicesUpdated();
    this.publishAudioVideoUpdate();
    // this.setupMuteHandler();
    // this.setupCanUnmuteHandler();
    // this.setupScreenViewing();
    // this.audioVideo.addObserver(this);
  }

  async updateDeviceLists(): Promise<void> {
    this.audioInputDevices = (await this.audioVideo?.listAudioInputDevices()) || [];
    this.videoInputDevices = (await this.audioVideo?.listVideoInputDevices()) || [];
    this.audioOutputDevices = (await this.audioVideo?.listAudioOutputDevices()) || [];
  }

  setupDeviceLabelTrigger(): void {
    const callback = async (): Promise<MediaStream> => {
      this.devicePermissions = DevicePermissionStatus.IN_PROGRESS;
      this.notifyDevicePermissionChange();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
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

  async endMeeting(meetingId: string): Promise<any> {
    await fetch(`${BASE_URL}end?title=${encodeURIComponent(meetingId)}`, {
      method: 'POST',
    });
    this.initializeMeetingManager();
    this.publishAudioVideoUpdate();
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
      !this.currentAudioInputDevice &&
      this.audioInputDevices &&
      this.audioInputDevices.length
    ) {
      this.currentAudioInputDevice = this.audioInputDevices[0];
      await this.audioVideo?.chooseAudioInputDevice(
        this.audioInputDevices[0].deviceId
      );
    }
    if (
      !this.currentAudioOutputDevice &&
      this.audioOutputDevices &&
      this.audioOutputDevices.length
    ) {
      this.currentAudioOutputDevice = this.audioOutputDevices[0];
      await this.audioVideo?.chooseAudioOutputDevice(
        this.audioOutputDevices[0].deviceId
      );
    }
    if (
      !this.currentVideoInputDevice &&
      this.videoInputDevices &&
      this.videoInputDevices.length
    ) {
      this.currentVideoInputDevice = this.videoInputDevices[0];
      await this.audioVideo?.chooseVideoInputDevice(
        this.videoInputDevices[0].deviceId
      );
    }

    this.publishDevicesUpdated();
  }

  private publishDevicesUpdated = () => {
    this.devicesUpdatedCallbacks.forEach(
      (callback: (fullDeviceInfo: FullDeviceInfoType) => void) => {
        callback({
          currentAudioInputDevice: this.currentAudioInputDevice,
          currentAudioOutputDevice: this.currentAudioOutputDevice,
          currentVideoInputDevice: this.currentVideoInputDevice,
          audioInputDevices: this.audioInputDevices,
          audioOutputDevices: this.audioOutputDevices,
          videoInputDevices: this.videoInputDevices,
        });
      }
    );
  };

  startVideoPreview(element: HTMLVideoElement): void {
    this.audioVideo?.startVideoPreviewForVideoInput(element);
  }

  audioInputSelectionToDevice(value: string): Device {
    if (value === AUDIO_INPUT[440]) {
      return DefaultDeviceController.synthesizeAudioDevice(440);
    } else {
      return null;
    }
  }

  videoInputSelectionToDevice(value: string): Device {
    if (value === VIDEO_INPUT.BLUE) {
      return DefaultDeviceController.synthesizeVideoDevice('blue');
    } else if (value === VIDEO_INPUT.SMPTE) {
      return DefaultDeviceController.synthesizeVideoDevice('smpte');
    } else {
      return null;
    }
  }

  async setAudioOutput(value: string): Promise<void> {
    await this.audioVideo?.chooseAudioOutputDevice(value);
    // const audioMix = document.getElementById('meeting-audio') as HTMLAudioElement;
    // await this.audioVideo?.bindAudioElement(audioMix);
  }

  async setAudioInput(value: string): Promise<void> {
    await this.audioVideo?.chooseAudioInputDevice(
      this.audioInputSelectionToDevice(value)
    );
  }

  async setVideoInput(value: string): Promise<void> {
    await this.audioVideo?.chooseVideoInputDevice(
      this.videoInputSelectionToDevice(value)
    );
  }

  setVideoInputQuality(qualityValue: string): void {
    switch (qualityValue) {
      case '360p':
        this.audioVideo?.chooseVideoInputQuality(640, 360, 15, 600);
        break;
      case '540p':
        this.audioVideo?.chooseVideoInputQuality(960, 540, 15, 1400);
        break;
      case '720p':
        this.audioVideo?.chooseVideoInputQuality(1280, 720, 15, 1400);
        break;
    }
  }

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

  addContentShareObserver(observer: ContentShareObserver): void {
    if (!this.audioVideo) {
      console.log('AudioVideo not initialized. Cannot add observer');
      return;
    }
    this.audioVideo.addContentShareObserver(observer);
  }

  removeContentShareObserver(observer: ContentShareObserver): void {
    if (!this.audioVideo) {
      console.log('AudioVideo not initialized. Cannot remove observer');
      return;
    }
    this.audioVideo.removeContentShareObserver(observer);
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
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error('Invalid server response');
      }

      const json = await res.json();
      const { AttendeeId: id, Name: name } = json.AttendeeInfo;
      return { id, name };
    } catch (e) {
      console.log(`Error fetching attendee: ${e.message}`);
    }
  }

  /**
   * ====================================================================
   * Observer methods
   * ====================================================================
   */
  audioInputsChanged(freshAudioInputDeviceList: MediaDeviceInfo[]): void {
    console.log("DeviceChangeObserver audioInputsChanged");
    freshAudioInputDeviceList.forEach((mediaDeviceInfo: MediaDeviceInfo) => {
      console.log("audioInputsChanged mediaDeviceInfo", mediaDeviceInfo);
    });
  }

  audioOutputsChanged(freshAudioOutputDeviceList: MediaDeviceInfo[]): void {
    console.log("DeviceChangeObserver audioOutputsChanged");
  }

  videoInputsChanged(freshVideoInputDeviceList: MediaDeviceInfo[]): void {
    console.log("DeviceChangeObserver videoInputsChanged");
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
}

export const MeetingContext = createContext<MeetingManager | null>(null);

export const useMeetingManager = (): MeetingManager => {
  const meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error('useMeetingManager must be used within MeetingProvider');
  }

  return meetingManager;
};

type Props = {
  children: ReactNode;
};

export default function MeetingProvider(props: Props) {
  const [meetingManager] = useState(() => new MeetingManager());

  return (
    <MeetingContext.Provider value={meetingManager}>
      {props.children}
    </MeetingContext.Provider>
  );
}
