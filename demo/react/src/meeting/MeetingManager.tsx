import {
  AudioVideoFacade,
  AudioVideoObserver,
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
  VideoTile,
} from 'amazon-chime-sdk-js';

class MeetingManager {
  meetingSession: DefaultMeetingSession | null = null;
  audioVideo: AudioVideoFacade | null = null;
  selfVideo: HTMLVideoElement | null = null;
  attendeeVideo: HTMLVideoElement | null = null;

  async initializeMeetingSession(meeting: any, attendee: any): Promise<void> {
    const logger = new ConsoleLogger('ChimeMeetingLogs', LogLevel.INFO);
    const deviceController = new DefaultDeviceController(logger);
    const configuration = new MeetingSessionConfiguration(meeting, attendee);
    this.meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);
    this.audioVideo = this.meetingSession.audioVideo;

    await this.connectAudioVideoDevices();
    this.audioVideo.start();
    this.audioVideo.startLocalVideoTile();
  }

  async connectAudioVideoDevices(): Promise<void> {
    if (this.audioVideo) {
      const audioInputs = await this.audioVideo.listAudioInputDevices();
      if (audioInputs[0]) {
        await this.audioVideo.chooseAudioInputDevice(audioInputs[0].deviceId);
      } else {
        console.warn("No audio device detected");
      }
      const videoInputs = await this.audioVideo.listVideoInputDevices();
      if (videoInputs[0]) {
        await this.audioVideo.chooseVideoInputDevice(videoInputs[0].deviceId);
      } else {
        console.warn("No video device detected");
      }
    }
  }

  addObserver(observer: AudioVideoObserver): void {
    if (!this.audioVideo) {
      console.error('AudioVideo not initialized. Cannot add observer');
      return;
    }
    this.audioVideo.addObserver(observer);
  }

  removeObserver(observer: AudioVideoObserver): void {
    if (!this.audioVideo) {
      console.error('AudioVideo not initialized. Cannot remove observer');
      return;
    }
    this.audioVideo.removeObserver(observer);
  }

  bindAudio(audioEle: HTMLAudioElement): void {
    this.audioVideo && this.audioVideo.bindAudioElement(audioEle);
  }

  bindVideoTile(tileId: number, videoEle: HTMLVideoElement): void {
    this.audioVideo && this.audioVideo.bindVideoElement(tileId, videoEle);
  }

  stopLocalVideoTile(): void {
    this.audioVideo && this.audioVideo.stopLocalVideoTile();
  }

  getLocalVideoTile(): VideoTile | null {
    return this.audioVideo && this.audioVideo.getLocalVideoTile();
  }

  async startLocalVideoTile(): Promise<void> {
    await this.connectAudioVideoDevices();
    this.audioVideo && this.audioVideo.startLocalVideoTile();
  }

  muteLocalAudio(): void {
    this.audioVideo && this.audioVideo.realtimeMuteLocalAudio();
  }

  unmuteLocalAudio(): void {
    this.audioVideo && this.audioVideo.realtimeUnmuteLocalAudio();
  }

  getIsLocalAudioMuted(): boolean | null {
    return this.audioVideo && this.audioVideo.realtimeIsLocalAudioMuted();
  }

  endCurrentMeetingSession(): void {
    this.audioVideo && this.audioVideo.stop();
  }
};

export default new MeetingManager();
