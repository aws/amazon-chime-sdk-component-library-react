// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useLocalVideo, useVideoInputs } from '../../..';
import useSelectVideoInputDevice from '../../../hooks/sdk/useSelectVideoInputDevice';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import VideoTile from '../../ui/VideoTile';
import { BaseSdkProps } from '../Base';

const StyledPreview = styled(VideoTile)`
  height: auto;
  background: unset;

  video {
    position: static;
  }
`;

export const PreviewVideo: React.FC<BaseSdkProps> = (props) => {
  const audioVideo = useAudioVideo();
  const { selectedDevice } = useVideoInputs();
  const videoEl = useRef<HTMLVideoElement>(null);
  const selectVideoInput = useSelectVideoInputDevice();
  const { setIsVideoEnabled } = useLocalVideo();

  useEffect(() => {
    const videoElement = videoEl.current;
    return () => {
      if (videoElement) {
        audioVideo?.stopVideoPreviewForVideoInput(videoElement);
        audioVideo?.stopVideoInput();
        setIsVideoEnabled(false);
      }
    };
  }, [audioVideo]);

  useEffect(() => {
    async function startPreview(): Promise<void> {
      if (!audioVideo || !selectedDevice || !videoEl.current) {
        return;
      }

      try {
        await selectVideoInput(selectedDevice);
        audioVideo.startVideoPreviewForVideoInput(videoEl.current);
        setIsVideoEnabled(true);
      } catch (error) {
        console.error('Failed to start video preview');
      }
    }

    startPreview();
  }, [audioVideo, selectedDevice]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
