import React, { useState } from 'react';
import Microphone from '../icons/Microphone';
import Camera from '../icons/Camera';
import Phone from '../icons/Phone';
import { StyledCallControls } from './Styled';

import MeetingManager from '../../meeting/MeetingManager';
import ApiGatewayClient from '../../ApiGatewayClient';

const CallControls: React.FC = () => {
  const [isMuted, setMuted] = useState(false);
  const [localVideoActive, setlocalVideoActive] = useState(false);

  const endMeeting = () => {
    const meetingId = MeetingManager.meetingSession?.configuration.meetingId;
    if (meetingId) {
      console.log("End Meeting: " + meetingId);
      ApiGatewayClient.endMeeting(meetingId);
      MeetingManager.endCurrentMeetingSession();
    }
  };

  const toggleMuted = () => {
    const isMeetingMuted = MeetingManager.getIsLocalAudioMuted();
    console.log(`Set Muted to ${!isMeetingMuted}`);
    setMuted(!isMeetingMuted);
    isMeetingMuted ? MeetingManager.unmuteLocalAudio() : MeetingManager.muteLocalAudio();
  };
  
  const toggleCamera = () => {
    const videoTile = MeetingManager.getLocalVideoTile();
    let isVideoActive = false;
    if (videoTile) {
      isVideoActive = videoTile.state().active;
    }
    console.log(`Set camera active to ${!isVideoActive}`);
    setlocalVideoActive(isVideoActive);
    isVideoActive ? MeetingManager.stopLocalVideoTile() : MeetingManager.startLocalVideoTile();
  };

  return (
    // TODO: Replace with the component Library button
    <StyledCallControls className="call-controls">
      <button onClick={toggleMuted}><Microphone disabled={isMuted}/></button>
      <button onClick={toggleCamera}><Camera disabled={localVideoActive}/></button>
      <button onClick={endMeeting}><Phone /></button>
    </StyledCallControls>
  );
}

export default CallControls;
