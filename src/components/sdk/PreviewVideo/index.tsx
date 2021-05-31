// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useEffect } from 'react';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';

import VideoTile from '../../ui/VideoTile';
import styled from 'styled-components';
import { BaseSdkProps } from '../Base';
import { useVideoInputs } from '../../../providers/DevicesProvider';

const StyledPreview = styled(VideoTile)`
  height: auto;
  background: unset;

  video {
    position: static;
  }
`;

export const PreviewVideo: React.FC<BaseSdkProps> = (props) => {
  const audioVideo = useAudioVideo();
  const videoEl = useRef<HTMLVideoElement>(null);
  const { selectedDevice } = useVideoInputs();

  useEffect(() => {
    if (!audioVideo || !selectedDevice || !videoEl.current) {
      return;
    }

    let mounted = true;

    async function startPreview() {
      if (!audioVideo) {
        return;
      }

      await audioVideo.chooseVideoInputDevice(selectedDevice);
      if (videoEl.current && mounted) {
        audioVideo.startVideoPreviewForVideoInput(videoEl.current);
      }
    }

    startPreview();

    return () => {
      mounted = false;

      if (videoEl.current) {
        audioVideo.stopVideoPreviewForVideoInput(videoEl.current);
      }
    };
  }, [audioVideo, selectedDevice]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
