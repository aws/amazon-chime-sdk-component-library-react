import React from 'react';

import SpeakerSelection from './SpeakerSelection';
import MicSelection from './MicSelection';
import CameraSelection from './CameraSelection';

import { StyledWrapper, StyledAudioGroup, StyledVideoGroup } from './Styled';

const DeviceSelection = () => (
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
