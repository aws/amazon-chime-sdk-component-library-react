// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useState, createContext } from 'react';

import MeetingManager from './MeetingManager';
import { AudioVideoProvider } from '../AudioVideoProvider';
import { RosterProvider } from '../RosterProvider';
import { DevicesProvider } from '../DevicesProvider';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import { LogLevel } from 'amazon-chime-sdk-js';

interface Props {
  /** Log level defined by the Loglevel enum in amazon-chime-sdk-js */
  logLevel?: LogLevel;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

export const MeetingProvider: React.FC<Props> = ({ children, logLevel = LogLevel.WARN }) => {
  const [meetingManager] = useState(() => new MeetingManager(logLevel));

  return (
    <MeetingContext.Provider value={meetingManager}>
      <AudioVideoProvider>
        <DevicesProvider>
          <RosterProvider>
            <RemoteVideoTileProvider>
              <LocalVideoProvider>
                <LocalAudioOutputProvider>
                  <ContentShareProvider>
                    <FeaturedVideoTileProvider>
                      {children}
                    </FeaturedVideoTileProvider>
                  </ContentShareProvider>
                </LocalAudioOutputProvider>
              </LocalVideoProvider>
            </RemoteVideoTileProvider>
          </RosterProvider>
        </DevicesProvider>
      </AudioVideoProvider>
    </MeetingContext.Provider>
  );
};

export const useMeetingManager = (): MeetingManager => {
  const meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error('useMeetingManager must be used within MeetingProvider');
  }

  return meetingManager;
};
