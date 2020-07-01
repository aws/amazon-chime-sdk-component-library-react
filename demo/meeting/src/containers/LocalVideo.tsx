import React, { useEffect, useRef, CSSProperties } from 'react';
import { VideoTileState } from 'amazon-chime-sdk-js';
import { useAudioVideo } from '../../../../src';

interface Props {
  id?: string;
  style?: CSSProperties;
}

export const LocalVideo: React.FC<Props> = ({ id, style }) => {
  const audioVideo = useAudioVideo();
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const videoTileDidUpdate = (tileState: VideoTileState) => {
      if (
        !tileState.boundAttendeeId ||
        !tileState.localTile ||
        !tileState.tileId ||
        !videoEl.current
      ) {
        return;
      }

      audioVideo.bindVideoElement(tileState.tileId, videoEl.current);
    };

    audioVideo.addObserver({
      videoTileDidUpdate
    });
  }, [audioVideo]);

  return <video ref={videoEl} id={id} style={style} />;
};

export default LocalVideo;
