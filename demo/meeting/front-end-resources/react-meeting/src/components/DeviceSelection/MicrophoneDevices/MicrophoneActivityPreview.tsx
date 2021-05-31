// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Label } from 'amazon-chime-sdk-component-library-react';

import { StyledPreviewGroup } from '../Styled';
import MicrophoneActivityPreviewBar from './MicrophoneActivityPreviewBar';

const MicrophoneActivityPreview = () => {
  return (
    <StyledPreviewGroup>
      <Label style={{ display: 'block', marginBottom: '.5rem' }}>
        Microphone activity
      </Label>
      <MicrophoneActivityPreviewBar />
    </StyledPreviewGroup>
  );
};

export default MicrophoneActivityPreview;
