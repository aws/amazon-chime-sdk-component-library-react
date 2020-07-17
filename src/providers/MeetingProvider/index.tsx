// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useState, createContext } from 'react';

import MeetingManager from './MeetingManager';
import { AudioVideoProvider } from '../AudioVideoProvider';
import { RosterProvider } from '../RosterProvider';
import { DevicesProvider } from '../DevicesProvider';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { ActiveSpeakersProvider } from '../ActiveSpeakersProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { MeetingStatusProvider } from '../MeetingStatusProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { ContentShareProvider } from '../ContentShareProvider';

export const MeetingContext = createContext<MeetingManager | null>(null);

export const MeetingProvider: React.FC = ({ children }) => {
  const [meetingManager] = useState(() => new MeetingManager());

  return (
    <MeetingContext.Provider value={meetingManager}>
      <AudioVideoProvider>
        <DevicesProvider>
          <RosterProvider>
            <RemoteVideoTileProvider>
              <LocalVideoProvider>
                <MeetingStatusProvider>
                  <LocalAudioOutputProvider>
                    <ContentShareProvider>
                      <ActiveSpeakersProvider>
                        <FeaturedVideoTileProvider>
                          {children}
                        </FeaturedVideoTileProvider>
                      </ActiveSpeakersProvider>
                    </ContentShareProvider>
                  </LocalAudioOutputProvider>
                </MeetingStatusProvider>
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
