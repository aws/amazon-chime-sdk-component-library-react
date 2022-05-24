// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes, useEffect, useRef } from 'react';

import { useApplyVideoObjectFit } from '../../../hooks/useApplyVideoObjectFit';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { VideoTile } from '../../ui/VideoTile';
import { BaseSdkProps } from '../Base';

interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseSdkProps {
  /** The tile ID to bind the video element to */
  tileId: number;
  /** The name to show on the video's nameplate */
  name?: string;
}

export const RemoteVideo: React.FC<Props> = ({
  name,
  className,
  tileId,
  ...rest
}) => {
  const audioVideo = useAudioVideo();
  const videoEl = useRef<HTMLVideoElement>(null);
  useApplyVideoObjectFit(videoEl);

  useEffect(() => {
    if (!audioVideo || !videoEl.current) {
      return;
    }

    audioVideo.bindVideoElement(tileId, videoEl.current);

    return () => {
      const tile = audioVideo.getVideoTile(tileId);
      if (tile) {
        audioVideo.unbindVideoElement(tileId);
      }
    };
  }, [audioVideo, tileId]);

  return (
    <VideoTile
      {...rest}
      ref={videoEl}
      nameplate={name}
      className={`ch-remote-video--${tileId} ${className || ''}`}
    />
  );
};

export default RemoteVideo;
