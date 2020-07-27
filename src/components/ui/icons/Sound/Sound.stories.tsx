// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import Sound from '.';
import SoundIconDocs from './Sound.mdx';

export default {
  title: 'Icons/Sound',
  parameters: {
    docs: {
      page: SoundIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Sound
};

export const _Sound = () => (
  <Sound disabled={boolean('disabled', false)} width={text('width', '2rem')} />
);
