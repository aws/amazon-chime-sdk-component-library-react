import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  ReactNode,
  Context,
} from 'react';
import { DefaultModality } from 'amazon-chime-sdk-js';

import { RosterType } from '../types';
import { MeetingManager, MeetingContext } from './MeetingProvider';
import { getMeetingStatusContext } from './MeetingStatusProvider';

type Props = {
  children: ReactNode;
};

const RosterContext = React.createContext<RosterType>({});

export function getRosterContext(): Context<RosterType> {
  return RosterContext;
}

export default function RosterProvider({ children }: Props) {
  const rosterRef = useRef<RosterType>({});
  const [roster, setRoster] = useState<RosterType>({});
  const { meetingStatus } = useContext(getMeetingStatusContext());
  const meetingManager: MeetingManager | null = useContext(MeetingContext);

  useEffect(() => {
    const rosterUpdateCallback = async (
      presentAttendeeId: string,
      present: boolean
    ): Promise<void> => {
      if (!present) {
        delete rosterRef.current[presentAttendeeId];

        setRoster((currentRoster: RosterType) => {
          const { [presentAttendeeId]: _, ...rest } = currentRoster;
          return { ...rest };
        });

        return;
      }

      const attendeeId = new DefaultModality(presentAttendeeId).base();
      if (attendeeId !== presentAttendeeId) {
        return;
      }

      const inRoster = rosterRef.current[presentAttendeeId];
      if (inRoster) {
        return;
      }

      const attendee = await meetingManager?.getAttendeeInfo(attendeeId);
      if (!attendee) {
        return;
      }

      rosterRef.current[attendeeId] = attendee;

      setRoster(oldRoster => ({
        ...oldRoster,
        [attendeeId]: attendee,
      }));
    };

    meetingManager?.audioVideo?.realtimeSubscribeToAttendeeIdPresence(
      rosterUpdateCallback
    );

    return () =>
      meetingManager?.audioVideo?.realtimeUnsubscribeToAttendeeIdPresence(
        rosterUpdateCallback
      );
  }, [meetingStatus]);

  return (
    <RosterContext.Provider value={roster}>{children}</RosterContext.Provider>
  );
}
