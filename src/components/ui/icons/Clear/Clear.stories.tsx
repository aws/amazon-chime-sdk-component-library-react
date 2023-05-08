// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Clear from '.';

export default {
  title: 'UI Components/Icons/Clear',
  component: Clear,
};

export const _Clear = (args) => <Clear {...args} />;

_Clear.argTypes = {
  width: { control: 'text' },
};
_Clear.args = {
  width: '2rem',
};
_Clear.story = {
  name: 'Clear',
};
