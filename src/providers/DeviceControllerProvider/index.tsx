// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { DefaultDeviceController } from 'amazon-chime-sdk-js';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { useLogger } from '../LoggerProvider';

interface Props {
  /**
   * Opt-in switch. When `true`, this provider creates and owns a `DefaultDeviceController` on mount
   * (before any meeting), so device APIs (enumerate / select / preview / mic meter / permission
   * prompt) work before `join()`. When `false`/unset, no controller is created and
   * {@link useDeviceController} returns `undefined` — behavior is identical to before this provider
   * existed (the `MeetingManager` creates its own controller inside `join()` as it always has).
   *
   * `MeetingProvider` sets this from its `hostDeviceController` prop.
   */
  enabled?: boolean;
  /**
   * Enable Web Audio on the underlying `DefaultDeviceController`. Required for Amazon Voice Focus.
   * This is a **constructor-only** option in the JS SDK, so it is fixed when the controller is
   * created (on mount) and is not re-read afterward — decide it up front (e.g. after the user's
   * Voice Focus choice, then mount `MeetingProvider`).
   */
  enableWebAudio?: boolean;
}

const DeviceControllerContext = createContext<
  DefaultDeviceController | undefined
>(undefined);

/**
 * `DeviceControllerProvider` optionally creates and owns a `DefaultDeviceController` whose lifecycle
 * is independent of any meeting. `MeetingProvider` mounts it internally and, when opted in via
 * `hostDeviceController`, constructor-injects the controller into `MeetingManager` (through
 * `MeetingProviderInner`) so device setup works before a `MeetingSession` exists.
 *
 * When not opted in (`enabled` is falsy) it creates nothing and provides `undefined`, so device
 * consumers fall back to the in-meeting `audioVideo` facade exactly as they do today. This is what
 * keeps the change backward compatible and opt-in.
 */
export const DeviceControllerProvider: React.FC<
  React.PropsWithChildren<Props>
> = ({ enabled, enableWebAudio, children }) => {
  const logger = useLogger();

  // Create the controller once, on mount, and only when opted in. `enableWebAudio` is read here
  // because it is constructor-only in the JS SDK. Not opted in => `undefined` (no controller).
  const [deviceController] = useState<DefaultDeviceController | undefined>(() =>
    enabled
      ? new DefaultDeviceController(logger, { enableWebAudio })
      : undefined
  );

  // This provider created the controller, so this provider destroys it on unmount. (When the
  // controller is injected into a meeting, `MeetingManager` must NOT destroy it — the provider owns
  // the lifecycle. See MeetingManager.leave().)
  useEffect(() => {
    return () => {
      void deviceController?.destroy();
    };
  }, [deviceController]);

  return (
    <DeviceControllerContext.Provider value={deviceController}>
      {children}
    </DeviceControllerContext.Provider>
  );
};

/**
 * Returns the provider-owned `DefaultDeviceController`, or `undefined` when the application has not
 * opted in (`hostDeviceController` unset). Intentionally does **not** throw when there is no
 * controller: callers treat `undefined` as "no pre-meeting controller" and fall back to the
 * in-meeting `audioVideo` facade, which preserves the pre-existing behavior.
 */
export const useDeviceController = (): DefaultDeviceController | undefined => {
  return useContext(DeviceControllerContext);
};

export default DeviceControllerProvider;
