// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Spinner from '.';
import SpinnerIconDocs from './Spinner.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Spinner',
  parameters: {
    docs: {
      page: SpinnerIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Spinner,
};

export const _Spinner = () => (
  <Flex layout="fill-space-centered">
    <Spinner width={text('width', '2rem')} />
  </Flex>
);
