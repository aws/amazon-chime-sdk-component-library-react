// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Laptop from '.';
import LaptopIconDocs from './Laptop.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Laptop',
  parameters: {
    docs: {
      page: LaptopIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Laptop,
};

export const _Laptop = () => (
  <Flex layout="fill-space-centered">
    <Laptop width={text('width', '2rem')} />
  </Flex>
);
