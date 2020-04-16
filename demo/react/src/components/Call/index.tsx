import React from 'react';
import CallControls from '../CallControls';
import VideoTile from '../VideoTile';

import { StyledContainer, StyledMeetingContainer, StyledVideoContainer } from './Styled';

export interface CallProps {
    meetingTitle: string;
    muted: boolean;
    cameraActive: boolean;
    attendeeName: string;
    selfName: string;
}

const Call: React.FC<CallProps> = (props: CallProps) => {
    // TODO: Replace implementation
    const bindAttendeeVideoTile = () => {
        console.log("Binds the attendee's video tile");
    }

    const bindSelfVideoTile = () => {
        console.log("Binds the user's video tile");
    }

  return (
    // TODO: Replace components with Library components
    <StyledMeetingContainer>
      <h1>{props.meetingTitle}</h1>
      <StyledContainer >
        <StyledVideoContainer>
          <VideoTile nameplate={props.attendeeName} bindVideoTile={bindAttendeeVideoTile} className="attendee-video"/>
          <VideoTile nameplate={props.selfName} bindVideoTile={bindSelfVideoTile} className="self-video"/>
          <CallControls />
        </StyledVideoContainer>
      </StyledContainer>
    </StyledMeetingContainer>
  );
}

export default Call;
