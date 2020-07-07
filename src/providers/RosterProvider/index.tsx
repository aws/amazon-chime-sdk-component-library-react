// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect, useRef, useContext } from 'react';
import { DefaultModality } from 'amazon-chime-sdk-js';

import { useMeetingManager } from '../MeetingProvider';
import { useAudioVideo } from '../AudioVideoProvider';

type RosterAttendeeType = {
  id: string;
  name: string;
};

type RosterType = {
  [attendeeId: string]: RosterAttendeeType;
};

const RosterContext = React.createContext<RosterType>({});

const RosterProvider: React.FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const rosterRef = useRef<RosterType>({});
  const [roster, setRoster] = useState<RosterType>({});

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

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

      const attendee = await meetingManager.getAttendeeInfo(attendeeId);
      if (!attendee) {
        return;
      }

      rosterRef.current[attendeeId] = attendee;

      setRoster(oldRoster => ({
        ...oldRoster,
        [attendeeId]: attendee
      }));
    };

    audioVideo.realtimeSubscribeToAttendeeIdPresence(rosterUpdateCallback);

    return () => {
      setRoster({});
      audioVideo.realtimeUnsubscribeToAttendeeIdPresence(rosterUpdateCallback);
    };

  }, [audioVideo]);

  return (
    <RosterContext.Provider value={roster}>{children}</RosterContext.Provider>
  );
};

function useRoster() {
  const roster = useContext(RosterContext);

  return roster;
}

export { RosterProvider, useRoster };
