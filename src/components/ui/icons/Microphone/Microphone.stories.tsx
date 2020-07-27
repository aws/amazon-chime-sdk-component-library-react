// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import Microphone from '.';
import MicrophoneIconDocs from './Microphone.mdx';

export default {
  title: 'Icons/Microphone',
  parameters: {
    docs: {
      page: MicrophoneIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Microphone
};

export const _Microphone = () => (
  <Microphone
    muted={boolean('muted', false)}
    poorConnection={boolean('poorConnection', false)}
    width={text('width', '2rem')}
  />
);
