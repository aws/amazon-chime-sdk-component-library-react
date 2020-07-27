// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import CheckRound from '.';
import CheckRoundIconDocs from './CheckRound.mdx';

export default {
  title: 'Icons/CheckRound',
  parameters: {
    docs: {
      page: CheckRoundIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: CheckRound
};

export const _CheckRound = () => <CheckRound width={text('width', '2rem')} />;
