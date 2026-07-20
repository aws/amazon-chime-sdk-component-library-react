// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DefaultDeviceController } from 'amazon-chime-sdk-js';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useLogger } from '../LoggerProvider';

interface Props {
  /**
   * When set, creates a device controller on mount so device setup works before joining a meeting.
   * When unset, no controller is created and {@link useDeviceController} returns `undefined`.
   * `MeetingProvider` sets this from its `persistDeviceController` prop.
   */
  enabled?: boolean;
  /**
   * Whether to enable Web Audio. Must be enabled for Amazon Voice Focus. Decide it before mounting,
   * as it is fixed when the controller is created and cannot be changed afterward.
   */
  enableWebAudio?: boolean;
}

const DeviceControllerContext = createContext<
  DefaultDeviceController | undefined
>(undefined);

/**
 * Provides a device controller whose lifecycle is independent of a meeting, so device setup can work
 * before one is joined. `MeetingProvider` mounts this internally; set its `persistDeviceController`
 * prop to enable it. When not enabled, {@link useDeviceController} returns `undefined`.
 */
export const DeviceControllerProvider: React.FC<
  React.PropsWithChildren<Props>
> = ({ enabled, enableWebAudio, children }) => {
  const logger = useLogger();

  // The controller is created once and its configuration is fixed for the provider's lifetime.
  const [deviceController] = useState<DefaultDeviceController | undefined>(() =>
    enabled
      ? new DefaultDeviceController(logger, { enableWebAudio })
      : undefined
  );

  // These props are read only when the controller is created, so warn if they change afterward,
  // since the change has no effect.
  const initialProps = useRef({ enabled, enableWebAudio });
  useEffect(() => {
    if (
      initialProps.current.enabled !== enabled ||
      initialProps.current.enableWebAudio !== enableWebAudio
    ) {
      logger.warn(
        'DeviceControllerProvider: `persistDeviceController`/`enableWebAudio` changed after mount ' +
          'and were ignored. Decide these before mounting MeetingProvider.'
      );
    }
  }, [enabled, enableWebAudio, logger]);

  // Destroy the controller on unmount. A still-active meeting is stopped first by MeetingProviderInner
  // (its cleanup runs before this one). Swallow rejections since a cleanup cannot await.
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
    <DeviceControllerContext.Provider value={deviceController}>
      {children}
    </DeviceControllerContext.Provider>
  );
};

/**
 * Returns the device controller for use before a meeting, or `undefined` when
 * `persistDeviceController` is not set on `MeetingProvider`. Does not throw when absent.
 */
export const useDeviceController = (): DefaultDeviceController | undefined => {
  return useContext(DeviceControllerContext);
};

export default DeviceControllerProvider;
