// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Search from '.';
import SearchIconDocs from './Search.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Search',
  parameters: {
    docs: {
      page: SearchIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Search,
};

export const _Search = () => (
  <Flex layout="fill-space-centered">
    <Search width={text('width', '2rem')} />
  </Flex>
);
