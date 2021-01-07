// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Feedback from '.';
import FeedbackIconDocs from './Feedback.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Feedback',
  parameters: {
    docs: {
      page: FeedbackIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Feedback,
};

export const _Feedback = () => (
  <Flex layout="fill-space-centered">
    <Feedback width={text('width', '2rem')} />
  </Flex>
);
