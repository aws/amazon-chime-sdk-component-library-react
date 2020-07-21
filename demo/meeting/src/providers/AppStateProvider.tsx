// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useState, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

interface AppStateValue {
  meetingId: string;
  localUserName: string;
  setMeeting: (meetingId: string) => void;
  setLocalName: (name: string) => void;
}

const AppStateContext = React.createContext<AppStateValue | null>(null);

export function useAppState(): AppStateValue {
  const state = useContext(AppStateContext);

  if (!state) {
    throw new Error('useAppState must be used within AppStateProvider');
  }

  return state;
}

export function AppStateProvider({ children }: Props) {
  const [meetingId, setMeetingId] = useState('');
  const [localUserName, setLocalUserName] = useState('');

  const setMeeting = (meetingId: string): void => {
    setMeetingId(meetingId);
  };

  const setLocalName = (name: string): void => {
    setLocalUserName(name);
  };

  const providerValue = {
    meetingId,
    localUserName,
    setLocalName,
    setMeeting
  };

  return (
    <AppStateContext.Provider value={providerValue}>
      {children}
    </AppStateContext.Provider>
  );
}
