// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, useContext, useState, createContext } from 'react';

import { useMeetingManager } from '../MeetingProvider';
import {
  useAudioInputs,
  useAudioOutputs,
  useVideoInputs
} from '../DevicesProvider';
import AppCheckerManager from './AppCheckerManager';

export const AppCheckerContext = createContext<AppCheckerManager | null>(null);

export const AppCheckerProvider: FC = ({ children }) => {
  const meetingManager = useMeetingManager();
  const selectedAudioInputDevice = useAudioInputs().selectedDevice;
  const selectedAudioOutputDevice = useAudioOutputs().selectedDevice;
  const selectedVideoInputDevice = useVideoInputs().selectedDevice;
  const [meetingReadinessChecker] = useState<AppCheckerManager>(
    () => new AppCheckerManager(
      meetingManager,
      selectedAudioInputDevice!,
      selectedAudioOutputDevice!,
      selectedVideoInputDevice!,
    ));

  return (
    <AppCheckerContext.Provider value={meetingReadinessChecker}>
      {children}
    </AppCheckerContext.Provider>
  );
}

export const useAppCheckerManager = (): AppCheckerManager => {
  const appCheckerManager = useContext(AppCheckerContext);

  if (!appCheckerManager) {
    throw new Error(
      'useAppCheckerManager must be used within AppCheckerManagerProvider'
    );
  }

  return appCheckerManager;
}
