// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Search from '.';

export default {
  title: 'UI Components/Icons/Search',
  component: Search,
};

export const _Search = (args) => <Search {...args} />;

_Search.argTypes = {
  width: { control: 'text' },
};

_Search.args = {
  width: '2rem',
};

_Search.story = {
  name: 'Search',
};
