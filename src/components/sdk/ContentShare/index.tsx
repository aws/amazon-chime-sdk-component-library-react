// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { ContentTile } from '../../ui/ContentTile';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {}

export const ContentShare: React.FC<Props> = ({ className, ...rest }) => {
  const audioVideo = useAudioVideo();
  const { activeContentTileId, isSomeoneSharing } = useContentShareState();
  const videoEl = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!audioVideo || !videoEl.current || !activeContentTileId) {
      return;
    }

    audioVideo.bindVideoElement(activeContentTileId, videoEl.current);

    return () => audioVideo.unbindVideoElement(activeContentTileId);
  }, [audioVideo, activeContentTileId]);

  return isSomeoneSharing ? (
    <ContentTile
      objectFit="contain"
      className={className || ''}
      {...rest}
      ref={videoEl}
    />
  ) : null;
};

export default ContentShare;
