// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Phone from '.';

export default {
  title: 'UI Components/Icons/Phone',
  component: Phone,
};

export const _Phone = (args) => <Phone {...args} />;

_Phone.argTypes = {
  width: { control: 'text' },
};

_Phone.args = {
  width: '2rem',
};

_Phone.story = {
  name: 'Phone',
};
