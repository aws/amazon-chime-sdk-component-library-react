// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { select, text } from '@storybook/addon-knobs';
import Caret from './';
import CaretIconDocs from './Caret.mdx';

export default {
  title: 'Icons/Caret',
  parameters: {
    docs: {
      page: CaretIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Caret
};

export const _Caret = () => (
  <Caret
    direction={select(
      'direction',
      { up: 'up', right: 'right', down: 'down', left: 'left' },
      'down'
    )}
    width={text('width', '2rem')}
  />
);
