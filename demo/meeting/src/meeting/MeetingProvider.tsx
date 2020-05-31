import React, { ReactNode, createContext } from 'react';
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
  MeetingSessionPOSTLogger,
  DefaultModality,
} from 'amazon-chime-sdk-js';

import { RosterType } from '../types';
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

  roster: RosterType = {};

  rosterUpdateCallbacks: ((roster: RosterType) => void)[] = [];

  devicePermissions = DevicePermissionStatus.UNSET;

  devicePermissionsObservers: ((permission: string) => void)[] = [];

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
    this.roster = {};
    this.rosterUpdateCallbacks = [];
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
      logger = new ConsoleLogger('SDK', LogLevel.INFO);
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
    // this.setupMuteHandler();
    // this.setupCanUnmuteHandler();
    this.setupSubscribeToAttendeeIdPresenceHandler();
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
  }

  async leaveMeeting(): Promise<void> {
    this.stopContentShare();
    await this.audioVideo?.stopLocalVideoTile();
    await this.audioVideo?.chooseVideoInputDevice(null);
    
    this.audioVideo?.unbindAudioElement();
    await this.audioVideo?.chooseAudioInputDevice(null);
    this.audioVideo?.stop();
    
    this.initializeMeetingManager();
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

  private setupSubscribeToAttendeeIdPresenceHandler(): void {
    const handler = async (
      presentAttendeeId: string,
      present: boolean
    ): Promise<void> => {
      if (!present) {
        delete this.roster[presentAttendeeId];
        this.publishRosterUpdate();
        return;
      }

      const baseAttendeeId = new DefaultModality(presentAttendeeId).base();
      if (baseAttendeeId !== presentAttendeeId) {
        return;
      }

      if (!this.roster[presentAttendeeId]) {
        this.roster[presentAttendeeId] = {
          name: '',
          id: presentAttendeeId,
        };
      }

      if (
        this.meetingId &&
        presentAttendeeId &&
        !this.roster[presentAttendeeId].name
      ) {
        const json = await this.getAttendeeInfo(
          this.meetingId,
          presentAttendeeId
        );
        this.roster[presentAttendeeId].name = json.AttendeeInfo.Name || '';
      }

      this.publishRosterUpdate();
    };
    this.audioVideo?.realtimeSubscribeToAttendeeIdPresence(handler);
  }

  async getAttendeeInfo(meetingId: string, presentAttendeeId: string) {
    const url = `${BASE_URL}attendee?title=${encodeURIComponent(
      meetingId
    )}&attendee=${encodeURIComponent(presentAttendeeId)}`;
    const response = await fetch(url, {
      method: 'GET',
    });
    const json = await response.json();
    if (json.error) {
      throw new Error(`Server error: ${json.error}`);
    }
    return json;
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
  subscribeToRosterUpdate = (callback: (roster: RosterType) => void): void => {
    this.rosterUpdateCallbacks.push(callback);
  };

  unsubscribeFromRosterUpdate = (
    callback: (roster: RosterType) => void
  ): void => {
    const index = this.rosterUpdateCallbacks.indexOf(callback);
    if (index !== -1) {
      this.rosterUpdateCallbacks.splice(index, 1);
    }
  };

  private publishRosterUpdate = (): void => {
    for (let i = 0; i < this.rosterUpdateCallbacks.length; i += 1) {
      const callback = this.rosterUpdateCallbacks[i];
      callback(this.roster);
    }
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

type Props = {
  children: ReactNode;
};

export default function MeetingProvider(props: Props) {
  const meetingManager = new MeetingManager();

  return (
    <MeetingContext.Provider value={meetingManager}>
      {props.children}
    </MeetingContext.Provider>
  );
}
