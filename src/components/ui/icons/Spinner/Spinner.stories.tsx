// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Spinner from '.';

export default {
  title: 'UI Components/Icons/Spinner',
  component: Spinner,
};

export const _Spinner = (args) => <Spinner {...args} />;

_Spinner.argTypes = {
  width: { control: 'text' },
};

_Spinner.args = {
  width: '2rem',
};

_Spinner.story = {
  name: 'Spinner',
};
