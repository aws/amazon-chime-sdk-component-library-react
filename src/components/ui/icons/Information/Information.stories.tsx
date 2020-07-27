// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Information from '.';
import InformationIconDocs from './Information.mdx';

export default {
  title: 'Icons/Information',
  parameters: {
    docs: {
      page: InformationIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Information
};

export const _Information = () => <Information width={text('width', '2rem')} />;
