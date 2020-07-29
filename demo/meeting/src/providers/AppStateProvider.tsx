// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useState, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

interface AppStateValue {
  meetingId: string;
  localUserName: string;
  theme: string;
  region: string;
  toggleTheme: () => void;
  setMeeting: (meetingId: string) => void;
  setLocalName: (name: string) => void;
  setRegion: (region: string) => void;
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
  const [meetingId, setMeeting] = useState('');
  const [region, setRegion] = useState('us-east-1');
  const [localUserName, setLocalName] = useState('');
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light';
  });

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const providerValue = {
    meetingId,
    localUserName,
    theme,
    region,
    toggleTheme,
    setLocalName,
    setMeeting,
    setRegion
  };

  return (
    <AppStateContext.Provider value={providerValue}>
      {children}
    </AppStateContext.Provider>
  );
}
