// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Meeting from '.';
import MeetingIconDocs from './Meeting.mdx';

export default {
  title: 'Icons/Meeting',
  parameters: {
    docs: {
      page: MeetingIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Meeting
};

export const _Meeting = () => <Meeting width={text('width', '2rem')} />;
