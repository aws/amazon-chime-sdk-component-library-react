// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Caution from './';
import CautionIconDocs from './Caution.mdx';

export default {
  title: 'Icons/Caution',
  parameters: {
    docs: {
      page: CautionIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Caution
};

export const _Caution = () => <Caution width={text('width', '2rem')} />;
