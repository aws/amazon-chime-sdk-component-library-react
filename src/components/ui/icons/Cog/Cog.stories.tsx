// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Cog from '.';

export default {
  title: 'UI Components/Icons/Cog',
  component: Cog,
};

export const _Cog = (args) => <Cog {...args} />;

_Cog.argTypes = {
  width: { control: 'text' },
};

_Cog.args = {
  width: '2rem',
};

_Cog.story = {
  name: 'Cog',
};
