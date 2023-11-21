// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import ScreenShare from '.';

export default {
  title: 'UI Components/Icons/ScreenShare',
  component: ScreenShare,
};

export const _ScreenShare = (args) => <ScreenShare {...args} />;

_ScreenShare.argTypes = {
  width: { control: 'text' },
};

_ScreenShare.args = {
  width: '2rem',
};

_ScreenShare.story = {
  name: 'ScreenShare',
};
