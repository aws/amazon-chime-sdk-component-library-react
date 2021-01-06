// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import DeskPhone from '.';
import DeskPhoneIconDocs from './DeskPhone.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/DeskPhone',
  parameters: {
    docs: {
      page: DeskPhoneIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: DeskPhone,
};

export const _DeskPhone = () => (
  <Flex layout="fill-space-centered">
    <DeskPhone
      disabled={boolean('disabled', false)}
      poorConnection={boolean('poorConnection', false)}
      width={text('width', '2rem')}
    />
  </Flex>
);
