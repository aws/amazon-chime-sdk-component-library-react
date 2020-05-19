import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import {
  VideoTileState,
} from 'amazon-chime-sdk-js';

import { MeetingManager, MeetingContext } from './MeetingProvider';

enum MeetingStatus {
  Loading,
  Succeeded,
  Failed,
  Ended,
}

type MeetingContext = {
  meetingStatus: MeetingStatus;
  errorMessage?: string;
  attendeeIdToTileId?: Map<string, number>;
}

type Props = {
  children: ReactNode;
  joinMuted?: boolean;
  joinWithVideo?: boolean;
}

const MeetingStatusContext = createContext<MeetingContext>({ meetingStatus: MeetingStatus.Loading });

export default function MeetingStatusProvider(props: Props) {
  const meetingManager: MeetingManager | null = useContext(MeetingContext);
  const meetingId = meetingManager?.meetingId;
  const [meetingStatus, setMeetingStatus] = useState<MeetingContext>({ meetingStatus: MeetingStatus.Loading });
  // const { children, joinMuted, joinWithVideo } = props;
  const { children } = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  // const attendeeIdToTileId: Map<string, number> = new Map();


  useEffect(() => {
    const audioVideoDidStart = () => {
      console.log('Observer audioVideoDidStart');
    };

    const videoTileDidUpdate = (tileState: VideoTileState) => {
      console.log("Observer videoTileDidUpdate", tileState);
      if (!tileState.boundAttendeeId) {
        return;
      }
      if (tileState ?.boundAttendeeId && tileState ?.tileId) {
        // attendeeIdToTileId.set(tileState.boundAttendeeId, tileState.tileId!);
        // tileIdToAttendeeId.set(tileState.tileId, tileState.boundAttendeeId);
        setMeetingStatus({
          meetingStatus: MeetingStatus.Succeeded,
          // attendeeIdToTileId,
        });
      }
    };
    
    const videoTileWasRemoved = (tileId: number) => {
      console.log("Observer videoTileWasRemoved", tileId);
      setMeetingStatus({
        meetingStatus: MeetingStatus.Succeeded,
        // attendeeIdToTileId,
      });
    };
    const observers = { videoTileDidUpdate, audioVideoDidStart, videoTileWasRemoved };
    setMeetingStatus({
      meetingStatus: MeetingStatus.Succeeded,
    });

    if (!meetingManager || !meetingManager.audioVideo) {
      return;
    }
    meetingManager.addObserver(observers);

    return () => {
      setMeetingStatus({ meetingStatus: MeetingStatus.Ended });
      meetingManager.removeObserver(observers);
    };
  }, [meetingId]);

  return (
    <MeetingStatusContext.Provider value={meetingStatus}>
      <audio ref={audioRef} style={{ display: 'none' }} />
      {children}
    </MeetingStatusContext.Provider>
  );
}
