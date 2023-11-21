// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Meeting from '.';

export default {
  title: 'UI Components/Icons/Meeting',
  component: Meeting,
};

export const _Meeting = (args) => <Meeting {...args} />;

_Meeting.argTypes = {
  width: { control: 'text' },
};

_Meeting.args = {
  width: '2rem',
};

_Meeting.story = {
  name: 'Meeting',
};
