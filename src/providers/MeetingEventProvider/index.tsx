// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { EventAttributes, EventName } from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useMeetingManager } from '../MeetingProvider';

type MeetingEventProviderContextType =
  | {
      name: EventName;
      attributes: EventAttributes;
    }
  | undefined;

export const MeetingEventProviderContext =
  createContext<MeetingEventProviderContextType>(undefined);

const MeetingEventProvider: React.FC = ({ children }) => {
  const [meetingEvent, setMeetingEvent] =
    useState<MeetingEventProviderContextType>();
  const meetingManager = useMeetingManager();

  useEffect(() => {
    function meetingEventUpdateCallback(
      name: EventName,
      attributes: EventAttributes
    ): void {
      setMeetingEvent({ name, attributes });
    }

    meetingManager.subscribeToEventDidReceive(meetingEventUpdateCallback);

    return () => {
      meetingManager.unsubscribeFromEventDidReceive(meetingEventUpdateCallback);
    };
  }, []);

  return (
    <MeetingEventProviderContext.Provider value={meetingEvent}>
      {children}
    </MeetingEventProviderContext.Provider>
  );
};

const useMeetingEvent = (): MeetingEventProviderContextType => {
  const meetingEvent = useContext(MeetingEventProviderContext);
  return meetingEvent;
};

export { useMeetingEvent, MeetingEventProvider };
