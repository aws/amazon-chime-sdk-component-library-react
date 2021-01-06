// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Share from '.';
import ShareIconDocs from './Share.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Share',
  parameters: {
    docs: {
      page: ShareIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Share,
};

export const _Share = () => (
  <Flex layout="fill-space-centered">
    <Share width={text('width', '2rem')} />
  </Flex>
);
