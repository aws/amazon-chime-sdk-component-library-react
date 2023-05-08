// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Record from '.';

export default {
  title: 'UI Components/Icons/Record',
  component: Record,
};

export const _Record = (args) => <Record {...args} />;

_Record.argTypes = {
  width: { control: 'text' },
};

_Record.args = {
  width: '2rem',
};

_Record.story = {
  name: 'Record',
};
