// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Play from '.';
import PlayIconDocs from './Play.mdx';

export default {
  title: 'Icons/Play',
  parameters: {
    docs: {
      page: PlayIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Play
};

export const _Play = () => <Play width={text('width', '2rem')} />;
