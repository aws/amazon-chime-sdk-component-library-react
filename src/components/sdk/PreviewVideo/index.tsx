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
  const deviceController = useDeviceController();
  // In-meeting facade, or the hosted controller before a meeting (opt-in), so the preview works
  // pre-meeting. `undefined` when neither exists -> the effects no-op, exactly as before.
  const deviceSource = audioVideo ?? deviceController;
  const { selectedDevice } = useVideoInputs();
  const videoEl = useRef<HTMLVideoElement>(null);
  const meetingManager = useMeetingManager();
  const { setIsVideoEnabled } = useLocalVideo();

  useEffect(() => {
    const videoElement = videoEl.current;
    return () => {
      if (videoElement) {
        deviceSource?.stopVideoPreviewForVideoInput(videoElement);
        deviceSource?.stopVideoInput();
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
