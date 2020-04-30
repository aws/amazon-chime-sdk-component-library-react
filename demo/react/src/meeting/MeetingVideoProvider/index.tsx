import React, { createContext, useReducer, useEffect } from 'react';
import {
  MeetingSessionStatusCode,
  VideoTileState,
  MeetingSessionStatus,
} from 'amazon-chime-sdk-js';

import { reducer, VidelTileType, initialState } from './state';
import MeetingManager  from '../MeetingManager';

type MeetingVideoProps = {
  onIsInMeetingChange: (isInMeeting: boolean) => void;
  attendeeName: string;
};

type VideoContext = {
  state: any;
  attendeeName: string;
};

export const MeetingVideoContext = createContext<VideoContext>(initialState);

const MeetingVideo: React.FC<MeetingVideoProps> = ({ attendeeName, onIsInMeetingChange, children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  
  useEffect(() => {
    const audioVideoDidStart = () => {
      console.log('Observer audioVideoDidStart');
    };
  
    const videoTileDidUpdate = (tileState: VideoTileState) => {
      console.log("Observer videoTileDidUpdate", tileState);
      dispatch({ type: VidelTileType.TILE_UPDATED, payload: tileState });
    };
  
    const videoTileWasRemoved = (tileId: number) => {
      console.log("Observer videoTileWasRemoved", tileId);
      dispatch({ type: VidelTileType.TILE_DELETED, payload: tileId });
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
    MeetingManager.addObserver(observers);

    return () => {
      MeetingManager.removeObserver(observers);
    };
  }, []);

  return (
    <MeetingVideoContext.Provider
      value={{
        state,
        attendeeName: attendeeName
      }}
    >
      {children}
    </MeetingVideoContext.Provider>
  );
}

export function useMeetingVideoContext(): VideoContext {
  const meetingVideoContext = React.useContext(MeetingVideoContext);
  if (!meetingVideoContext) {
    throw new Error('useMeetingVideoContext must be used within MeetingVideoProvider');
  }
  return meetingVideoContext;
}

export default MeetingVideo;
