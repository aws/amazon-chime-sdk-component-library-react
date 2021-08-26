// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useContext, useState, createContext } from 'react';
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
  /** Whether or not to enable Web Audio for the meeting session */
  enableWebAudio?: boolean;
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
}

export const MeetingContext = createContext<MeetingManager | null>(null);

export const MeetingProvider: React.FC<Props> = ({
  logLevel = LogLevel.WARN,
  postLogConfig,
  simulcastEnabled = false,
  enableWebAudio = false,
  logger,
  videoDownlinkBandwidthPolicy,
  meetingManager: meetingManagerProp,
  children,
}) => {
  const [meetingManager] = useState(
    () => meetingManagerProp || new MeetingManager({ logLevel, postLogConfig, simulcastEnabled, enableWebAudio, logger, videoDownlinkBandwidthPolicy })
  );

  return (
    <MeetingContext.Provider value={meetingManager}>
      <MeetingEventProvider>
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
      </MeetingEventProvider>
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
