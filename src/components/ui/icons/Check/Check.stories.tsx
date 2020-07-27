// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Check from '.';
import CheckIconDocs from './Check.mdx';

export default {
  title: 'Icons/Check',
  parameters: {
    docs: {
      page: CheckIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Check
};

export const _Check = () => <Check width={text('width', '2rem')} />;
