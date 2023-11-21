// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import HandRaise from '.';

export default {
  title: 'UI Components/Icons/HandRaise',
  component: HandRaise,
};

export const _HandRaise = (args) => <HandRaise {...args} />;

_HandRaise.argTypes = {
  width: { control: 'text' },
  isRaised: { control: 'boolean' },
};

_HandRaise.args = {
  width: '2rem',
  isRaised: false,
};

_HandRaise.story = {
  name: 'HandRaise',
};
