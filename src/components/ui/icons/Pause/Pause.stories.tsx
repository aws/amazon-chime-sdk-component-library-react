// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Pause from '.';
import PauseIconDocs from './Pause.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Pause',
  parameters: {
    docs: {
      page: PauseIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Pause,
};

export const _Pause = () => (
  <Flex layout="fill-space-centered">
    <Pause width={text('width', '2rem')} />
  </Flex>
);
