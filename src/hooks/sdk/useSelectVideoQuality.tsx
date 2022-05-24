// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';
import { useLogger } from '../../providers/LoggerProvider';

export type VideoQuality = '360p' | '540p' | '720p';

export function useSelectVideoQuality(): (quality: VideoQuality) => void {
  const audioVideo = useAudioVideo();
  const logger = useLogger();

  const selectVideoQuality = useCallback(
    (quality: VideoQuality) => {
      if (!audioVideo) {
        return;
      }

      logger.info(`Selecting video quality: ${quality}`);

      switch (quality) {
        case '360p':
          audioVideo.chooseVideoInputQuality(640, 360, 15);
          audioVideo.setVideoMaxBandwidthKbps(600);
          break;
        case '540p':
          audioVideo.chooseVideoInputQuality(960, 540, 15);
          audioVideo.setVideoMaxBandwidthKbps(1400);
          break;
        case '720p':
          audioVideo.chooseVideoInputQuality(1280, 720, 15);
          audioVideo.setVideoMaxBandwidthKbps(1400);
          break;
        default:
          logger.warn(`Unsupported video quality: ${quality}`);
      }
    },
    [audioVideo]
  );

  return selectVideoQuality;
}

export default useSelectVideoQuality;
