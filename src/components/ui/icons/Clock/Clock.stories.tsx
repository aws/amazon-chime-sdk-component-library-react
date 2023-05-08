// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Clock from '.';

export default {
  title: 'UI Components/Icons/Clock',
  component: Clock,
};

export const _Clock = (args) => <Clock {...args} />;

_Clock.argTypes = {
  width: { control: 'text' },
};

_Clock.args = {
  width: '2rem',
};

_Clock.story = {
  name: 'Clock',
};
