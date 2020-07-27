// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Clock from '.';
import ClockIconDocs from './Clock.mdx';

export default {
  title: 'Icons/Clock',
  parameters: {
    docs: {
      page: ClockIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Clock
};

export const _Clock = () => <Clock width={text('width', '2rem')} />;
