// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import UpAndDownCaret from '.';

export default {
  title: 'UI Components/Icons/UpAndDownCaret',
  component: UpAndDownCaret,
};

export const _UpAndDownCaret = (args) => <UpAndDownCaret {...args} />;

_UpAndDownCaret.argTypes = {
  width: { control: 'text' },
};

_UpAndDownCaret.args = {
  width: '2rem',
};

_UpAndDownCaret.story = {
  name: 'UpAndDownCaret',
};
