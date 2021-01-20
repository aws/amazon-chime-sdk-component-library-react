// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import ConnectionProblem from '.';
import ConnectionProblemDocs from './ConnectionProblem.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/ConnectionProblem',
  parameters: {
    docs: {
      page: ConnectionProblemDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ConnectionProblem,
};

export const _ConnectionProblem = () => (
  <Flex layout="fill-space-centered">
    <ConnectionProblem width={text('width', '2rem')} />
  </Flex>
);
