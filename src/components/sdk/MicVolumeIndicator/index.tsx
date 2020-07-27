import React, { useEffect, useRef } from 'react';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import MicIndicator from '../../ui/MicVolumeIndicator';
import useAttendeeAudioStatus from '../../../hooks/sdk/useAttendeeAudioStatus';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  attendeeId: string;
}

export const MicVolumeIndicator: React.FC<Props> = ({
  attendeeId,
  ...rest
}) => {
  const audioVideo = useAudioVideo();
  const bgEl = useRef<HTMLDivElement>(null);
  const { signalStrength, muted } = useAttendeeAudioStatus(attendeeId);

  useEffect(() => {
    if (!audioVideo || !attendeeId || !bgEl.current) {
      return;
    }

    audioVideo.realtimeSubscribeToVolumeIndicator(attendeeId, (_, volume) => {
      if (bgEl.current) {
        bgEl.current.style.transform = `scaleY(${volume})`;
      }
    });

    return () => audioVideo.realtimeUnsubscribeFromVolumeIndicator(attendeeId);
  }, [attendeeId]);

  return (
    <MicIndicator
      {...rest}
      ref={bgEl}
      muted={muted}
      signalStrength={signalStrength}
    />
  );
};

export default MicVolumeIndicator;
