// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import Echo from '.';
import EchoIconDocs from './Echo.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Echo',
  parameters: {
    docs: {
      page: EchoIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Echo,
};

export const _Echo = () => (
  <Flex layout="fill-space-centered">
    <Echo
      muted={boolean('muted', false)}
      poorConnection={boolean('poorConnection', false)}
      width={text('width', '2rem')}
    />
  </Flex>
);
