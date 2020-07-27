// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Hamburger from '.';
import HamburgerIconDocs from './Hamburger.mdx';

export default {
  title: 'Icons/Hamburger',
  parameters: {
    docs: {
      page: HamburgerIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Hamburger
};

export const _Hamburger = () => <Hamburger width={text('width', '2rem')} />;
