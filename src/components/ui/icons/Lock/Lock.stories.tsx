// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Lock from '.';

export default {
  title: 'UI Components/Icons/Lock',
  component: Lock,
};

export const _Lock = (args) => <Lock {...args} />;

_Lock.argTypes = {
  width: { control: 'text' },
};

_Lock.args = {
  width: '2rem',
};

_Lock.story = {
  name: 'Lock',
};
