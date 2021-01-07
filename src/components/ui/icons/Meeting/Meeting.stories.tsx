// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Meeting from '.';
import MeetingIconDocs from './Meeting.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Meeting',
  parameters: {
    docs: {
      page: MeetingIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Meeting,
};

export const _Meeting = () => (
  <Flex layout="fill-space-centered">
    <Meeting width={text('width', '2rem')} />
  </Flex>
);
