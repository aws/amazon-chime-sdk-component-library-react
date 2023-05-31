// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ZoomIn from '.';

export default {
  title: 'UI Components/Icons/ZoomIn',
  component: ZoomIn,
};

export const _ZoomIn = (args) => <ZoomIn {...args} />;

_ZoomIn.argTypes = {
  width: { control: 'text' },
};

_ZoomIn.args = {
  width: '2rem',
};

_ZoomIn.story = {
  name: 'ZoomIn',
};
