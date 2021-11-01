// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Device, VideoTransformDevice } from 'amazon-chime-sdk-js';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { useMeetingManager } from '../../../providers/MeetingProvider';
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
  const meetingManager = useMeetingManager();
  const videoEl = useRef<HTMLVideoElement>(null);

  const { setIsVideoEnabled } = useLocalVideo();
  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  const [device, setDevice] = useState<Device | VideoTransformDevice | null>(
    meetingManager.selectedVideoInputTransformDevice
  );

  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputTransformDevice(setDevice);
    return () => {
      meetingManager.unsubscribeFromSelectedVideoInputTranformDevice(setDevice);
    };
  }, []);

  useEffect(() => {
    const videoElement = videoEl.current;
    return () => {
      if (videoElement) {
        audioVideo?.stopVideoPreviewForVideoInput(videoElement);
        setIsVideoEnabled(false);
      }
    };
  }, [audioVideo]);

  useEffect(() => {
    if (!audioVideo || !device || !videoEl.current) {
      return;
    }
    async function startPreview() {
      if (!audioVideo) {
        return;
      }
      await meetingManager.selectVideoInputDevice(device);
      if (videoEl.current) {
        audioVideo.startVideoPreviewForVideoInput(videoEl.current);
        setIsVideoEnabled(true);
      }
    }
    startPreview();
  }, [device]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
