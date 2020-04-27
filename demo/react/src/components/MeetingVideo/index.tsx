import React, { useReducer, useEffect } from 'react';
import {
  MeetingSessionStatusCode,
  VideoTileState,
  MeetingSessionStatus,
} from 'amazon-chime-sdk-js';

import CallControls from '../CallControls';
import VideoTile from '../VideoTile';
import MeetingManager from '../../meeting/MeetingManager';

import { StyledContainer, StyledMeetingContainer, StyledVideoContainer } from './Styled';

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'TILE_UPDATED': {
      const { tileId, ...rest } = action.payload;
      return {
        ...state,
        [tileId]: {
          ...rest,
        },
      };
    }
    case 'TILE_DELETED': {
      const { [action.payload]: omit, ...rest } = state;
      return {
        ...rest,
      };
    }
    default: {
      return state;
    }
  }
}

export interface CallProps {
  attendeeName: string;
  onIsInMeetingChange: (isInMeeting: boolean) => void;
}

const MeetingVideo: React.FC<CallProps> = ({ attendeeName, onIsInMeetingChange }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const audioVideoDidStart = () => {
    console.log('Observer audioVideoDidStart');
  };

  const videoTileDidUpdate = (tileState: VideoTileState) => {
    console.log("Observer videoTileDidUpdate", tileState);
    dispatch({ type: 'TILE_UPDATED', payload: tileState });
  };

  const videoTileWasRemoved = (tileId: number) => {
    console.log("Observer videoTileWasRemoved", tileId);
    dispatch({ type: 'TILE_DELETED', payload: tileId });
  };

  const audioVideoDidStop = (sessionStatus: MeetingSessionStatus) => {
    console.log("Observer audioVideoDidStop");
    onIsInMeetingChange(false);
    const sessionStatusCode = sessionStatus.statusCode();
    if (sessionStatusCode === MeetingSessionStatusCode.Left) {
      /*
        - You called meetingSession.audioVideo.stop().
        - When closing a browser window or page, Chime SDK attempts to leave the session.
      */
      console.log('Observer audioVideoDidStop, You left the session');
    } else {
      console.log('Observer audioVideoDidStop, Stopped with a session status code: ', sessionStatusCode);
    }
  }

  const observers = { videoTileDidUpdate, audioVideoDidStart, videoTileWasRemoved, audioVideoDidStop };

  useEffect(() => {
    MeetingManager.addObserver(observers);

    return () => {
      MeetingManager.removeObserver(observers);
    };
  }, []);
  
  const getLocalVideoTileId = () => {
    return Object.keys(state).find((tileId) => state[tileId].localTile === true);
  }

  const getAttendeeVideoTileId = () => {
    const localId = getLocalVideoTileId();
    return Object.keys(state).find((tileId) => tileId != localId);
  }

  return (
    // TODO: Replace components with Library components, and move MeetingVideo out from component folder
    <StyledMeetingContainer>
      <StyledContainer >
        <StyledVideoContainer>
          <VideoTile
            nameplate={attendeeName}
            bindVideoTile={ref => MeetingManager.bindVideoTile(parseInt(getAttendeeVideoTileId()!), ref)}
            id="attendee-video" />
          <VideoTile
            nameplate={'Me'}
            bindVideoTile={ref => MeetingManager.bindVideoTile(parseInt(getLocalVideoTileId()!), ref)}
            id="self-video" />
          <CallControls />
        </StyledVideoContainer>
      </StyledContainer>
    </StyledMeetingContainer>
  );
}

export default MeetingVideo;
