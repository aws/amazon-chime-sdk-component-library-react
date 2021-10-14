// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
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
  const videoEl = useRef<HTMLVideoElement>(null);
  const { selectedDevice } = useVideoInputs();
  const { isVideoEnabled, setIsVideoEnabled } = useLocalVideo();

  useEffect(() => {
    if (!audioVideo || !selectedDevice || !videoEl.current) {
      return;
    }
    let mounted = true;
    const videoElement = videoEl.current;

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

      if (videoElement) {
        audioVideo.stopVideoPreviewForVideoInput(videoElement);
        if (isVideoEnabled) setIsVideoEnabled(false);
      }
    };
  }, [audioVideo, selectedDevice]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
