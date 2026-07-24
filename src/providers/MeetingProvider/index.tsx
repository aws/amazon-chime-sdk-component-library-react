// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioInputDevice, EventController } from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import {
  DeviceControllerProvider,
  useHostedDeviceController,
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
   * `persistDeviceController` is set. Changing it re-creates the device controller (ending any active
   * meeting), so prefer to set it before joining. Otherwise, pass `enableWebAudio` through
   * `MeetingManager.join` options.
   */
  enableWebAudio?: boolean;
  /**
   * An optional event controller for reporting device events before a meeting. Applies when
   * `persistDeviceController` is set. The meeting session reuses it on join, so device events report
   * to one place across pre-meeting and in-meeting. When unset, the session creates its own on join.
   */
  eventController?: EventController;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

const MeetingProviderInner: React.FC<React.PropsWithChildren<Props>> = ({
  onDeviceReplacement,
  meetingManager: meetingManagerProp,
  maxContentShares,
  children,
}) => {
  const logger = useLogger();
  const deviceController = useHostedDeviceController();
  const [meetingManager] = useState(
    () => meetingManagerProp || new MeetingManager(logger, deviceController)
  );

  useEffect(() => {
    if (meetingManagerProp && deviceController) {
      logger.warn(
        'MeetingProvider: `persistDeviceController` has no effect when a `meetingManager` prop is ' +
          'also provided. Use one or the other.'
      );
    }
  }, [meetingManagerProp, deviceController, logger]);

  useEffect(() => {
    return () => {
      if (!meetingManagerProp) {
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
  eventController,
  children,
  ...rest
}) => {
  // Remount the device controller subtree when these creation-time props change, so a new controller
  // is created with the new value. Booleans keep unset and false equivalent. Remounting ends any
  // active meeting.
  const persist = Boolean(persistDeviceController);
  const webAudio = Boolean(enableWebAudio);
  const deviceControllerKey = `persist:${persist}-webAudio:${webAudio}`;

  return (
    <DeviceControllerProvider
      key={deviceControllerKey}
      persistDeviceController={persistDeviceController}
      enableWebAudio={enableWebAudio}
      eventController={eventController}
    >
      <MeetingProviderInner {...rest}>{children}</MeetingProviderInner>
    </DeviceControllerProvider>
  );
};

export const useMeetingManager = (): MeetingManager => {
  const meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error('useMeetingManager must be used within MeetingProvider');
  }

  return meetingManager;
};
