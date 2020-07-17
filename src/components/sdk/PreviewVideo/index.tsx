// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useEffect } from 'react';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';

import VideoTile from '../../ui/VideoTile';
import styled from 'styled-components';
import { BaseSdkProps } from '../Base';

const StyledPreview = styled(VideoTile)`
  height: auto;
  background: unset;

  video {
    position: static;
  }
`;

export const PreviewVideo: React.FC<BaseSdkProps> = props => {
  const audioVideo = useAudioVideo();
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!audioVideo || !videoEl.current) {
      return;
    }

    audioVideo.startVideoPreviewForVideoInput(videoEl.current);

    return () => {
      if (videoEl.current) {
        audioVideo.stopVideoPreviewForVideoInput(videoEl.current);
      }
    };
  }, [audioVideo]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
