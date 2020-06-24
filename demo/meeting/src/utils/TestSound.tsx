import {
  DefaultAudioMixController,
  TimeoutScheduler,
} from 'amazon-chime-sdk-js';

class TestSound {
  constructor(
    sinkId: string | null,
    frequency: number = 440,
    durationSec: number = 1,
    rampSec: number = 0.1,
    maxGainValue: number = 0.1
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
    const currentTime = audioContext.currentTime;
    const startTime = currentTime + 0.1;
    gainNode.gain.linearRampToValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(maxGainValue, startTime + rampSec);
    gainNode.gain.linearRampToValueAtTime(maxGainValue, startTime + rampSec + durationSec);
    gainNode.gain.linearRampToValueAtTime(0, startTime + rampSec * 2 + durationSec);
    oscillatorNode.start();
    const audioMixController = new DefaultAudioMixController();
    // @ts-ignore
    audioMixController.bindAudioDevice({ deviceId: sinkId });
    audioMixController.bindAudioElement(new Audio());
    audioMixController.bindAudioStream(destinationStream.stream);
    new TimeoutScheduler((rampSec * 2 + durationSec + 1) * 1000).start(() => {
      audioContext.close();
    });
  }
}

export default TestSound;
