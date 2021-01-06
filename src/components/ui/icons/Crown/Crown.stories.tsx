// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Crown from '.';
import CrownIconDocs from './Crown.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Crown',
  parameters: {
    docs: {
      page: CrownIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Crown,
};

export const _Crown = () => (
  <Flex layout="fill-space-centered">
    <Crown width={text('width', '2rem')} />
  </Flex>
);
