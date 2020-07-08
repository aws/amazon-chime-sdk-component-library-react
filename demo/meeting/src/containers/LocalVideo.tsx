// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef, CSSProperties } from 'react';
import { VideoTileState } from 'amazon-chime-sdk-js';
import { useAudioVideo } from 'amazon-chime-sdk-component-library-react';

interface Props {
  id?: string;
  style?: CSSProperties;
  className?: string;
}

export const LocalVideo: React.FC<Props> = ({ id, style, className }) => {
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

  return (
    <video
      className={className || ''}
      ref={videoEl}
      id={id || ''}
      style={style}
    />
  );
};

export default LocalVideo;
