// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import type { AudioTransformDevice, Device } from 'amazon-chime-sdk-js';
import React from 'react';

import { AudioInputProvider, useAudioInputs } from './AudioInputProvider';
import { AudioOutputProvider, useAudioOutputs } from './AudioOutputProvider';
import { useVideoInputs, VideoInputProvider } from './VideoInputProvider';

interface Props {
  onDeviceReplacement?: (
    nextDevice: string,
    currentDevice: Device | AudioTransformDevice | null
  ) => Promise<Device | AudioTransformDevice | null>;
}

const DevicesProvider: React.FC<Props> = ({
  children,
  onDeviceReplacement,
}) => (
  <AudioInputProvider onDeviceReplacement={onDeviceReplacement}>
    <AudioOutputProvider>
      <VideoInputProvider>{children}</VideoInputProvider>
    </AudioOutputProvider>
  </AudioInputProvider>
);

export { DevicesProvider, useAudioInputs, useAudioOutputs, useVideoInputs };
