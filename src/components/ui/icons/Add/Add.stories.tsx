// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Add from './';

export default {
  title: 'UI Components/Icons/Add',
  component: Add,
};

export const _Add = (args) => <Add {...args} />;

_Add.argTypes = {
  width: { control: 'text' },
};

_Add.args = {
  width: '2rem',
};

_Add.story = {
  name: 'Add',
};
