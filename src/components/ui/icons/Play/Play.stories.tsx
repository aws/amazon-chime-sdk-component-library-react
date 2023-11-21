// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Play from '.';

export default {
  title: 'UI Components/Icons/Play',
  component: Play,
};

export const _Play = (args) => <Play {...args} />;

_Play.argTypes = {
  width: { control: 'text' },
};

_Play.args = {
  width: '2rem',
};

_Play.story = {
  name: 'Play',
};
