// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useEffect } from 'react';

import { VideoTile } from '../../ui/VideoTile';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';

interface Props {
  tileId: number;
  name?: string;
  className?: string;
}

export const RemoteVideo: React.FC<Props> = ({ name, className, tileId }) => {
  const audioVideo = useAudioVideo();
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!audioVideo || !videoEl.current) {
      return;
    }

    audioVideo.bindVideoElement(tileId, videoEl.current);

    return () => audioVideo.unbindVideoElement(tileId);
  }, [tileId]);

  return (
    <VideoTile
      className={`remote-video--${tileId} ${className || ''}`}
      ref={videoEl}
      nameplate={name}
    />
  );
};

export default RemoteVideo;
