// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Remove from '.';

export default {
  title: 'UI Components/Icons/Remove',
  component: Remove,
};

export const _Remove = (args) => <Remove {...args} />;

_Remove.argTypes = {
  width: { control: 'text' },
};

_Remove.args = {
  width: '2rem',
};

_Remove.story = {
  name: 'Remove',
};
