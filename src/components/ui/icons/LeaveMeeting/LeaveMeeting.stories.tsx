// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import LeaveMeeting from '.';
import LeaveMeetingIconDocs from './LeaveMeeting.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/LeaveMeeting',
  parameters: {
    docs: {
      page: LeaveMeetingIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: LeaveMeeting,
};

export const _LeaveMeeting = () => (
  <Flex layout="fill-space-centered">
    <LeaveMeeting width={text('width', '2rem')} />
  </Flex>
);
