// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Share from '.';
import ShareIconDocs from './Share.mdx';

export default {
  title: 'Icons/Share',
  parameters: {
    docs: {
      page: ShareIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Share
};

export const _Share = () => <Share width={text('width', '2rem')} />;
