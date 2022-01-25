// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  ActiveSpeakerPolicy,
  AudioTransformDevice,
  Device,
  Logger,
  LogLevel,
  VideoDownlinkBandwidthPolicy,
  VideoUplinkBandwidthPolicy,
} from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useState } from 'react';

import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import { DevicesProvider } from '../DevicesProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { MeetingEventProvider } from '../MeetingEventProvider';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { RosterProvider } from '../RosterProvider';
import MeetingManager from './MeetingManager';
import { PostLogConfig } from './types';

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
  /** Determines how to handle the current audio input device when devices
   *  change in `AudioInputProvider`.
   */
  onDeviceReplacement?: (
    nextDevice: string,
    currentDevice: Device | AudioTransformDevice
  ) => Promise<Device | AudioTransformDevice>;
  /**
   * The [VideoDownlinkBandwidthPolicy](https://aws.github.io/amazon-chime-sdk-js/interfaces/videodownlinkbandwidthpolicy.html) object you want to use in the meeting session
   *
   */
  videoDownlinkBandwidthPolicy?: VideoDownlinkBandwidthPolicy;
  /**
   * The [VideoUplinkBandwidthPolicy](https://aws.github.io/amazon-chime-sdk-js/interfaces/videouplinkbandwidthpolicy.html) object you want to use in the meeting session
   */
  videoUplinkBandwidthPolicy?: VideoUplinkBandwidthPolicy;
  /**
   * The [ActiveSpeakerPolicy](https://aws.github.io/amazon-chime-sdk-js/interfaces/activespeakerpolicy.html) object that you want to use in the meeting session.
   */
  activeSpeakerPolicy?: ActiveSpeakerPolicy;
  /**
   * Maximum amount of time in milliseconds to allow for reconnecting. Default is 120 seconds. [Refer to the documentation.](https://aws.github.io/amazon-chime-sdk-js/classes/meetingsessionconfiguration.html#reconnecttimeoutms)
   */
  reconnectTimeoutMs?: number;
  /**
   * Keep the last frame of the video when a remote video is paused via the pauseVideoTile API.
   */
  keepLastFrameWhenPaused?: boolean;
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
  onDeviceReplacement,
  videoDownlinkBandwidthPolicy,
  videoUplinkBandwidthPolicy,
  reconnectTimeoutMs,
  activeSpeakerPolicy,
  keepLastFrameWhenPaused,
  meetingManager: meetingManagerProp,
  children,
}) => {
  const [meetingManager] = useState(
    () =>
      meetingManagerProp ||
      new MeetingManager({
        logLevel,
        postLogConfig,
        simulcastEnabled,
        enableWebAudio,
        logger,
        videoDownlinkBandwidthPolicy,
        videoUplinkBandwidthPolicy,
        reconnectTimeoutMs,
        keepLastFrameWhenPaused,
        activeSpeakerPolicy,
      })
  );

  return (
    <MeetingContext.Provider value={meetingManager}>
      <MeetingEventProvider>
        <AudioVideoProvider>
          <DevicesProvider onDeviceReplacement={onDeviceReplacement}>
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
