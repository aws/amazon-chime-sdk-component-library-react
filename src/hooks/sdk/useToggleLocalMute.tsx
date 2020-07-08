// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState, useCallback } from 'react';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

export function useToggleLocalMute() {
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

export default useToggleLocalMute;