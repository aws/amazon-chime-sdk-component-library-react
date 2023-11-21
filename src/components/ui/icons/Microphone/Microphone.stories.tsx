// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Microphone from '.';

export default {
  title: 'UI Components/Icons/Microphone',
  component: Microphone,
};

export const _Microphone = (args) => <Microphone {...args} />;

_Microphone.argTypes = {
  width: { control: 'text' },
  poorConnection: { control: 'boolean' },
  muted: { control: 'boolean' },
};

_Microphone.args = {
  width: '2rem',
  poorConnection: false,
  muted: false,
};

_Microphone.story = {
  name: 'Microphone',
};
