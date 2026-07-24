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

interface Props {
  /**
   * When set, creates a device controller on mount so device setup works before joining a meeting.
   * When unset, no controller is created and {@link useDeviceController} returns `undefined` until a
   * meeting is joined. `MeetingProvider` sets this from its `persistDeviceController` prop.
   */
  persistDeviceController?: boolean;
  /**
   * Whether to enable Web Audio. Must be enabled for Amazon Voice Focus. Applied when the controller
   * is created; `MeetingProvider` remounts this provider if it changes, so the new value takes effect.
   */
  enableWebAudio?: boolean;
  /**
   * An optional event controller for the device controller to report device events before a meeting.
   * `MeetingProvider` sets this from its `eventController` prop.
   */
  eventController?: EventController;
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
> = ({ persistDeviceController, enableWebAudio, eventController, children }) => {
  const logger = useLogger();

  const [deviceController] = useState<DefaultDeviceController | undefined>(() =>
    persistDeviceController
      ? new DefaultDeviceController(
          logger,
          { enableWebAudio },
          undefined,
          eventController
        )
      : undefined
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
