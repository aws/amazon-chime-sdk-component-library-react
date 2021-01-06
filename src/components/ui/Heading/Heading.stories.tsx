// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import Flex from '../Flex';
import Heading from './';
import HeadingDocs from './Heading.mdx';

export default {
  title: 'UI Components/Headings',
  parameters: {
    docs: {
      page: HeadingDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Heading,
};

export const BasicHeading = () => (
  <Flex layout="fill-space-centered" style={{ width: 'auto' }}>
    <Heading
      css={text('css', 'color: palevioletred;')}
      level={select('level', { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 }, 1)}
      tag={text('tag', 'p')}
    >
      Change my <code>level</code> or <code>as</code> prop
    </Heading>
  </Flex>
);

BasicHeading.story = {
  name: 'Basic Heading',
};
