// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AudioVideoFacade, DefaultDeviceController } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../providers/AudioVideoProvider';
import { useDeviceController } from '../../providers/DeviceControllerProvider';

/**
 * Resolves the target for device operations: the meeting's `audioVideo` while in a meeting, and
 * otherwise the controller hosted for use before a meeting. `undefined` when neither is available.
 * Centralizes this precedence so every device consumer resolves its source the same way.
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
