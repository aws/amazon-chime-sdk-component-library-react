// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useState, useContext, useEffect } from 'react';
import { EventName, EventAttributes } from 'amazon-chime-sdk-js';

import { useMeetingManager } from '../MeetingProvider';

type MeetingEventProviderContextType = {
  name: EventName;
  attributes: EventAttributes;
} | undefined;

export const MeetingEventProviderContext = createContext<MeetingEventProviderContextType>(undefined);

const MeetingEventProvider: React.FC = ({ children }) => {
  const [meetingEvent, setMeetingEvent] = useState<MeetingEventProviderContextType>();
  const meetingManager = useMeetingManager();

  useEffect(() => {
    function meetingEventUpdateCallback(name: EventName, attributes: EventAttributes) {
      setMeetingEvent({name, attributes});
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
