// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Dots from '.';

export default {
  title: 'UI Components/Icons/Dots',
  component: Dots,
};

export const _Dots = (args) => <Dots {...args} />;

_Dots.argTypes = {
  width: { control: 'text' },
};

_Dots.args = {
  width: '2rem',
};

_Dots.story = {
  name: 'Dots',
};
