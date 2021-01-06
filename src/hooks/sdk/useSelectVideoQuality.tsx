// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useCallback } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

export type VideoQuality = '360p' | '540p' | '720p';

export function useSelectVideoQuality() {
  const audioVideo = useAudioVideo();

  const selectVideoQuality = useCallback(
    (quality: VideoQuality) => {
      if (!audioVideo) {
        return;
      }

      console.log(`Selecting video quality: ${quality}`);

      switch (quality) {
        case '360p':
          audioVideo.chooseVideoInputQuality(640, 360, 15, 600);
          break;
        case '540p':
          audioVideo.chooseVideoInputQuality(960, 540, 15, 1400);
          break;
        case '720p':
          audioVideo.chooseVideoInputQuality(1280, 720, 15, 1400);
          break;
        default:
          console.log(`Unsupported video quality: ${quality}`);
      }
    },
    [audioVideo]
  );

  return selectVideoQuality;
}

export default useSelectVideoQuality;
