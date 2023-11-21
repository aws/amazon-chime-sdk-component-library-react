// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Heading from './';

export default {
  title: 'UI Components/Headings',
  component: Heading,
};

export const BasicHeading = (args) => (
  <Heading {...args}>
    Change my <code>level</code> or <code>as</code> prop
  </Heading>
);

BasicHeading.argTypes = {
  css: { control: 'text', table: { disable: false } },
  level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
  tag: { control: 'text', table: { disable: false } },
};

BasicHeading.args = {
  css: 'color: palevioletred;',
  level: 1,
  tag: 'p',
};

BasicHeading.story = {
  name: 'Basic Heading',
};
