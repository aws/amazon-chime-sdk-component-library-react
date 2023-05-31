// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Arrow from './';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Arrow',
  component: Arrow,
};

export const _Arrow = (args) => <Arrow {...args} />;

_Arrow.argTypes = {
  width: { control: 'text' },
  direction: { control: 'select', options: ['up', 'right', 'down', 'left'] },
};
_Arrow.args = {
  width: '2rem',
  direction: 'down',
};
_Arrow.story = {
  name: 'Arrow',
};
