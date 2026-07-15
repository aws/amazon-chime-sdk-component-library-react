// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useLogger } from '../LoggerProvider';
import { DeviceManager, OnDeviceReplacement } from './DeviceManager';

interface Props {
  /**
   * Enable Web Audio on the underlying `DefaultDeviceController`. Required for Amazon Voice Focus.
   * This is a **constructor-only** option in the JS SDK, so it is fixed when `DeviceProvider` mounts
   * and is not re-read afterward — decide it up front (e.g. after the user's Voice Focus choice, then
   * mount `DeviceProvider`).
   */
  enableWebAudio?: boolean;
  /**
   * Callback that decides which device to select when the current audio input is lost / replaced.
   * Relocated here from `MeetingProvider`. It is kept **live**: if this prop changes, the update is
   * pushed into the `DeviceManager` (see the effect below), so a changed callback is honored rather
   * than the value captured when the manager was first created.
   */
  onDeviceReplacement?: OnDeviceReplacement;
}

const DeviceContext = createContext<DeviceManager | null>(null);

/**
 * `DeviceProvider` owns a standalone {@link DeviceManager} (and, through it, a
 * `DefaultDeviceController`) whose lifecycle is independent of any meeting. Mounted **above**
 * `MeetingProvider`, it lets an application enumerate, select, and preview devices — and run a
 * mic-level meter — before a meeting exists, and reuse that device state across meetings.
 *
 * Scope note (implementation order): this provider intentionally does **not** render `DevicesProvider`
 * yet. `DevicesProvider`'s children currently read `MeetingManager`, so hosting them here before they
 * are re-pointed to `useDeviceManager()` would either throw with no `MeetingProvider` in scope or
 * double-mount alongside `MeetingProvider`'s own `DevicesProvider`. Composition moves here once the
 * consumers are re-pointed and `MeetingProvider` stops rendering `DevicesProvider`. Until then,
 * mounting `DeviceProvider` is purely additive and changes no existing behavior.
 */
export const DeviceProvider: React.FC<React.PropsWithChildren<Props>> = ({
  enableWebAudio,
  onDeviceReplacement,
  children,
}) => {
  const logger = useLogger();
  const [deviceManager] = useState(
    () => new DeviceManager(logger, { enableWebAudio, onDeviceReplacement })
  );

  // Keep the replacement callback live: push prop changes into the manager rather than relying on
  // the value captured when the manager was created (the manager is created once, above).
  useEffect(() => {
    deviceManager.setOnDeviceReplacement(onDeviceReplacement);
  }, [deviceManager, onDeviceReplacement]);

  // DeviceProvider owns the controller's lifecycle → release media (stop mic/camera) on unmount.
  // The controller instance itself is not destroyed; it stays reusable.
  useEffect(() => {
    return () => {
      void deviceManager.releaseMedia();
    };
  }, [deviceManager]);

  return (
    <DeviceContext.Provider value={deviceManager}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDeviceManager = (): DeviceManager => {
  const deviceManager = useContext(DeviceContext);

  if (!deviceManager) {
    throw new Error('useDeviceManager must be used within DeviceProvider');
  }

  return deviceManager;
};
