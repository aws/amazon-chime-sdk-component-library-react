// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Record from '.';
import RecordIconDocs from './Record.mdx';

export default {
  title: 'Icons/Record',
  parameters: {
    docs: {
      page: RecordIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Record
};

export const _Record = () => <Record width={text('width', '2rem')} />;
