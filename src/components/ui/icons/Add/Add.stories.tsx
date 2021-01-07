// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Add from './';
import AddIconDocs from './Add.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Add',
  parameters: {
    docs: {
      page: AddIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Add,
};

export const _Add = () => (
  <Flex layout="fill-space-centered">
    <Add width={text('width', '2rem')} />
  </Flex>
);
