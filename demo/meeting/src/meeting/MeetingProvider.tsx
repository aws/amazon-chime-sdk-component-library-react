import React, { ReactNode, createContext } from 'react';
import {
  AudioVideoFacade,
  // AudioVideoObserver,
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  Device,
  DeviceChangeObserver,
  Logger,
  LogLevel,
  MeetingSessionConfiguration,
  MeetingSessionPOSTLogger,
  // VideoTile,
} from 'amazon-chime-sdk-js';

const BASE_URL: string = [
  location.protocol,
  '//',
  location.host,
  location.pathname.replace(/\/*$/, '/'),
].join('');

export class MeetingManager implements DeviceChangeObserver {
  private static readonly LOGGER_BATCH_SIZE: number = 85;
  private static readonly LOGGER_INTERVAL_MS: number = 1150;

  meetingSession: DefaultMeetingSession | null = null;
  audioVideo: AudioVideoFacade | null = null;
  selfVideo: HTMLVideoElement | null = null;
  attendeeVideo: HTMLVideoElement | null = null;
  meetingId: string | null = null;
  attendeeName: string | null = null;
  videoInputDeviceIds: string[] = [];
  audioInputDevices: MediaDeviceInfo[] | null = null;
  audioOutputDevices: MediaDeviceInfo[] | null = null;
  videoInputDevices: MediaDeviceInfo[] | null = null;

  async authenticate(meetingId: string, name: string, region: string): Promise<string> {
    this.meetingId = meetingId;
    this.attendeeName = name;
    const joinInfo = (await this.joinMeeting(meetingId, name, region)).JoinInfo;

    await this.initializeMeetingSession(
      new MeetingSessionConfiguration(joinInfo.Meeting, joinInfo.Attendee)
    );
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
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
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
    await this.populateAllDeviceLists();
    // this.setupMuteHandler();
    // this.setupCanUnmuteHandler();
    // this.setupSubscribeToAttendeeIdPresenceHandler();
    // this.setupScreenViewing();
    // this.audioVideo.addObserver(this);
  }

  async populateAllDeviceLists(): Promise<void> {
    this.audioInputDevices = (await this.audioVideo ?.listAudioInputDevices())!;
    this.videoInputDevices = (await this.audioVideo ?.listVideoInputDevices())!;
    this.audioOutputDevices = (await this.audioVideo ?.listAudioOutputDevices())!;
  }

  setupDeviceLabelTrigger(): void {
    async (): Promise<MediaStream> => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      return stream;
    }
  }

  // Start meeting view
  async join(): Promise<void> {
    this.audioVideo?.start();
    await this.meetingSession?.screenShare.open();
    await this.meetingSession?.screenShareView.open();
  }

  async endMeeting(meetingId: string): Promise<any> {
    await fetch(`${BASE_URL}end?title=${encodeURIComponent(meetingId)}`, {
      method: 'POST',
    });
  }

  private audioInputSelectionToDevice(value: string): Device {
    if (value === '440 Hz') {
      return DefaultDeviceController.synthesizeAudioDevice(440);
    } else if (value === 'None') {
      return null;
    }
    return value;
  }

  private videoInputSelectionToDevice(value: string): Device {
    if (value === 'Blue') {
      return DefaultDeviceController.synthesizeVideoDevice('blue');
    } else if (value === 'SMPTE Color Bars') {
      return DefaultDeviceController.synthesizeVideoDevice('smpte');
    } else if (value === 'None') {
      return null;
    }
    return value;
  }

  async setAudioOutput(value: string): Promise<void> {
    await this.audioVideo ?.chooseAudioOutputDevice(value);
    // const audioMix = document.getElementById('meeting-audio') as HTMLAudioElement;
    // await this.audioVideo?.bindAudioElement(audioMix);
  }

  async setAudioInput(value: string): Promise<void> {
    await this.audioVideo?.chooseAudioInputDevice(
      this.audioInputSelectionToDevice(value)
    );
    // this.startAudioPreview();
  }

  async setVideoInput(value: string): Promise<void> {
    await this.audioVideo ?.chooseVideoInputDevice(
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
}

export const MeetingContext = createContext<MeetingManager | null>(null);

type Props = {
  children: ReactNode;
};

export default function MeetingProvider(props: Props) {
  const meetingManager = new MeetingManager();

  return <MeetingContext.Provider value={meetingManager}>
    {props.children}
  </MeetingContext.Provider>
}
