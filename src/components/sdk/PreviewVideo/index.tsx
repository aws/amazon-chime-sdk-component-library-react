// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useDeviceSource } from '../../../hooks/sdk/useDeviceSource';
import { useAudioVideo } from '../../../providers/AudioVideoProvider';
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
  // In-meeting facade, or the hosted controller before a meeting (opt-in), so the preview works
  // pre-meeting. `undefined` when neither exists -> the effects no-op, exactly as before.
  const deviceSource = useDeviceSource();
  const { selectedDevice } = useVideoInputs();
  const videoEl = useRef<HTMLVideoElement>(null);
  const meetingManager = useMeetingManager();
  const { setIsVideoEnabled } = useLocalVideo();

  // Track the current meeting state in a ref so the cleanup can read it AT CLEANUP TIME. On join,
  // React re-renders (updating this ref to the facade) before running the previous effect's cleanup,
  // so the cleanup sees that a meeting is now active — a value captured in the effect body instead
  // would still hold the stale pre-meeting `null`.
  const audioVideoRef = useRef(audioVideo);
  audioVideoRef.current = audioVideo;

  useEffect(() => {
    const videoElement = videoEl.current;
    return () => {
      if (videoElement) {
        deviceSource?.stopVideoPreviewForVideoInput(videoElement);
        // Only stop the video INPUT when no meeting is active at cleanup time. When opted in
        // (persistDeviceController), `deviceSource` is the shared controller the meeting session is
        // built from; on join, `deviceSource` flips controller -> facade and this cleanup runs.
        // Stopping video input then would kill the very camera the meeting is starting with
        // (black/flickering local tile). In-meeting the meeting (LocalVideoProvider) owns the video
        // lifecycle; pre-meeting (genuine lobby preview being torn down) we release the camera.
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
