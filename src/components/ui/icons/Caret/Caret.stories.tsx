// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { select, text } from '@storybook/addon-knobs';
import Caret from './';
import CaretIconDocs from './Caret.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Caret',
  parameters: {
    docs: {
      page: CaretIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Caret,
};

export const _Caret = () => (
  <Flex layout="fill-space-centered">
    <Caret
      direction={select(
        'direction',
        { up: 'up', right: 'right', down: 'down', left: 'left' },
        'down'
      )}
      width={text('width', '2rem')}
    />
  </Flex>
);
