// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Dislike from '.';
import DislikeIconDocs from './Dislike.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Dislike',
  parameters: {
    docs: {
      page: DislikeIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Dislike,
};

export const _Dislike = () => (
  <Flex layout="fill-space-centered">
    <Dislike width={text('width', '2rem')} />
  </Flex>
);
