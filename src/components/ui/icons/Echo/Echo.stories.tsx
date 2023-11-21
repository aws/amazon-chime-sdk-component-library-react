// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Echo from '.';

export default {
  title: 'UI Components/Icons/Echo',
  component: Echo,
};

export const _Echo = (args) => <Echo {...args} />;

_Echo.argTypes = {
  width: { control: 'text' },
  poorConnection: { control: 'boolean' },
  muted: { control: 'boolean' },
};

_Echo.args = {
  width: '2rem',
  poorConnection: false,
  muted: false,
};

_Echo.story = {
  name: 'Echo',
};
