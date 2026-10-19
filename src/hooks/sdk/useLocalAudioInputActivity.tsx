// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import type {
  DeviceChangeObserver,
  RemovableAnalyserNode,
} from 'amazon-chime-sdk-js';
import { useContext, useEffect } from 'react';

import { useDeviceController } from './useDeviceController';
import { MeetingContext } from '../../providers/MeetingProvider';

export const useLocalAudioInputActivity = (cb: (decimal: number) => void) => {
  const deviceController = useDeviceController();
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
    let rafId = 0;

    const deviceChangeObserver: DeviceChangeObserver = {
      audioInputsChanged: () => {
        restart = true;
      },
    };
    deviceController.addDeviceChangeObserver(deviceChangeObserver);

    function initializePreview() {
      if (!deviceController || !isMounted) return;

      // Stop the current loop so only one loop reads the analyser.
      cancelAnimationFrame(rafId);
      analyserNode?.removeOriginalInputs?.();
      analyserNode = deviceController.createAnalyserNodeForAudioInput();

      if (!analyserNode?.getByteTimeDomainData) {
        return;
      }

      data = new Uint8Array(analyserNode.fftSize);
      frameIndex = 0;
      restart = false;

      rafId = requestAnimationFrame(analyserNodeCallback);
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
        rafId = requestAnimationFrame(analyserNodeCallback);
      }
    }

    // Published after every successful mic start, including a restart of the same device.
    meetingManager?.subscribeToSelectedAudioInputDevice(initializePreview);

    initializePreview();

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
      analyserNode?.removeOriginalInputs?.();
      meetingManager?.unsubscribeFromSelectedAudioInputDevice(
        initializePreview
      );
      deviceController.removeDeviceChangeObserver(deviceChangeObserver);
    };
  }, [deviceController, meetingManager, cb]);
};

export default useLocalAudioInputActivity;
