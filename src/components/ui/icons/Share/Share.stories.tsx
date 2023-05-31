// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Share from '.';

export default {
  title: 'UI Components/Icons/Share',
  component: Share,
};

export const _Share = (args) => <Share {...args} />;

_Share.argTypes = {
  width: { control: 'text' },
};

_Share.args = {
  width: '2rem',
};

_Share.story = {
  name: 'Share',
};
