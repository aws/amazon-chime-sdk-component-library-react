// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Camera from './';

export default {
  title: 'UI Components/Icons/Camera',
  component: Camera,
};

export const _Camera = (args) => <Camera {...args} />;

_Camera.argTypes = {
  width: { control: 'text' },
  disabled: { control: 'boolean' },
};

_Camera.args = {
  width: '2rem',
  disabled: false,
};

_Camera.story = {
  name: 'Camera',
};
