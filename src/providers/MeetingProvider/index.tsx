// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioInputDevice } from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import {
  DeviceControllerProvider,
  useDeviceController,
} from '../DeviceControllerProvider';
import { DevicesProvider } from '../DevicesProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { useLogger } from '../LoggerProvider';
import { MeetingEventProvider } from '../MeetingEventProvider';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { RosterProvider } from '../RosterProvider';
import MeetingManager from './MeetingManager';

interface Props {
  onDeviceReplacement?: (
    nextDevice: string,
    currentDevice: AudioInputDevice
  ) => Promise<AudioInputDevice>;
  /** Pass a `MeetingManager` instance if you want to share this instance
   * across multiple different `MeetingProvider`s. This approach has limitations.
   * Check `meetingManager` prop documentation for more information.
   */
  meetingManager?: MeetingManager;
  maxContentShares?: number;
  /**
   * Enables device setup before joining a meeting. When set, device enumeration, selection, camera
   * preview, the mic activity meter, and permission prompts work before `join()`, and the selected
   * devices persist across leaving and rejoining a meeting.
   */
  persistDeviceController?: boolean;
  /**
   * Whether to enable Web Audio. Must be enabled for Amazon Voice Focus. Applies when
   * `persistDeviceController` is set; decide it before mounting `MeetingProvider`, as it cannot be
   * changed afterward. Otherwise, pass `enableWebAudio` through `MeetingManager.join` options.
   */
  enableWebAudio?: boolean;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

// Renders below DeviceControllerProvider so it can read the hosted controller from context and
// build the MeetingManager with it (a component cannot read a context its own element provides).
const MeetingProviderInner: React.FC<React.PropsWithChildren<Props>> = ({
  onDeviceReplacement,
  meetingManager: meetingManagerProp,
  maxContentShares,
  children,
}) => {
  const logger = useLogger();
  const deviceController = useDeviceController();
  // `deviceController` is undefined unless `persistDeviceController` is set. A `meetingManager` prop
  // takes precedence.
  const [meetingManager] = useState(
    () => meetingManagerProp || new MeetingManager(logger, deviceController)
  );

  // A caller-supplied MeetingManager cannot receive the hosted controller, so the two options do not
  // combine. Warn rather than silently splitting device state between them.
  useEffect(() => {
    if (meetingManagerProp && deviceController) {
      logger.warn(
        'MeetingProvider: `persistDeviceController` has no effect when a `meetingManager` prop is ' +
          'also provided. Use one or the other.'
      );
    }
  }, [meetingManagerProp, deviceController, logger]);

  // Stop a still-active meeting if this provider unmounts without an explicit leave() (e.g. a route
  // change), so the session ends before the hosted controller is released. No-op when no meeting is
  // active; a caller-supplied manager is left for the caller to manage.
  useEffect(() => {
    return () => {
      if (!meetingManagerProp && meetingManager.meetingSession) {
        void meetingManager.leave();
      }
    };
  }, [meetingManager, meetingManagerProp]);

  return (
    <MeetingContext.Provider value={meetingManager}>
      <MeetingEventProvider>
        <AudioVideoProvider>
          <DevicesProvider onDeviceReplacement={onDeviceReplacement}>
            <RosterProvider>
              <RemoteVideoTileProvider>
                <LocalVideoProvider>
                  <LocalAudioOutputProvider>
                    <ContentShareProvider maxContentShares={maxContentShares}>
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

export const MeetingProvider: React.FC<React.PropsWithChildren<Props>> = ({
  persistDeviceController,
  enableWebAudio,
  children,
  ...rest
}) => (
  // DeviceControllerProvider is always mounted; it creates a controller only when enabled.
  <DeviceControllerProvider
    enabled={persistDeviceController}
    enableWebAudio={enableWebAudio}
  >
    <MeetingProviderInner {...rest}>{children}</MeetingProviderInner>
  </DeviceControllerProvider>
);

export const useMeetingManager = (): MeetingManager => {
  const meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error('useMeetingManager must be used within MeetingProvider');
  }

  return meetingManager;
};
