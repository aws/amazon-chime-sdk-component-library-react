// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Clear from '.';
import ClearIconDocs from './Clear.mdx';

export default {
  title: 'Icons/Clear',
  parameters: {
    docs: {
      page: ClearIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Clear
};

export const _Clear = () => <Clear width={text('width', '2rem')} />;
