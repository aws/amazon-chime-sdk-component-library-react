// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ListHandRaise from '.';

export default {
  title: 'UI Components/Icons/ListHandRaise',
  component: ListHandRaise,
};

export const _ListHandRaise = (args) => <ListHandRaise {...args} />;

_ListHandRaise.argTypes = {
  width: { control: 'text' },
};

_ListHandRaise.args = {
  width: '2rem',
};

_ListHandRaise.story = {
  name: 'ListHandRaise',
};
