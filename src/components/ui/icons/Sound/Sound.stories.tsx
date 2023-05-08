// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Sound from '.';

export default {
  title: 'UI Components/Icons/Sound',
  component: Sound,
};

export const _Sound = (args) => <Sound {...args} />;

_Sound.argTypes = {
  width: { control: 'text' },
  disabled: { control: 'boolean' },
};

_Sound.args = {
  width: '2rem',
  disabled: false,
};

_Sound.story = {
  name: 'Sound',
};
