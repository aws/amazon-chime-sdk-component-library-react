import { useState, useEffect } from 'react';
import { DefaultActiveSpeakerPolicy } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../providers/AudioVideoProvider';

export function useActiveSpeaker() {
  const audioVideo = useAudioVideo();
  const [activeSpeakerIds, setActiveSpeakerIds] = useState<string[]>([]);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const callback = (activeSpeakers: string[]): void => {
      setActiveSpeakerIds(activeSpeakers);
    };

    audioVideo.subscribeToActiveSpeakerDetector(
      new DefaultActiveSpeakerPolicy(),
      callback
    );

    return () => audioVideo.unsubscribeFromActiveSpeakerDetector(callback);
  }, [audioVideo]);

  return activeSpeakerIds;
}

export default useActiveSpeaker;
