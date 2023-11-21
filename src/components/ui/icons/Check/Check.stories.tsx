// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Check from '.';

export default {
  title: 'UI Components/Icons/Check',
  component: Check,
};

export const _Check = (args) => <Check {...args} />;

_Check.argTypes = {
  width: { control: 'text' },
};

_Check.args = {
  width: '2rem',
};

_Check.story = {
  name: 'Check',
};
