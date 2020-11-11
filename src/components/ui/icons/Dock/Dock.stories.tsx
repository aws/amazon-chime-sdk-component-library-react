// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import Dock from '.';
import DockIconDocs from './Dock.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Dock',
  parameters: {
    docs: {
      page: DockIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Dock
};

export const _Dock = () => (
  <Flex layout="fill-space-centered">
    <Dock undock={boolean('undock', false)} width={text('width', '2rem')} />
  </Flex>
);
