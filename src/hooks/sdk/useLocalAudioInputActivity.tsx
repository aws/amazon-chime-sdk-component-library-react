// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import type {
  DeviceChangeObserver,
  RemovableAnalyserNode,
} from 'amazon-chime-sdk-js';
import { useContext, useEffect } from 'react';

import { MeetingContext } from '../../providers/MeetingProvider';
import { useDeviceController } from './useDeviceController';

export const useLocalAudioInputActivity = (cb: (decimal: number) => void) => {
  const deviceController = useDeviceController();
  // Read the context directly rather than `useMeetingManager`, which throws outside `MeetingProvider`.
  const meetingManager = useContext(MeetingContext);

  useEffect(() => {
    if (!deviceController) {
      return;
    }

    let analyserNode: RemovableAnalyserNode | null = null;
    let restart = false;
    let data: Uint8Array;
    let frameIndex: number;
    let isMounted = true;
    let lastDecimal: number;
    // Each (re)initialization starts a new animation loop; older loops stop when this changes.
    let generation = 0;

    const deviceChangeObserver: DeviceChangeObserver = {
      audioInputsChanged: () => {
        restart = true;
      },
    };
    deviceController.addDeviceChangeObserver(deviceChangeObserver);

    function releaseAnalyser() {
      analyserNode?.removeOriginalInputs?.();
      analyserNode = null;
    }

    function initializePreview() {
      if (!deviceController || !isMounted) return;

      releaseAnalyser();
      generation += 1;
      analyserNode = deviceController.createAnalyserNodeForAudioInput();

      if (!analyserNode?.getByteTimeDomainData) {
        return;
      }

      data = new Uint8Array(analyserNode.fftSize);
      frameIndex = 0;
      restart = false;

      const loopGeneration = generation;
      requestAnimationFrame(() => analyserNodeCallback(loopGeneration));
    }

    function analyserNodeCallback(loopGeneration: number) {
      if (!analyserNode || loopGeneration !== generation) {
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
        requestAnimationFrame(() => analyserNodeCallback(loopGeneration));
      }
    }

    // `MeetingManager` publishes the selected audio input after every successful start, including a
    // restart of the same device (for example on rejoin, when `leave()` stopped the mic but kept the
    // selection), so attach to the newly started input each time.
    meetingManager?.subscribeToSelectedAudioInputDevice(initializePreview);

    initializePreview();

    return () => {
      isMounted = false;
      releaseAnalyser();
      meetingManager?.unsubscribeFromSelectedAudioInputDevice(
        initializePreview
      );
      deviceController.removeDeviceChangeObserver(deviceChangeObserver);
    };
  }, [deviceController, meetingManager, cb]);
};

export default useLocalAudioInputActivity;
