// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import Crown from '../icons/Crown';
import Input from './';
import SearchInput from './SearchInput';

export default {
  title: 'UI Components/Form/TextInputs',
  component: Input,
};

export const BasicInput = (args) => {
  const [input, setInput] = useState('');

  return (
    <Input
      {...args}
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="a basic input"
      type="text"
    />
  );
};

const commonHiddenArgTypes = {
  onChange: { table: { disable: true } },
  onClear: { table: { disable: true } },
  value: { table: { disable: true } },
  leadingIcon: { table: { disable: true } },
};

BasicInput.argTypes = {
  showClear: { control: 'boolean' },
  sizing: { control: 'select', options: ['sm', 'md'] },
  ...commonHiddenArgTypes,
};

BasicInput.args = {
  showClear: true,
  sizing: 'md',
};

BasicInput.story = {
  name: 'Basic Input',
};

export const InputWithIcon = (args) => {
  const [input, setInput] = useState('');

  return (
    <Input
      {...args}
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="input with an icon"
      type="text"
      leadingIcon={<Crown />}
    />
  );
};

InputWithIcon.argTypes = {
  showClear: { control: 'boolean' },
  sizing: { control: 'select', options: ['sm', 'md'] },
  ...commonHiddenArgTypes,
};

InputWithIcon.args = {
  showClear: true,
  sizing: 'md',
};

InputWithIcon.story = {
  name: 'Input With Icon',
};

export const _SearchInput = (args) => {
  const [search, setSearch] = useState('');

  return (
    <SearchInput
      {...args}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="a search input"
    />
  );
};

_SearchInput.argTypes = {
  showClear: { control: 'boolean' },
  sizing: { table: { disable: true } },
  ...commonHiddenArgTypes,
};

_SearchInput.args = {
  showClear: true,
};

_SearchInput.story = {
  name: 'Search Input',
};
