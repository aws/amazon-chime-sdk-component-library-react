// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Clear from '.';
import ClearIconDocs from './Clear.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Clear',
  parameters: {
    docs: {
      page: ClearIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Clear,
};

export const _Clear = () => (
  <Flex layout="fill-space-centered">
    <Clear width={text('width', '2rem')} />
  </Flex>
);
