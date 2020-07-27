// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Crown from '.';
import CrownIconDocs from './Crown.mdx';

export default {
  title: 'Icons/Crown',
  parameters: {
    docs: {
      page: CrownIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Crown
};

export const _Crown = () => <Crown width={text('width', '2rem')} />;
