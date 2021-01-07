// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text, select } from '@storybook/addon-knobs';
import Arrow from './';
import ArrowIconDocs from './Arrow.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Arrow',
  parameters: {
    docs: {
      page: ArrowIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Arrow,
};

export const _Arrow = () => (
  <Flex layout="fill-space-centered">
    <Arrow
      direction={select(
        'direction',
        { up: 'up', right: 'right', down: 'down', left: 'left' },
        'down'
      )}
      width={text('width', '2rem')}
    />
  </Flex>
);
