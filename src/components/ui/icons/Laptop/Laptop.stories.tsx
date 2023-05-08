// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Laptop from '.';

export default {
  title: 'UI Components/Icons/Laptop',
  component: Laptop,
};

export const _Laptop = (args) => <Laptop {...args} />;

_Laptop.argTypes = {
  width: { control: 'text' },
};

_Laptop.args = {
  width: '2rem',
};

_Laptop.story = {
  name: 'Laptop',
};
