// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import DeskPhone from '.';

export default {
  title: 'UI Components/Icons/DeskPhone',
  component: DeskPhone,
};

export const _DeskPhone = (args) => <DeskPhone {...args} />;

_DeskPhone.argTypes = {
  width: { control: 'text' },
  disabled: { control: 'boolean' },
  poorConnection: { control: 'boolean' },
};

_DeskPhone.args = {
  width: '2rem',
  disabled: false,
  poorConnection: false,
};

_DeskPhone.story = {
  name: 'DeskPhone',
};
