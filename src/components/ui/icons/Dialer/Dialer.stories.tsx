// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Dialer from '.';
import DialerIconDocs from './Dialer.mdx';

export default {
  title: 'Icons/Dialer',
  parameters: {
    docs: {
      page: DialerIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Dialer
};

export const _Dialer = () => <Dialer width={text('width', '2rem')} />;
