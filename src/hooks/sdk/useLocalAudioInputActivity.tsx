// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import type { DeviceChangeObserver } from 'amazon-chime-sdk-js';
import { useEffect } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';
import { useDeviceManager } from '../../providers/DeviceProvider';
import { useAudioInputs } from '../../providers/DevicesProvider';

export const useLocalAudioInputActivity = (cb: (decimal: number) => void) => {
  const audioVideo = useAudioVideo();
  const deviceManager = useDeviceManager();
  const { selectedDevice } = useAudioInputs();

  // Read the analyser from the in-meeting facade when a meeting is active, and otherwise from the
  // standalone device layer. This lets the mic meter work BEFORE a meeting (pre-call lobby), where
  // `audioVideo` is undefined but the device manager already owns a live audio input stream. Both
  // expose the same `createAnalyserNodeForAudioInput` / device-change-observer API.
  const deviceSource = audioVideo ?? deviceManager;

  useEffect(() => {
    let analyserNode: AnalyserNode | null;
    let restart = false;
    let data: Uint8Array;
    let frameIndex: number;
    let isMounted = true;
    let lastDecimal: number;

    const deviceChangeObserver: DeviceChangeObserver = {
      audioInputsChanged: () => {
        restart = true;
      },
    };
    deviceSource.addDeviceChangeObserver(deviceChangeObserver);

    function initializePreview() {
      if (!isMounted) return;

      analyserNode = deviceSource.createAnalyserNodeForAudioInput();

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
      deviceSource.removeDeviceChangeObserver(deviceChangeObserver);
    };
  }, [deviceSource, selectedDevice, cb]);
};

export default useLocalAudioInputActivity;
