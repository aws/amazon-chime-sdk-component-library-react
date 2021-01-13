// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import ZoomOut from '.';
import ZoomOutIconDocs from './ZoomOut.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/ZoomOut',
  parameters: {
    docs: {
      page: ZoomOutIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ZoomOut
};

export const _ZoomOut = () => <Flex layout="fill-space-centered"><ZoomOut width={text('width', '2rem')} /></Flex>;
