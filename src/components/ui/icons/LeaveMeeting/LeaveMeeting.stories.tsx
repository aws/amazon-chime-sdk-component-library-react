// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import LeaveMeeting from '.';
import LeaveMeetingIconDocs from './LeaveMeeting.mdx';

export default {
  title: 'Icons/LeaveMeeting',
  parameters: {
    docs: {
      page: LeaveMeetingIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: LeaveMeeting
};

export const _LeaveMeeting = () => (
  <LeaveMeeting width={text('width', '2rem')} />
);
