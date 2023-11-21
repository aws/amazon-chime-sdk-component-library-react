// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Like from '.';

export default {
  title: 'UI Components/Icons/Like',
  component: Like,
};

export const _Like = (args) => <Like {...args} />;

_Like.argTypes = {
  width: { control: 'text' },
};

_Like.args = {
  width: '2rem',
};

_Like.story = {
  name: 'Like',
};
