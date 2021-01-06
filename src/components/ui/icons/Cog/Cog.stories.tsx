// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Cog from '.';
import CogIconDocs from './Cog.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Cog',
  parameters: {
    docs: {
      page: CogIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Cog,
};

export const _Cog = () => (
  <Flex layout="fill-space-centered">
    <Cog width={text('width', '2rem')} />
  </Flex>
);
