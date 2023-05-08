// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ConnectionProblem from '.';

export default {
  title: 'UI Components/Icons/ConnectionProblem',
  component: ConnectionProblem,
};

export const _ConnectionProblem = (args) => <ConnectionProblem {...args} />;

_ConnectionProblem.argTypes = {
  width: { control: 'text' },
};

_ConnectionProblem.args = {
  width: '2rem',
};

_ConnectionProblem.story = {
  name: 'ConnectionProblem',
};
