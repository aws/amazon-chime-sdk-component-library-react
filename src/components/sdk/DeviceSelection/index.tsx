// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import SpeakerSelection from './SpeakerSelection';
import MicSelection from './MicSelection';
import CameraSelection from './CameraSelection';

import { StyledWrapper, StyledAudioGroup, StyledVideoGroup } from './Styled';

export const DeviceSelection = () => (
  <StyledWrapper>
    <StyledAudioGroup>
      <MicSelection />
      <SpeakerSelection />
    </StyledAudioGroup>
    <StyledVideoGroup>
      <CameraSelection />
    </StyledVideoGroup>
  </StyledWrapper>
);

export default DeviceSelection;
