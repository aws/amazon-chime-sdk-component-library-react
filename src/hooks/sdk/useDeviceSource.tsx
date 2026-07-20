// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioVideoFacade, DefaultDeviceController } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../providers/AudioVideoProvider';
import { useDeviceController } from '../../providers/DeviceControllerProvider';

/**
 * Resolves the object device operations (enumerate / list / observe / preview / analyser) should
 * target: the in-meeting `audioVideo` facade when a meeting is active, otherwise the hosted
 * pre-meeting `DefaultDeviceController` when the app opted in via `MeetingProvider`'s
 * `persistDeviceController`. Returns `undefined` when neither exists (not opted in and no meeting) —
 * callers treat that as "no device source" and no-op, which preserves the pre-existing behavior.
 *
 * Centralizing the `audioVideo ?? deviceController` precedence here keeps every device consumer in
 * sync: the rule (in-meeting facade wins, pre-meeting controller is the fallback) lives in one place
 * rather than being re-derived at each call site. Both types implement the JS SDK
 * `DeviceControllerFacade`, so the returned value exposes the same device methods either way.
 */
export const useDeviceSource = ():
  | AudioVideoFacade
  | DefaultDeviceController
  | undefined => {
  const audioVideo = useAudioVideo();
  const deviceController = useDeviceController();
  return audioVideo ?? deviceController;
};

export default useDeviceSource;
