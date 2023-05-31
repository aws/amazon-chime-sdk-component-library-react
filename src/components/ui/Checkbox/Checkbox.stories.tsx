// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Checkbox from './';

export default {
  title: 'UI Components/Form/Checkbox',
  component: Checkbox,
};

export const _Checkbox = (args) => {
  return (
    <>
      <span style={{ marginRight: '0.5rem' }}>Enabled</span>
      <Checkbox {...args} />
    </>
  );
};

_Checkbox.args = {
  value: 'value',
  checked: false,
  onChange: () => console.log('changed'),
  'aria-label': 'checkbox',
};

_Checkbox.argTypes = {
  checked: { control: 'boolean' },
  value: { table: { disable: true } },
  onChange: { table: { disable: true } },
  'aria-label': { table: { disable: true } },
  tag: { table: { disable: true } },
  css: { table: { disable: true } },
};

_Checkbox.story = {
  name: 'Checkbox',
};
