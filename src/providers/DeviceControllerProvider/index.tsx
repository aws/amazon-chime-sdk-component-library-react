// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  DefaultDeviceController,
  DeviceController,
  EventController,
} from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useLogger } from '../LoggerProvider';
import { MeetingContext } from '../MeetingProvider';

/**
 * Configuration for the device controller created before a meeting. Mirrors the
 * `DefaultDeviceController` constructor parameters a builder may want to set.
 */
export interface DeviceControllerConfig {
  /** Whether to enable Web Audio. Must be enabled for Amazon Voice Focus. */
  enableWebAudio?: boolean;
  /** Whether to fall back to relaxed media constraints when the ideal constraints fail. */
  useMediaConstraintsFallback?: boolean;
  /** An event controller for the device controller to report device events before a meeting. */
  eventController?: EventController;
}

interface Props {
  /**
   * When set, creates a device controller on mount so device setup works before joining a meeting.
   * When unset, no controller is created and {@link useDeviceController} returns `undefined` until a
   * meeting is joined. `MeetingProvider` sets this from its `persistDeviceController` prop.
   */
  persistDeviceController?: boolean;
  /**
   * Configuration applied when the device controller is created. `MeetingProvider` sets this from its
   * `deviceControllerConfig` prop.
   */
  deviceControllerConfig?: DeviceControllerConfig;
}

const HostedDeviceControllerContext = createContext<
  DefaultDeviceController | undefined
>(undefined);

/**
 * Creates a device controller for use before a meeting, so device setup can work before one is
 * joined. `MeetingProvider` mounts this internally; set its `persistDeviceController` prop to enable
 * it. When not set, no controller is created.
 */
export const DeviceControllerProvider: React.FC<
  React.PropsWithChildren<Props>
> = ({ persistDeviceController, deviceControllerConfig, children }) => {
  const logger = useLogger();

  const [deviceController] = useState<DefaultDeviceController | undefined>(
    () => {
      if (!persistDeviceController) {
        return undefined;
      }
      const { eventController, ...options } = deviceControllerConfig ?? {};
      return new DefaultDeviceController(logger, options, undefined, eventController);
    }
  );

  useEffect(() => {
    return () => {
      void deviceController?.destroy().catch((error) => {
        logger.info(
          `DeviceControllerProvider failed to destroy controller: ${error}`
        );
      });
    };
  }, [deviceController, logger]);

  return (
    <HostedDeviceControllerContext.Provider value={deviceController}>
      {children}
    </HostedDeviceControllerContext.Provider>
  );
};

/**
 * The controller created for device setup before a meeting, or `undefined` when
 * `persistDeviceController` is not set.
 * `MeetingProvider` uses it to build the `MeetingManager`; not for general consumption.
 */
export const useHostedDeviceController = ():
  | DefaultDeviceController
  | undefined => {
  return useContext(HostedDeviceControllerContext);
};

/**
 * Returns the device controller for building custom device UIs, or `undefined` when no controller is
 * available (`persistDeviceController` is not set on `MeetingProvider` and no meeting has been joined).
 */
export const useDeviceController = (): DeviceController | undefined => {
  const meetingManager = useContext(MeetingContext);
  const [deviceController, setDeviceController] = useState<
    DeviceController | undefined
  >(meetingManager?.deviceController);

  useEffect(() => {
    if (!meetingManager) {
      return;
    }
    meetingManager.subscribeToDeviceController(setDeviceController);
    return () =>
      meetingManager.unsubscribeFromDeviceController(setDeviceController);
  }, [meetingManager]);

  return deviceController;
};

export default DeviceControllerProvider;
