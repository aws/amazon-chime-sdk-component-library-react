// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  AudioInputDevice,
  DeviceControllerBasedMediaStreamBroker,
} from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
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
   * A device controller for device setup before joining a meeting. When provided, device enumeration,
   * selection, camera preview, the mic activity meter, and permission prompts work before `join()`, and
   * the same controller carries into the meeting so selected devices persist across leaving and
   * rejoining. Construct it (e.g. `new DefaultDeviceController(logger, { enableWebAudio })`) and destroy
   * it in your application; the library uses it but does not destroy a controller you pass.
   */
  deviceController?: DeviceControllerBasedMediaStreamBroker;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

export const MeetingProvider: React.FC<React.PropsWithChildren<Props>> = ({
  onDeviceReplacement,
  meetingManager: meetingManagerProp,
  maxContentShares,
  deviceController,
  children,
}) => {
  const logger = useLogger();
  const [meetingManager] = useState(
    () => meetingManagerProp || new MeetingManager(logger, deviceController)
  );

  useEffect(() => {
    if (meetingManagerProp && deviceController) {
      logger.warn(
        'MeetingProvider: `meetingManager` prop takes precedence; the `deviceController` prop is ' +
          'ignored when both are provided.'
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

export const useMeetingManager = (): MeetingManager => {
  const meetingManager = useContext(MeetingContext);

  if (!meetingManager) {
    throw new Error('useMeetingManager must be used within MeetingProvider');
  }

  return meetingManager;
};
