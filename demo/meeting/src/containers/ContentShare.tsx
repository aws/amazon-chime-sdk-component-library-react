import React, { useContext, useEffect, useRef } from 'react';

import { MeetingManager, MeetingContext } from '../providers/MeetingProvider';
import { useContentShareContext } from '../providers/ContentShareProvider';

const ContentShare: React.FC = () => {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const { activeContentTileId, isSomeoneSharing } = useContentShareContext();
  const videoEle = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoEle.current || !activeContentTileId) {
      return;
    }
    meetingManager?.audioVideo?.bindVideoElement(activeContentTileId!, videoEle.current)
  }, [activeContentTileId]);

  return (
    isSomeoneSharing ? 
    //TODO: auto-resize the screen share tile
    <video ref={videoEle} style={{ display: "block", width: "50rem" }} /> : null
  );
}

export default ContentShare;
