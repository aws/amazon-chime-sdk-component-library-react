// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useDeviceController } from '../../../providers/DeviceControllerProvider';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import { useLogger } from '../../../providers/LoggerProvider';
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

export const PreviewVideo: React.FC<React.PropsWithChildren<BaseSdkProps>> = (
  props
) => {
  const logger = useLogger();
  const audioVideo = useAudioVideo();
  const deviceSource = useDeviceController();
  const { selectedDevice } = useVideoInputs();
  const videoEl = useRef<HTMLVideoElement>(null);
  const meetingManager = useMeetingManager();
  const { setIsVideoEnabled } = useLocalVideo();

  // Ref so the cleanup reads the current meeting state, not the value captured when the effect ran.
  const audioVideoRef = useRef(audioVideo);
  audioVideoRef.current = audioVideo;

  useEffect(() => {
    const videoElement = videoEl.current;
    return () => {
      if (videoElement) {
        deviceSource?.stopVideoPreviewForVideoInput(videoElement);
        // Only stop the input outside a meeting; during a meeting the meeting owns the video input.
        if (!audioVideoRef.current) {
          deviceSource?.stopVideoInput();
        }
        setIsVideoEnabled(false);
      }
    };
  }, [deviceSource]);

  useEffect(() => {
    async function startPreview(): Promise<void> {
      if (!deviceSource || !selectedDevice || !videoEl.current) {
        return;
      }

      try {
        await meetingManager.startVideoInputDevice(selectedDevice);
        deviceSource.startVideoPreviewForVideoInput(videoEl.current);
        setIsVideoEnabled(true);
      } catch (error) {
        logger.error('Failed to start video preview');
      }
    }

    startPreview();
  }, [deviceSource, selectedDevice]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
