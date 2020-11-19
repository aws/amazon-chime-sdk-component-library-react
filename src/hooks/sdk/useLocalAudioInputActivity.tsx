// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';
import { useAudioInputs } from '../../providers/DevicesProvider';

export const useLocalAudioInputActivity = (cb: (decimal: number) => void) => {
  const audioVideo = useAudioVideo();
  const { selectedDevice } = useAudioInputs();

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    let analyserNode: AnalyserNode | null;
    let restart = false;
    let data: Uint8Array;
    let frameIndex: number;
    let isMounted = true;
    let lastDecimal: number;

    audioVideo.addDeviceChangeObserver({
      audioInputsChanged: () => {
        restart = true;
      }
    });

    function initializePreview() {
      if (!audioVideo || !isMounted) return;

      analyserNode = audioVideo.createAnalyserNodeForAudioInput();

      if (!analyserNode?.getByteTimeDomainData) {
        return;
      }

      data = new Uint8Array(analyserNode.fftSize);
      frameIndex = 0;
      restart = false;

      requestAnimationFrame(analyserNodeCallback);
    }

    function analyserNodeCallback() {
      if (!analyserNode) {
        return;
      }

      if (frameIndex === 0) {
        analyserNode.getByteTimeDomainData(data);
        const lowest = 0.01;
        let max = lowest;
        for (const f of data as any) {
          max = Math.max(max, (f - 128) / 128);
        }
        const decimal = (Math.log(lowest) - Math.log(max)) / Math.log(lowest);

        if (lastDecimal !== decimal) {
          lastDecimal = decimal;

          if (cb) {
            cb(decimal);
          }
        }
      }

      frameIndex = (frameIndex + 1) % 2;

      if (restart) {
        setTimeout(initializePreview, 500);
      } else if (isMounted) {
        requestAnimationFrame(analyserNodeCallback);
      }
    }

    initializePreview();

    return () => {
      isMounted = false;
    };
  }, [audioVideo, selectedDevice, cb]);
};

export default useLocalAudioInputActivity;
