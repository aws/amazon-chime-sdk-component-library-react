// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  DefaultAudioMixController,
  TimeoutScheduler
} from 'amazon-chime-sdk-js';

class TestSound {
  constructor(
    sinkId: string | null,
    frequency = 440,
    durationSec = 1,
    rampSec = 0.1,
    maxGainValue = 0.1
  ) {
    // @ts-ignore
    const audioContext: AudioContext = new (window.AudioContext || window.webkitAudioContext)();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0;
    const oscillatorNode = audioContext.createOscillator();
    oscillatorNode.frequency.value = frequency;
    oscillatorNode.connect(gainNode);
    const destinationStream = audioContext.createMediaStreamDestination();
    gainNode.connect(destinationStream);
    const { currentTime } = audioContext;
    const startTime = currentTime + 0.1;
    gainNode.gain.linearRampToValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(maxGainValue, startTime + rampSec);
    gainNode.gain.linearRampToValueAtTime(
      maxGainValue,
      startTime + rampSec + durationSec
    );
    gainNode.gain.linearRampToValueAtTime(
      0,
      startTime + rampSec * 2 + durationSec
    );
    oscillatorNode.start();
    const audioMixController = new DefaultAudioMixController();

    const handlingBindingAsynchronous = async () => {
      if ('setSinkId' in HTMLAudioElement.prototype) {
        try {
          // @ts-ignore
          await audioMixController.bindAudioDevice({ deviceId: sinkId });
        } catch (e) {
          console.error('Failed to bind audio device', e);
        }
      }

      try {
        // @ts-ignore
        await audioMixController.bindAudioElement(new Audio());
      } catch (e) {
        console.error('Failed to bind audio element', e);
      }
    };

    handlingBindingAsynchronous();
    audioMixController.bindAudioStream(destinationStream.stream);
    new TimeoutScheduler((rampSec * 2 + durationSec + 1) * 1000).start(() => {
      audioContext.close();
    });
  }
}

export default TestSound;
