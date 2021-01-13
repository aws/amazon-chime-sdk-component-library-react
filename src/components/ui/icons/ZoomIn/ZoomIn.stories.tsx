// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import ZoomIn from '.';
import ZoomInIconDocs from './ZoomIn.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/ZoomIn',
  parameters: {
    docs: {
      page: ZoomInIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ZoomIn
};

export const _ZoomIn = () => <Flex layout="fill-space-centered"><ZoomIn width={text('width', '2rem')} /></Flex>;
