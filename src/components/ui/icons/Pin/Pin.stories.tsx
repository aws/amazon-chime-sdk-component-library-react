// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Pin from '.';

export default {
  title: 'UI Components/Icons/Pin',
  component: Pin,
};

export const _Pin = (args) => <Pin {...args} />;

_Pin.argTypes = {
  width: { control: 'text' },
  unpin: { control: 'boolean' },
};

_Pin.args = {
  width: '2rem',
  unpin: false,
};

_Pin.story = {
  name: 'Pin',
};
