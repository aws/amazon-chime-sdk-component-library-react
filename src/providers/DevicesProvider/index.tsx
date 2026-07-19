// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { AudioInputProvider, useAudioInputs } from './AudioInputProvider';
import { AudioOutputProvider, useAudioOutputs } from './AudioOutputProvider';
import { useVideoInputs, VideoInputProvider } from './VideoInputProvider';

export const DevicesProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => (
  <AudioInputProvider>
    <AudioOutputProvider>
      <VideoInputProvider>{children}</VideoInputProvider>
    </AudioOutputProvider>
  </AudioInputProvider>
);

export { useAudioInputs, useAudioOutputs, useVideoInputs };
