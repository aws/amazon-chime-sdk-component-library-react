// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Flex from '../Flex';
import Checkbox from './';
import CheckboxDocs from './Checkbox.mdx';

export default {
  title: 'UI Components/Form/Checkbox',
  parameters: {
    docs: {
      page: CheckboxDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Checkbox,
};

export const _Checkbox = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <Checkbox {...args} />
    </Flex>
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
