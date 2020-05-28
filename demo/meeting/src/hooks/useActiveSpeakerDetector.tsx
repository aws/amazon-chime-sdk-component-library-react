import { useState, useContext, useEffect } from 'react';
import { DefaultActiveSpeakerPolicy } from 'amazon-chime-sdk-js';

import { MeetingContext, MeetingManager } from '../meeting/MeetingProvider';

export default function useActiveSpeakerDetector() {
  const [activeSpeakerAttendeeId, setActiveSpeakerAttendeeId] = useState<
    string
  >('');
  const meetingManager: MeetingManager | null = useContext(MeetingContext);

  useEffect(() => {
    const callback = (activeSpeakers: string[]): void => {
      if (activeSpeakers && activeSpeakers.length > 0) {
        setActiveSpeakerAttendeeId(activeSpeakers[0]);
      } else {
        setActiveSpeakerAttendeeId('');
      }
    };

    meetingManager?.audioVideo?.subscribeToActiveSpeakerDetector(
      new DefaultActiveSpeakerPolicy(),
      callback
    );

    return () => {
      meetingManager?.audioVideo?.unsubscribeFromActiveSpeakerDetector(
        callback
      );
    };
  });

  return activeSpeakerAttendeeId;
}
