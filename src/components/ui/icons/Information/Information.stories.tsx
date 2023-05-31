// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Information from '.';

export default {
  title: 'UI Components/Icons/Information',
  component: Information,
};

export const _Information = (args) => <Information {...args} />;

_Information.argTypes = {
  width: { control: 'text' },
};

_Information.args = {
  width: '2rem',
};

_Information.story = {
  name: 'Information',
};
