// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Dock from '.';

export default {
  title: 'UI Components/Icons/Dock',
  component: Dock,
};

export const _Dock = (args) => <Dock {...args} />;

_Dock.argTypes = {
  width: { control: 'text' },
  undock: { control: 'boolean' },
};

_Dock.args = {
  width: '2rem',
  undock: false,
};

_Dock.story = {
  name: 'Dock',
};
