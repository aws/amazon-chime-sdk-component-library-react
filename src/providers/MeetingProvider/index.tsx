// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioInputDevice } from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import {
  DeviceControllerConfig,
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
   * Configuration for the device controller created when `persistDeviceController` is set (e.g.
   * `enableWebAudio` for Amazon Voice Focus, or an `eventController` for pre-meeting device events).
   * Applied when the controller is created; changing it re-creates the controller (ending any active
   * meeting), so prefer to set it before joining.
   */
  deviceControllerConfig?: DeviceControllerConfig;
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
  deviceControllerConfig,
  children,
  ...rest
}) => {
  // Recreate the device controller when a create-time setting changes by remounting this subtree under
  // a new key, which also ends any active meeting. Unset and false produce the same key. Only the
  // boolean settings are keyed; `eventController` is an object reference applied once at creation, so a
  // change to it alone does not recreate the controller.
  const persist = Boolean(persistDeviceController);
  const webAudio = Boolean(deviceControllerConfig?.enableWebAudio);
  const mediaFallback = Boolean(deviceControllerConfig?.useMediaConstraintsFallback);
  const deviceControllerKey = `persist:${persist}-webAudio:${webAudio}-mediaFallback:${mediaFallback}`;

  return (
    <DeviceControllerProvider
      key={deviceControllerKey}
      persistDeviceController={persistDeviceController}
      deviceControllerConfig={deviceControllerConfig}
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
