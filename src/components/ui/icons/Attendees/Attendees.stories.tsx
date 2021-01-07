// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Attendees from '.';
import AttendeesIconDocs from './Attendees.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Attendees',
  parameters: {
    docs: {
      page: AttendeesIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Attendees,
};

export const _Attendees = () => (
  <Flex layout="fill-space-centered">
    <Attendees width={text('width', '2rem')} />
  </Flex>
);
