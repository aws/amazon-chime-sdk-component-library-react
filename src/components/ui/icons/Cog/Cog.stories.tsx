// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Cog from '.';
import CogIconDocs from './Cog.mdx';

export default {
  title: 'Icons/Cog',
  parameters: {
    docs: {
      page: CogIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Cog
};

export const _Cog = () => <Cog width={text('width', '2rem')} />;
