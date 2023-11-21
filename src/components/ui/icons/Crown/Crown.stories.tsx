// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Crown from '.';

export default {
  title: 'UI Components/Icons/Crown',
  component: Crown,
};

export const _Crown = (args) => <Crown {...args} />;

_Crown.argTypes = {
  width: { control: 'text' },
};

_Crown.args = {
  width: '2rem',
};

_Crown.story = {
  name: 'Crown',
};
