// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Device, VideoTransformDevice } from 'amazon-chime-sdk-js';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
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

  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  const [device, setDevice] = useState<
    Device | VideoTransformDevice | undefined
  >(meetingManager.selectedVideoInputTransformDevice);

  // TODO: Move this to the Video Input Provider and expose only one selected Video Input device state
  useEffect(() => {
    meetingManager.subscribeToSelectedVideoInputTransformDevice(setDevice);
    return () => {
      meetingManager.unsubscribeFromSelectedVideoInputTransformDevice(
        setDevice
      );
    };
  }, []);

  useEffect(() => {
    const videoElement = videoEl.current;
    return () => {
      if (videoElement) {
        audioVideo?.stopVideoPreviewForVideoInput(videoElement);
      }
    };
  }, [audioVideo]);

  useEffect(() => {
    async function startPreview(): Promise<void> {
      if (!audioVideo || !device || !videoEl.current) {
        return;
      }
      await meetingManager.selectVideoInputDevice(device);
      audioVideo.startVideoPreviewForVideoInput(videoEl.current);
    }
    startPreview();
  }, [audioVideo, device]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
