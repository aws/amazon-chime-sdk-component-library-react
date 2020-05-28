import React, { useContext, useEffect, useRef } from 'react';

import { MeetingManager, MeetingContext } from '../meeting/MeetingProvider';
import { useContentShareContext } from '../meeting/ContentShareProvider';

const ContentShare: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const { activeContentTileId } = useContentShareContext();
  const videoEle = useRef(null);

  useEffect(() => {
    meetingManager?.audioVideo?.bindVideoElement(activeContentTileId!, (videoEle.current as unknown as HTMLVideoElement))
  }, [activeContentTileId]);

  return (
    //TODO: resize the screen share tile size
    <video ref={videoEle} style={{ width: "50rem" }}/>
  );
}

export default ContentShare;
