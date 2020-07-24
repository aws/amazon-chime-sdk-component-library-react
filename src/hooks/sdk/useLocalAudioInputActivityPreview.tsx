// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';
import { useAudioInputs } from '../../providers/DevicesProvider';

type TransformScaleDirection = 'horizontal' | 'vertical';

export const useLocalAudioInputActivityPreview = (elementRef: any, scaleDirection: TransformScaleDirection = 'horizontal') => {
  const audioVideo = useAudioVideo();
  const { selectedDevice } = useAudioInputs();

  useEffect(() => {
    const analyserNode = audioVideo?.createAnalyserNodeForAudioInput();
    console.log('useLocalAudioInputActivityPreview', analyserNode)

    if (!analyserNode?.getByteTimeDomainData) {
      return;
    }

    const data = new Uint8Array(analyserNode.fftSize);
    let frameIndex = 0;
    let isMounted = true;

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

        if (elementRef.current && decimal >= 0) {
          elementRef.current.style.transform = scaleDirection === 'horizontal' 
            ? `scaleX(${decimal})`
            : `scaleY(${decimal})`;
        }
      }
      frameIndex = (frameIndex + 1) % 2;

      if (isMounted) {
        requestAnimationFrame(analyserNodeCallback);
      }
    }

    requestAnimationFrame(analyserNodeCallback);

    return () => {
      isMounted = false;
    };
  }, [selectedDevice]);
};

export default useLocalAudioInputActivityPreview;
