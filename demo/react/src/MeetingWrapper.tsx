import {
  ConsoleLogger,
  DefaultDeviceController,
  DefaultMeetingSession,
  LogLevel,
  MeetingSessionConfiguration,
} from 'amazon-chime-sdk-js';


class MeetingWrapper {
  meetingSession: DefaultMeetingSession | null = null;
  selfVideo: HTMLVideoElement | null = null;
  attendeeVideo: HTMLVideoElement | null = null;

  async initializeMeetingSession(meeting: any, attendee: any) {
    const logger = new ConsoleLogger('ChimeMeetingLogs', LogLevel.INFO);
    const deviceController = new DefaultDeviceController(logger);

    const configuration = new MeetingSessionConfiguration(meeting.meeting, attendee);
    this.meetingSession = new DefaultMeetingSession(configuration, logger, deviceController);

    this.meetingSession.audioVideo.addObserver(this.observer);
    await this.connectAudioVideo();
    this.meetingSession.audioVideo.bindAudioElement(document.getElementById('call-audio') as HTMLAudioElement);
    this.meetingSession.audioVideo.start();
    this.meetingSession.audioVideo.startLocalVideoTile();
  }

  async connectAudioVideo() {
    if (this.meetingSession) {
      try {
        const audioInputs = await this.meetingSession.audioVideo.listAudioInputDevices();
        if (audioInputs[0]) { 
          await this.meetingSession.audioVideo.chooseAudioInputDevice(audioInputs[0].deviceId);
        } else {
          console.warn("No audio device detected");
        }
        const videoInputs = await this.meetingSession.audioVideo.listVideoInputDevices();

        if (videoInputs[0]) {
          await this.meetingSession.audioVideo.chooseVideoInputDevice(videoInputs[0].deviceId);
        } else {
          console.warn("No video device detected");
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  stopLocalVideoTile() {
    if (this.meetingSession) {
      this.meetingSession.audioVideo.stopLocalVideoTile();
    }
  }

  getLocalVideoTile() {
    if (this.meetingSession) {
      return this.meetingSession.audioVideo.getLocalVideoTile();
    }
  }

  async startLocalVideoTile() {
    if (this.meetingSession) {
      await this.connectAudioVideo();
      this.meetingSession.audioVideo.startLocalVideoTile();
    }
  }

  muteLocalAudio () {
    if (this.meetingSession) {
      this.meetingSession.audioVideo.realtimeMuteLocalAudio();
    }
  }

  unmuteLocalAudio () {
    if (this.meetingSession) {
      this.meetingSession.audioVideo.realtimeUnmuteLocalAudio();
    }
  }

  getLocalAudioMuted () {
    if (this.meetingSession) {
      return this.meetingSession.audioVideo.realtimeIsLocalAudioMuted();
    }
  }

  endCurrentMeetingSession() {
    if (this.meetingSession) {
      this.meetingSession.audioVideo.stop();
      this.meetingSession = null;
    }
  }

  observer = {
    audioVideoDidStart: () => {
      console.log('Audio Video Started');
    },
    videoTileDidUpdate: (tileState: { localTile: any; tileId: any; }) => {
      console.log("Video Tile Did update event:", tileState);
      const videoElement = tileState.localTile ? this.getSelfVideo() : this.getAttendeeVideo();
      if (this.meetingSession && videoElement) {
        this.meetingSession.audioVideo.bindVideoElement(tileState.tileId, videoElement);
      } else {
        console.log("Unable to bind video to video tile");
      }
    },
    audioVideoDidStop: (sessionStatus: any) => {
      console.log('Audio Video Stopped:', sessionStatus);
    },
    videoTileWasRemoved: (tileId: any) => {
      console.log(`Tile with ID: ${tileId} removed`);
    }
  };

  getSelfVideo() {
    if (!this.selfVideo){
      const selfVideo = document.getElementById('self-video');
      this.selfVideo = selfVideo && selfVideo.getElementsByClassName('video')[0] as HTMLVideoElement;
    }
    return this.selfVideo;
  }

  getAttendeeVideo() {
    if (!this.attendeeVideo){
      const attendeeVideo = document.getElementById('attendee-video');
      this.attendeeVideo = attendeeVideo && attendeeVideo.getElementsByClassName('video')[0] as HTMLVideoElement;
    }
    return this.attendeeVideo;
  }
};

export default new MeetingWrapper();
