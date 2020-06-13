import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  Context,
} from 'react';

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
  const [roster, setRoster] = useState<RosterType>({});
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const { meetingStatus } = useContext(getMeetingStatusContext());
  useEffect(() => {
    const callback = (updatedRoster: RosterType): void => {
      setRoster({ ...updatedRoster });
    };

    meetingManager?.subscribeToRosterUpdate(callback);

    return (): void => {
      meetingManager?.unsubscribeFromRosterUpdate(callback);
    };
  }, [meetingStatus]);

  return (
    <RosterContext.Provider value={roster}>{children}</RosterContext.Provider>
  );
}
