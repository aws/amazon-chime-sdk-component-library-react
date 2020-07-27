// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import ContentShare from '.';
import ContentShareIconDocs from './ContentShare.mdx';

export default {
  title: 'Icons/ContentShare',
  parameters: {
    docs: {
      page: ContentShareIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: ContentShare
};

export const _ContentShare = () => (
  <ContentShare width={text('width', '2rem')} />
);
