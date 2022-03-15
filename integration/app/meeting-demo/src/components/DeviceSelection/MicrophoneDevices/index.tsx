// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {
  Heading,
  MicSelection,
} from 'amazon-chime-sdk-component-library-react';

import { title } from '../Styled';
import MicrophoneActivityPreview from './MicrophoneActivityPreview';

const MicrophoneDevices = () => {
  return (
    <div>
      <Heading tag="h2" level={6} css={title}>
        Audio
      </Heading>
      <MicSelection />
      <MicrophoneActivityPreview />
    </div>
  );
};

export default MicrophoneDevices;
