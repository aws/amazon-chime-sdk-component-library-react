// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Radio from './';
import Add from '../icons/Add';

// This is `Meta`, it specify the position of a story in storybook sidebar,
// and attach a story to a component
export default {
  title: 'UI Components/Form/Radio',
  component: Radio,
};

// Remove `Flex` style because the "centered" style is applied globally in preview.ts
export const _Radio = (args) => <Radio {...args} />;

// Controls args we don't want to display in toolbar-control,
// because they are not directly related to component itself.
const commonHiddenArgTypes = {
  icon: { table: { disable: true } },
  onChange: { table: { disable: true } },
  radioProps: { table: { disable: true } },
};

// Specify the args that will be displayed in toolbar-Controls tab
_Radio.argTypes = {
  value: { control: 'text' },
  label: { control: 'text' },
  checked: { control: 'boolean' },
  ...commonHiddenArgTypes,
};

// Specify the default value for args in toolbar-Controls tab
_Radio.args = {
  value: 'bananas',
  label: 'Radio Input',
  checked: false,
  onChange: (e: any) => console.log(e),
};

_Radio.story = {
  name: 'Radio',
};

export const _RadioWithIcon = (args) => <Radio {...args} />;

_RadioWithIcon.argTypes = {
  ..._Radio.argTypes,
  label: { table: { disable: true } },
};

_RadioWithIcon.args = {
  ..._Radio.args,
  icon: <Add width="2rem" />,
};

_RadioWithIcon.story = {
  name: 'Radio with Icon',
};
