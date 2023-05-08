// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Hamburger from '.';

export default {
  title: 'UI Components/Icons/Hamburger',
  component: Hamburger,
};

export const _Hamburger = (args) => <Hamburger {...args} />;

_Hamburger.argTypes = {
  width: { control: 'text' },
};

_Hamburger.args = {
  width: '2rem',
};

_Hamburger.story = {
  name: 'Hamburger',
};
