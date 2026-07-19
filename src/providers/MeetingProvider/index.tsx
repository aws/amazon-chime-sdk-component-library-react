// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createContext, useContext, useState } from 'react';

import { AudioVideoProvider } from '../AudioVideoProvider';
import { ContentShareProvider } from '../ContentShareProvider';
import { useDeviceManager } from '../DeviceProvider';
import { FeaturedVideoTileProvider } from '../FeaturedVideoTileProvider';
import { LocalAudioOutputProvider } from '../LocalAudioOutputProvider';
import { LocalVideoProvider } from '../LocalVideoProvider';
import { useLogger } from '../LoggerProvider';
import { MeetingEventProvider } from '../MeetingEventProvider';
import { RemoteVideoTileProvider } from '../RemoteVideoTileProvider';
import { RosterProvider } from '../RosterProvider';
import MeetingManager from './MeetingManager';

interface Props {
  /** Pass a `MeetingManager` instance if you want to share this instance
   * across multiple different `MeetingProvider`s. This approach has limitations.
   * Check `meetingManager` prop documentation for more information.
   */
  meetingManager?: MeetingManager;
  maxContentShares?: number;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

/**
 * `MeetingProvider` owns the session-only `MeetingManager`. It must be mounted **within** a
 * `DeviceProvider`: it borrows the device controller from the device layer
 * (`useDeviceManager().getController()`) and injects it into `MeetingManager`, which builds the
 * meeting session from it. Device UI/state now comes from `DeviceProvider` / `useDeviceManager`
 * (the `DevicesProvider` and `onDeviceReplacement` moved to the device layer), so `MeetingProvider`
 * no longer renders `DevicesProvider` or accepts `onDeviceReplacement`.
 */
export const MeetingProvider: React.FC<React.PropsWithChildren<Props>> = ({
  meetingManager: meetingManagerProp,
  maxContentShares,
  children,
}) => {
  const logger = useLogger();
  const deviceManager = useDeviceManager();
  const [meetingManager] = useState(
    () =>
      meetingManagerProp ||
      new MeetingManager(logger, {
        deviceController: deviceManager.getController(),
      })
  );

  return (
    <MeetingContext.Provider value={meetingManager}>
      <MeetingEventProvider>
        <AudioVideoProvider>
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
