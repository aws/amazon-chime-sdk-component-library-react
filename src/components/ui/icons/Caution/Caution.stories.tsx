// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Caution from './';

export default {
  title: 'UI Components/Icons/Caution',
  component: Caution,
};

export const _Caution = (args) => <Caution {...args} />;

_Caution.argTypes = {
  width: { control: 'text' },
  variant: {
    control: 'select',
    options: ['default', 'fill-warning', 'fill-error'],
  },
};

_Caution.args = {
  width: '2rem',
  variant: 'default',
};

_Caution.story = {
  name: 'Caution',
};
