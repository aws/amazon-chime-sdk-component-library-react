import React, { useState } from 'react';
import CallControls from '../CallControls';
import VideoTile from '../VideoTile';
import MeetingWrapper from '../../MeetingWrapper';
import ApiGatewayClient from '../../ApiGatewayClient';

import { StyledContainer, StyledMeetingContainer, StyledVideoContainer } from './Styled';

export interface CallProps {
    attendeeName: string;
}

const Call: React.FC<CallProps> = ({
  attendeeName,
}) => {
  const [isMuted, setMuted] = useState(false);
  const [localVideoActive, setlocalVideoActive] = useState(false);

  // TODO: Replace implementation
  const bindAttendeeVideoTile = () => {
      console.log("Binds the attendee's video tile");
  }

  const bindSelfVideoTile = () => {
      console.log("Binds the user's video tile");
  }

  const endMeeting = () => {
    if (MeetingWrapper.meetingSession) {
      const meetingId = MeetingWrapper.meetingSession.configuration.meetingId;
      if (meetingId) {
        setMuted(false);
        setlocalVideoActive(true);
        console.log("End Meeting: " + meetingId);
        ApiGatewayClient.endMeeting(meetingId);
        MeetingWrapper.endCurrentMeetingSession();
      }
    }
  };
  
  const toggleMuted = () => {
    const isMeetingMuted = MeetingWrapper.getLocalAudioMuted();
    console.log(`Set Muted to ${!isMeetingMuted}`);
    setMuted(!isMeetingMuted);
    isMeetingMuted ? MeetingWrapper.unmuteLocalAudio() : MeetingWrapper.muteLocalAudio();
  };
  
  const toggleCamera = () => {
    const videoTile = MeetingWrapper.getLocalVideoTile();
    let videoActive = false;
    if (videoTile) {
      videoActive = videoTile.state().active;
    }
    console.log(`Set camera active to ${!videoActive}`);
    setlocalVideoActive(videoActive);
    videoActive ? MeetingWrapper.stopLocalVideoTile() : MeetingWrapper.startLocalVideoTile();
  };

  return (
    // TODO: Replace components with Library components
    <StyledMeetingContainer>
      <StyledContainer >
        <StyledVideoContainer>
          <audio id="call-audio"/>
          <VideoTile nameplate={attendeeName} bindVideoTile={bindAttendeeVideoTile} id="attendee-video"/>
          <VideoTile nameplate={'Me'} bindVideoTile={bindSelfVideoTile} id="self-video"/>
          <CallControls 
            handleCameraToggle={toggleCamera} 
            handleEndMeeting={endMeeting} 
            handleMuteToggle={toggleMuted} 
            isMuted={isMuted} 
            isCameraActive={localVideoActive}
          />
        </StyledVideoContainer>
      </StyledContainer>
    </StyledMeetingContainer>
  );
}

export default Call;
