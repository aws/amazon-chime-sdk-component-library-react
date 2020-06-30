import { useState, useContext, useEffect } from 'react';

import { MeetingContext, MeetingManager } from '../providers/MeetingProvider';

export default function useAttendeeRealtimeAudio(attendeeId: string) {
  const [muted, setMuted] = useState(false);
  const [signalStrength, setSignalStrength] = useState(0);
  const meetingManager: MeetingManager | null = useContext(MeetingContext);

  useEffect(() => {
    const callback = (
      _: string,
      __: number | null,
      muted: boolean | null,
      signalStrength: number | null
    ): void => {
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
      meetingManager?.audioVideo?.realtimeUnsubscribeFromVolumeIndicator(
        attendeeId
      );
    };
  }, [attendeeId]);

  return {
    muted,
    signalStrength
  };
}
