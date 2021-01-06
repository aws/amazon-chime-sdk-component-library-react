// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Record from '.';
import RecordIconDocs from './Record.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Record',
  parameters: {
    docs: {
      page: RecordIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Record,
};

export const _Record = () => (
  <Flex layout="fill-space-centered">
    <Record width={text('width', '2rem')} />
  </Flex>
);
