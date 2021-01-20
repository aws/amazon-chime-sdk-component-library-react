// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Dots from '.';
import DotsIconDocs from './Dots.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Dots',
  parameters: {
    docs: {
      page: DotsIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Dots,
};

export const _Dots = () => (
  <Flex layout="fill-space-centered">
    <Dots width={text('width', '2rem')} />
  </Flex>
);
