// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Hamburger from '.';
import HamburgerIconDocs from './Hamburger.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Hamburger',
  parameters: {
    docs: {
      page: HamburgerIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Hamburger,
};

export const _Hamburger = () => (
  <Flex layout="fill-space-centered">
    <Hamburger width={text('width', '2rem')} />
  </Flex>
);
