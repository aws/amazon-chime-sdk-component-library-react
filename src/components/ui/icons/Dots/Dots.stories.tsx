// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Dots from '.';
import DotsIconDocs from './Dots.mdx';

export default {
  title: 'Icons/Dots',
  parameters: {
    docs: {
      page: DotsIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Dots
};

export const _Dots = () => <Dots width={text('width', '2rem')} />;
