// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useState, useContext, useEffect } from 'react';
import { EventName, EventAttributes } from 'amazon-chime-sdk-js';

import { useMeetingManager } from '../MeetingProvider';

export type MeetingEventProviderContextType = {
  name: EventName;
  attributes: EventAttributes;
} | undefined;

export const MeetingEventProviderContext = createContext<MeetingEventProviderContextType>(undefined);

const MeetingEventProvider: React.FC = ({ children }) => {
  const [eventData, setEventData] = useState<MeetingEventProviderContextType>();
  const meetingManager = useMeetingManager();

  useEffect(() => {
    function eventDataUpdateCb(name: EventName, attributes: EventAttributes) {
      setEventData({name, attributes});
    }

    meetingManager.subscribeToEventDidReceive(eventDataUpdateCb);

    return () => {
      meetingManager.unsubscribeFromEventDidReceive(eventDataUpdateCb);
    };
  }, []);

  return (
    <MeetingEventProviderContext.Provider value={eventData}>
      {children}
    </MeetingEventProviderContext.Provider>
  );
};

const useMeetingEventData = (): MeetingEventProviderContextType => {
  const eventData = useContext(MeetingEventProviderContext);
  return eventData;
};

export { useMeetingEventData, MeetingEventProvider };
