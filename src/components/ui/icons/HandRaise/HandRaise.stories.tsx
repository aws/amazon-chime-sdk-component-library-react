// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import HandRaise from '.';
import HandRaiseIconDocs from './HandRaise.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/HandRaise',
  parameters: {
    docs: {
      page: HandRaiseIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: HandRaise,
};

export const _HandRaise = () => (
  <Flex layout="fill-space-centered">
    <HandRaise
      isRaised={boolean('isRaised', false)}
      width={text('width', '2rem')}
    />
  </Flex>
);
