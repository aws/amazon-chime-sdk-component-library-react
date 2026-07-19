// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useDeviceManager } from '../../../providers/DeviceProvider';
import { useVideoInputs } from '../../../providers/DevicesProvider';
import { LocalVideoContext } from '../../../providers/LocalVideoProvider';
import { useLogger } from '../../../providers/LoggerProvider';
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
  const deviceManager = useDeviceManager();
  const { selectedDevice } = useVideoInputs();
  const videoEl = useRef<HTMLVideoElement>(null);
  // Read the local-video context directly (not via useLocalVideo, which throws) so PreviewVideo also
  // works in a pre-call lobby that has no MeetingProvider/LocalVideoProvider. `setIsVideoEnabled`
  // tracks the in-meeting local video tile; with no LocalVideoProvider there is no tile to track, so
  // the calls simply no-op.
  const localVideo = useContext(LocalVideoContext);
  const setIsVideoEnabled = localVideo?.setIsVideoEnabled;

  useEffect(() => {
    const videoElement = videoEl.current;
    return () => {
      if (videoElement) {
        deviceManager.stopVideoPreviewForVideoInput(videoElement);
        // Stream-only stop; do NOT use stopVideoInputDevice() here — that also clears the tracked
        // camera selection and publishes it, wiping the user's choice for every consumer. Ending a
        // preview should stop capture without deselecting the device.
        void deviceManager.stopVideoInput();
        setIsVideoEnabled?.(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceManager]);

  useEffect(() => {
    async function startPreview(): Promise<void> {
      if (!selectedDevice || !videoEl.current) {
        return;
      }

      try {
        await deviceManager.startVideoInputDevice(selectedDevice);
        deviceManager.startVideoPreviewForVideoInput(videoEl.current);
        setIsVideoEnabled?.(true);
      } catch (error) {
        logger.error('Failed to start video preview');
      }
    }

    startPreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceManager, selectedDevice]);

  return <StyledPreview {...props} ref={videoEl} />;
};

export default PreviewVideo;
