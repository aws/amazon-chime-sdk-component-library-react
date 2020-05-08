import React, { ReactNode, createContext } from 'react';
import {
  AudioVideoFacade,
  // AudioVideoObserver,
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
  // VideoTile,
} from 'amazon-chime-sdk-js';

const BASE_URL: string = [
  location.protocol,
  '//',
  location.host,
  location.pathname.replace(/\/*$/, '/'),
].join('');

export class MeetingManager {
  meetingSession: DefaultMeetingSession | null = null;
  audioVideo: AudioVideoFacade | null = null;
  selfVideo: HTMLVideoElement | null = null;
  attendeeVideo: HTMLVideoElement | null = null;

  async authenticate(meetingId: string, name: string, region: string): Promise<string> {
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
    const logger = new ConsoleLogger('MEETING-DEMO', LogLevel.DEBUG);
    const deviceController = new DefaultDeviceController(logger);
    configuration.enableWebAudio = false;
    this.meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);
    this.audioVideo = this.meetingSession.audioVideo;
   
    await this.setupAudioVideoDevices();

    // this.setupMuteHandler();
    // this.setupCanUnmuteHandler();
    // this.setupSubscribeToAttendeeIdPresenceHandler();
    // this.setupScreenViewing();
  }

  async setupAudioVideoDevices(): Promise<void> {
    // this.audioVideo.addDeviceChangeObserver(this);
    this.setupDeviceLabelTrigger();

    // this.audioVideo.addObserver(this);

    const audioInput = (await this.audioVideo?.listAudioInputDevices()) || [];
    const defaultAudioInput = audioInput[0]?.deviceId;
    await this.audioVideo?.chooseAudioInputDevice(defaultAudioInput);

    const videoInput = (await this.audioVideo?.listVideoInputDevices()) || [];
    const defaultVideoInput = videoInput[0].deviceId;
    await this.audioVideo?.chooseVideoInputDevice(defaultVideoInput);

    const audioOutput = (await this.audioVideo?.listAudioOutputDevices()) || [];
    const defaultAudioOutput = audioOutput[0]?.deviceId;
    await this.audioVideo ?.chooseAudioOutputDevice(defaultAudioOutput);
  }

  setupDeviceLabelTrigger(): void {
    async (): Promise<MediaStream> => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      return stream;
    }
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
