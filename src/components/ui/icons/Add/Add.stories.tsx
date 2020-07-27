// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Add from './';
import AddIconDocs from './Add.mdx';

export default {
  title: 'Icons/Add',
  parameters: {
    docs: {
      page: AddIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Add
};

export const _Add = () => <Add width={text('width', '2rem')} />;
