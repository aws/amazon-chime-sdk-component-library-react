// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import Crown from '../icons/Crown';
import Input from './';
import SearchInput from './SearchInput';
import Flex from '../Flex';
import InputDocs from './Input.mdx';

export default {
  title: 'UI Components/Form/TextInputs',
  parameters: {
    docs: {
      page: InputDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Input,
};

export const BasicInput = () => {
  const [input, setInput] = useState('');

  return (
    <Flex layout="fill-space-centered" css="height: 100vh">
      <Input
        showClear={boolean('showClear', true)}
        onChange={(e) => setInput(e.target.value)}
        sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
        value={input}
        placeholder="a basic input"
        type="text"
      />
    </Flex>
  );
};

export const InputWithIcon = () => {
  const [input, setInput] = useState('');

  return (
    <Flex layout="fill-space-centered" css="height: 100vh">
      <Input
        showClear={boolean('showClear', true)}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="input with an icon"
        sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
        type="text"
        leadingIcon={<Crown />}
      />
    </Flex>
  );
};

InputWithIcon.story = {
  name: 'Input With Icon',
};

export const _SearchInput = () => {
  const [search, setSearch] = useState('');

  return (
    <Flex layout="fill-space-centered" css="height: 100vh">
      <SearchInput
        showClear={boolean('showClear', true)}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="a search input"
      />
    </Flex>
  );
};
