// Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import GalleryLayout from '.';
import GalleryLayoutIconDocs from './GalleryLayout.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/GalleryLayout',
  parameters: {
    docs: {
      page: GalleryLayoutIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: GalleryLayout,
};

export const _GalleryLayout = () => (
  <Flex layout="fill-space-centered">
    <GalleryLayout width={text('width', '2rem')} />
  </Flex>
);
