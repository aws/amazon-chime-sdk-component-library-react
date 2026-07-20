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
   * Opt in to creating and persisting the device controller independently of a meeting. When `true`,
   * `MeetingProvider` creates and owns a `DefaultDeviceController` on mount (via an internal
   * `DeviceControllerProvider`) and injects it into the `MeetingManager`, so device setup (enumerate
   * / select / preview / mic meter / permission prompt) works before `join()` and the controller —
   * along with the device selections — persists across `leave()`/rejoin instead of being destroyed.
   * When unset, behavior is unchanged: the `MeetingManager` creates its own controller inside
   * `join()` and destroys it on `leave()`, as before.
   */
  persistDeviceController?: boolean;
  /**
   * Enable Web Audio on the hosted `DefaultDeviceController`. Required for Amazon Voice Focus. Only
   * used when `persistDeviceController` is set (it is a constructor-only option, so it must be known when
   * the controller is created on mount — decide Voice Focus up front). On the non-opted-in path,
   * pass `enableWebAudio` through `MeetingManager.join` options as before.
   */
  enableWebAudio?: boolean;
}

export const MeetingContext = createContext<MeetingManager | null>(null);

/**
 * Renders inside `DeviceControllerProvider` so it can read the (possibly undefined) hosted
 * controller and construct the `MeetingManager` with it. Splitting this out is required because the
 * controller must exist in context before the manager is created — a component cannot read a context
 * that an ancestor in the *same* element provides.
 */
const MeetingProviderInner: React.FC<React.PropsWithChildren<Props>> = ({
  onDeviceReplacement,
  meetingManager: meetingManagerProp,
  maxContentShares,
  children,
}) => {
  const logger = useLogger();
  const deviceController = useDeviceController();
  // Construct once. `deviceController` is already resolved here (this renders below
  // DeviceControllerProvider); it is `undefined` when the app did not opt in, which makes the
  // manager behave exactly as before. An explicit `meetingManager` prop still takes precedence.
  const [meetingManager] = useState(
    () => meetingManagerProp || new MeetingManager(logger, deviceController)
  );

  // A caller-supplied `meetingManager` is constructed by the caller with no device controller, so it
  // cannot receive the hosted one created here — the two features don't compose. Warn rather than
  // silently split device state (the hosted controller feeds the device UI while the custom
  // manager's own device methods no-op pre-meeting).
  useEffect(() => {
    if (meetingManagerProp && deviceController) {
      logger.warn(
        'MeetingProvider: `persistDeviceController` has no effect when a `meetingManager` prop is ' +
          'also provided — the hosted device controller cannot be injected into a caller-owned ' +
          'MeetingManager. Use one or the other.'
      );
    }
  }, [meetingManagerProp, deviceController, logger]);

  // If the app unmounts MeetingProvider while a meeting is still live without calling leave()
  // (e.g. a route change), stop the session cleanly here. This matters specifically on the opted-in
  // path: DeviceControllerProvider (our parent, so its cleanup runs AFTER this child's) will
  // destroy() the shared controller on unmount, which would otherwise tear the mic/camera out from
  // under a still-connected session. Running leave() first stops the session properly. No-op when
  // there is no active meeting (meetingSession is null pre-meeting / after a prior leave), so this
  // does not interfere with the pre-meeting or StrictMode cases. Not done for a caller-supplied
  // manager — its lifecycle is the caller's responsibility.
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
  // Always mount DeviceControllerProvider; when not opted in it creates no controller and provides
  // `undefined`, so MeetingProviderInner constructs the MeetingManager exactly as before.
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
