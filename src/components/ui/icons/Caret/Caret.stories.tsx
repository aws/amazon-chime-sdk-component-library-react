// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Caret from './';

export default {
  title: 'UI Components/Icons/Caret',
  component: Caret,
};

export const _Caret = (args) => <Caret {...args} />;

_Caret.argTypes = {
  width: { control: 'text' },
  direction: { control: 'select', options: ['up', 'right', 'down', 'left'] },
};

_Caret.args = {
  width: '2rem',
  direction: 'down',
};

_Caret.story = {
  name: 'Caret',
};
