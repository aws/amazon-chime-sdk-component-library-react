// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import DropToAttach from '.';

export default {
  title: 'UI Components/Icons/DropToAttach',
  component: DropToAttach,
};

export const _DropToAttach = (args) => <DropToAttach {...args} />;

_DropToAttach.argTypes = {
  width: { control: 'text' },
};

_DropToAttach.args = {
  width: '2rem',
};

_DropToAttach.story = {
  name: 'DropToAttach',
};
