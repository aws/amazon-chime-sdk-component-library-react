// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useState, createContext, ReactNode } from 'react';
import { Logger, LogLevel, VideoDownlinkBandwidthPolicy } from 'amazon-chime-sdk-js';

import MeetingManager from './MeetingManager';
import { PostLogConfig } from './types';
import { AudioVideoProvider } from '../AudioVideoProvider';
import { RosterProvider } from '../RosterProvider';
import { DevicesProvider } from '../DevicesProvider';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import { MeetingEventProvider } from '../MeetingEventProvider';

interface Props {
  /** Determines how verbose the logging statements will be */
  logLevel?: LogLevel;
  /** Configuration for a MeetingSessionPOSTLogger */
  postLogConfig?: PostLogConfig;
  /** Whether or not to enable simulcast for the meeting session */
  simulcastEnabled?: boolean;
  /** The `Logger` object you want to use in meeting session.
   * If you pass in a `Logger` object using this parameter, 
   * the `MeetingManager` will use this object instead of creating a logger 
   * based on `logLevel` and `postLogConfig` to initialize the meeting session.
   */
  logger?: Logger;
  /** The `VideoDownlinkBandwidthPolicy` object you want to use in meeting session */
  videoDownlinkBandwidthPolicy?: VideoDownlinkBandwidthPolicy;
  /** Pass a `MeetingManager` instance if you want to share this instance 
   * across multiple different `MeetingProvider`s. This approach has limitations.
   * Check `meetingManager` prop documentation for more information.
   */
  meetingManager?: MeetingManager;
  /**
   * Whether or not to enable Amazon Chime SDK for JavaScript meeting events.
   */
  enableMeetingEvents?: boolean;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

export const MeetingProvider: React.FC<Props> = ({
  logLevel = LogLevel.WARN,
  postLogConfig,
  simulcastEnabled = false,
  logger,
  videoDownlinkBandwidthPolicy,
  meetingManager: meetingManagerProp,
  enableMeetingEvents = false,
  children,
}) => {
  const [meetingManager] = useState(
    () => meetingManagerProp || new MeetingManager({ logLevel, postLogConfig, simulcastEnabled, logger, videoDownlinkBandwidthPolicy })
  );

  const wrapProviders = (children: ReactNode) => 
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
    </AudioVideoProvider>;

  const wrapMeetingEventProvider = (children: ReactNode) => {
    const wrappedProviders = wrapProviders(children);
    if (enableMeetingEvents) {
      return (
        <MeetingEventProvider>
          {wrappedProviders}
        </MeetingEventProvider>
      );
    }
    return wrappedProviders;
  }

  return (
    <MeetingContext.Provider value={meetingManager}>
      {wrapMeetingEventProvider(children)}
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
