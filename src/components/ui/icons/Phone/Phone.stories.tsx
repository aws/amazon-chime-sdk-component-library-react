// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Phone from '.';
import PhoneIconDocs from './Phone.mdx';

export default {
  title: 'Icons/Phone',
  parameters: {
    docs: {
      page: PhoneIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Phone
};

export const _Phone = () => <Phone width={text('width', '2rem')} />;
