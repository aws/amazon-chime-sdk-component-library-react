// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Dialer from '.';

export default {
  title: 'UI Components/Icons/Dialer',
  component: Dialer,
};

export const _Dialer = (args) => <Dialer {...args} />;

_Dialer.argTypes = {
  width: { control: 'text' },
};

_Dialer.args = {
  width: '2rem',
};

_Dialer.story = {
  name: 'Dialer',
};
