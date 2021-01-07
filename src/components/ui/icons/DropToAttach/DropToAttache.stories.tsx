// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import DropToAttach from '.';
import DropToAttachIconDocs from './DropToAttach.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/DropToAttach',
  parameters: {
    docs: {
      page: DropToAttachIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: DropToAttach,
};

export const _DropToAttach = () => (
  <Flex layout="fill-space-centered">
    <DropToAttach width={text('width', '10rem')} />
  </Flex>
);
