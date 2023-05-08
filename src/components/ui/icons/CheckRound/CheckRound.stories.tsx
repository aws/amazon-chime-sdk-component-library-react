// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import CheckRound from '.';

export default {
  title: 'UI Components/Icons/CheckRound',
  component: CheckRound,
};

export const _CheckRound = (args) => <CheckRound {...args} />;

_CheckRound.argTypes = {
  width: { control: 'text' },
};

_CheckRound.args = {
  width: '2rem',
};

_CheckRound.story = {
  name: 'CheckRound',
};
