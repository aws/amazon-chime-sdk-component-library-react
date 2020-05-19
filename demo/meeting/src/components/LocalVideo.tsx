import React, { useContext, useEffect, useRef, CSSProperties } from 'react';
import { VideoTileState } from 'amazon-chime-sdk-js';

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';

interface Props {
  id?: string;
  style?: CSSProperties;
}

export const LocalVideo: React.FC<Props> = ({ id, style }) =>{
  const meetingManager: MeetingManager | null = useContext(MeetingContext)!;
  const videoEle = useRef(null);

  useEffect(() => {
    const audioVideoDidStart = () => {
      console.log('Observer audioVideoDidStart');
    };
  
    const videoTileDidUpdate = (tileState: VideoTileState) => {
      console.log("Observer videoTileDidUpdate", tileState);
      if (!tileState.boundAttendeeId || !tileState.localTile || !tileState.tileId || !videoEle.current) {
        return;
      }
      meetingManager?.audioVideo?.bindVideoElement(tileState.tileId, (videoEle.current as unknown as HTMLVideoElement))
    };

    meetingManager ?.audioVideo ?.addObserver({ audioVideoDidStart, videoTileDidUpdate });
  }, []);

  return (
    <video ref={videoEle} id={id} style={style} />
  );
};

export default LocalVideo;
