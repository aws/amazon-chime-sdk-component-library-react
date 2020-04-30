import React from 'react';
import CallControls from '../CallControls';
import VideoTile from '../VideoTile';
import MeetingManager from '../../meeting/MeetingManager';
import { useMeetingVideoContext } from '../../meeting/MeetingVideoProvider';

import { StyledContainer, StyledMeetingContainer, StyledVideoContainer } from './Styled';

const MeetingVideo: React.FC = () => {
  const { state, attendeeName } = useMeetingVideoContext();

  const handleBindRemoteVideoTile = React.useCallback((ref) => {
    MeetingManager.bindVideoTile(parseInt(state.remoteVideoId),ref)
  }, [state.remoteVideoId]);

  const handleBindLocalVideoTile = React.useCallback((ref) => {
    MeetingManager.bindVideoTile(parseInt(state.localVideoId),ref)
  }, [state.localVideoId]);

  return (
    <StyledMeetingContainer>
      <StyledContainer >
        <StyledVideoContainer>
          <VideoTile
            nameplate={attendeeName}
            bindVideoTile={handleBindRemoteVideoTile}
            id="attendee-video" />
          <VideoTile
            nameplate={'Me'}
            bindVideoTile={handleBindLocalVideoTile}
            id="self-video" />
          <CallControls />
        </StyledVideoContainer>
      </StyledContainer>
    </StyledMeetingContainer>
  );
}

export default MeetingVideo;
