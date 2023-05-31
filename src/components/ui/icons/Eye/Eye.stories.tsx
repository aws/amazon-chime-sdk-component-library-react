// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Eye from '.';

export default {
  title: 'UI Components/Icons/Eye',
  component: Eye,
};

export const _Eye = (args) => <Eye {...args} />;

_Eye.argTypes = {
  width: { control: 'text' },
};

_Eye.args = {
  width: '2rem',
};

_Eye.story = {
  name: 'Eye',
};
