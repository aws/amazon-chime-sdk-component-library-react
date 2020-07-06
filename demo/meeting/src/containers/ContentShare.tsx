// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';

import { useContentShare } from '../providers/ContentShareProvider';
import { useAudioVideo } from '../../../../src';

const ContentShare: React.FC = () => {
  const audioVideo = useAudioVideo();
  const { activeContentTileId, isSomeoneSharing } = useContentShare();
  const videoEle = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoEle.current || !activeContentTileId) {
      return;
    }
    audioVideo?.bindVideoElement(activeContentTileId, videoEle.current);
  }, [activeContentTileId]);

  return isSomeoneSharing ? (
    // TODO: auto-resize the screen share tile
    <video ref={videoEle} style={{ display: 'block', width: '50rem' }} />
  ) : null;
};

export default ContentShare;
