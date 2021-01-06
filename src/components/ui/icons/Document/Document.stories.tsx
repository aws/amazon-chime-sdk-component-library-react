// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Document from '.';
import DocumentIconDocs from './Document.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Document',
  parameters: {
    docs: {
      page: DocumentIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Document,
};

export const _Document = () => (
  <Flex layout="fill-space-centered">
    <Document width={text('width', '2rem')} />
  </Flex>
);
