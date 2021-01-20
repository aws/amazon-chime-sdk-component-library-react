// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import CheckRound from '.';
import CheckRoundIconDocs from './CheckRound.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/CheckRound',
  parameters: {
    docs: {
      page: CheckRoundIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: CheckRound,
};

export const _CheckRound = () => (
  <Flex layout="fill-space-centered">
    <CheckRound width={text('width', '2rem')} />
  </Flex>
);
