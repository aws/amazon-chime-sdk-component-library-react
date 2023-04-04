// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DefaultModality } from 'amazon-chime-sdk-js';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';

import { RosterAttendeeType, RosterType } from '../../types';
import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';

interface RosterContextValue {
  roster: RosterType;
}

const RosterContext = React.createContext<RosterContextValue | null>(null);

const RosterProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const rosterRef = useRef<RosterType>({});
  const [roster, setRoster] = useState<RosterType>({});

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const rosterUpdateCallback = async (
      chimeAttendeeId: string,
      present: boolean,
      externalUserId?: string
    ): Promise<void> => {
      if (!present) {
        delete rosterRef.current[chimeAttendeeId];

        setRoster((currentRoster: RosterType) => {
          const { [chimeAttendeeId]: _, ...rest } = currentRoster;
          return { ...rest };
        });

        return;
      }

      const attendeeId = new DefaultModality(chimeAttendeeId).base();
      if (attendeeId !== chimeAttendeeId) {
        return;
      }

      const inRoster = rosterRef.current[chimeAttendeeId];
      if (inRoster) {
        return;
      }

      let attendee: RosterAttendeeType = { chimeAttendeeId };

      if (externalUserId) {
        attendee.externalUserId = externalUserId;
      }

      rosterRef.current[attendeeId] = attendee;

      // Update the roster first before waiting to fetch attendee info
      setRoster((oldRoster) => ({
        ...oldRoster,
        [attendeeId]: attendee,
      }));

      if (meetingManager.getAttendee) {
        const externalData = await meetingManager.getAttendee(
          attendeeId,
          externalUserId
        );

        // Make sure that the attendee is still on the roster
        if (!rosterRef.current[attendeeId]) {
          return;
        }
        attendee = { ...attendee, ...externalData };
        setRoster((oldRoster) => ({
          ...oldRoster,
          [attendeeId]: attendee,
        }));
      }
    };

    audioVideo.realtimeSubscribeToAttendeeIdPresence(rosterUpdateCallback);

    return () => {
      setRoster({});
      rosterRef.current = {};
      audioVideo.realtimeUnsubscribeToAttendeeIdPresence(rosterUpdateCallback);
    };
  }, [audioVideo]);

  const value = useMemo(
    () => ({
      roster,
    }),
    [roster]
  );

  return (
    <RosterContext.Provider value={value}>{children}</RosterContext.Provider>
  );
};

function useRosterState(): RosterContextValue {
  const state = useContext(RosterContext);

  if (!state) {
    throw new Error('userRosterState must be used within RosterProvider');
  }

  return state;
}

export { RosterProvider, useRosterState };
