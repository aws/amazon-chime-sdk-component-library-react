// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import Pin from '.';
import PinIconDocs from './Pin.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Pin',
  parameters: {
    docs: {
      page: PinIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Pin
};

export const _Pin = () => (
  <Flex layout="fill-space-centered">
    <Pin unpin={boolean('unpin', false)} width={text('width', '2rem')} />
  </Flex>
);
