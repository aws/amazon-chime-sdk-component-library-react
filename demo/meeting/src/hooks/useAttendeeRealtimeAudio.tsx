import { useState, useContext, useEffect } from 'react';

import { MeetingContext, MeetingManager } from '../meeting/MeetingProvider';

export default function useAttendeeRealtimeAudio(attendeeId: string) {
  const [volume, setVolume] = useState<number>(0);
  const [muted, setMuted] = useState<boolean>(false);
  const [signalStrength, setSignalStrength] = useState<number>(0);
  const meetingManager: MeetingManager | null = useContext(MeetingContext);

  useEffect(() => {
    const callback = (
      _: string,
      volume: number | null,
      muted: boolean | null,
      signalStrength: number | null
    ): void => {
      if (volume !== null) {
        setVolume(Math.round(volume * 100));
      }
      if (muted !== null) {
        setMuted(muted);
      }
      if (signalStrength !== null) {
        setSignalStrength(Math.round(signalStrength * 100));
      }
    };
    meetingManager?.audioVideo?.realtimeSubscribeToVolumeIndicator(
      attendeeId,
      callback
    );

    return () => {
      meetingManager?.audioVideo?.realtimeUnsubscribeFromVolumeIndicator(attendeeId);
    };
  }, [attendeeId]);

  return {
    volume,
    muted,
    signalStrength,
  };
}
