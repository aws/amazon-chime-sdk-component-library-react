// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Pause from '.';

export default {
  title: 'UI Components/Icons/Pause',
  component: Pause,
};

export const _Pause = (args) => <Pause {...args} />;

_Pause.argTypes = {
  width: { control: 'text' },
};

_Pause.args = {
  width: '2rem',
};

_Pause.story = {
  name: 'Pause',
};
