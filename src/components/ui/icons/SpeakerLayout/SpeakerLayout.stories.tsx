// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import SpeakerLayout from '.';
import SpeakerLayoutIconDocs from './SpeakerLayout.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/SpeakerLayout',
  parameters: {
    docs: {
      page: SpeakerLayoutIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: SpeakerLayout,
};

export const _SpeakerLayout = () => (
  <Flex layout="fill-space-centered">
    <SpeakerLayout width={text('width', '2rem')} />
  </Flex>
);
