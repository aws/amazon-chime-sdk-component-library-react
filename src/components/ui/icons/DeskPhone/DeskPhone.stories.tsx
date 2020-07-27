// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import DeskPhone from '.';
import DeskPhoneIconDocs from './DeskPhone.mdx';

export default {
  title: 'Icons/DeskPhone',
  parameters: {
    docs: {
      page: DeskPhoneIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: DeskPhone
};

export const _DeskPhone = () => (
  <DeskPhone
    disabled={boolean('disabled', false)}
    width={text('width', '2rem')}
  />
);
