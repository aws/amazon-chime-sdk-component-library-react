// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import SignalStrength from '.';

export default {
  title: 'UI Components/Icons/SignalStrength',
  component: SignalStrength,
};

export const _SignalStrength = (args) => <SignalStrength {...args} />;

_SignalStrength.argTypes = {
  width: { control: 'text' },
};

_SignalStrength.args = {
  width: '2rem',
};

_SignalStrength.story = {
  name: 'SignalStrength',
};
