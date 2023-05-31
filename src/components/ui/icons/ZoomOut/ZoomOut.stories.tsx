// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ZoomOut from '.';

export default {
  title: 'UI Components/Icons/ZoomOut',
  component: ZoomOut,
};

export const _ZoomOut = (args) => <ZoomOut {...args} />;

_ZoomOut.argTypes = {
  width: { control: 'text' },
};

_ZoomOut.args = {
  width: '2rem',
};

_ZoomOut.story = {
  name: 'ZoomOut',
};
