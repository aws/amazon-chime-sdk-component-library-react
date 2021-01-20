// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Clock from '.';
import ClockIconDocs from './Clock.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Clock',
  parameters: {
    docs: {
      page: ClockIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Clock,
};

export const _Clock = () => (
  <Flex layout="fill-space-centered">
    <Clock width={text('width', '2rem')} />
  </Flex>
);
