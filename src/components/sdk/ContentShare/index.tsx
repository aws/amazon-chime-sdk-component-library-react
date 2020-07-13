// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useContentShare } from '../../../providers/ContentShareProvider';
import { ContentTile } from '../../ui/ContentTile';
import { BaseProps } from '../../ui/Base';

interface Props extends BaseProps {}

export const ContentShare: React.FC<Props> = ({ className, ...rest }) => {
  const audioVideo = useAudioVideo();
  const { activeContentTileId, isSomeoneSharing } = useContentShare();
  const videoEl = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoEl.current || !activeContentTileId) {
      return;
    }
    audioVideo?.bindVideoElement(activeContentTileId, videoEl.current);
  }, [activeContentTileId]);

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
