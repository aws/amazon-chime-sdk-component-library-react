import { useEffect, useState, useCallback } from 'react';

import { useAudioVideo } from '../../../../src';

export default function useToggleLocalMute() {
  const audioVideo = useAudioVideo();
  const [muted, setMuted] = useState<boolean>(
    () => audioVideo?.realtimeIsLocalAudioMuted() || false
  );

  useEffect(() => {
    const muteUnmutecallback = (localMuted: boolean): void => {
      setMuted(localMuted);
    };

    audioVideo?.realtimeSubscribeToMuteAndUnmuteLocalAudio(muteUnmutecallback);

    return (): void => {
      audioVideo?.realtimeUnsubscribeToMuteAndUnmuteLocalAudio(muteUnmutecallback);
    };
  }, [audioVideo]);

  const toggleMute = useCallback(() => {
    if (muted) {
      audioVideo?.realtimeUnmuteLocalAudio();
    } else {
      audioVideo?.realtimeMuteLocalAudio();
    }
  }, [muted]);

  return { muted, toggleMute };
}
