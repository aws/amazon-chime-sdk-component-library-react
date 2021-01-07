// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Presenter from '.';
import PresenterIconDocs from './Presenter.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Presenter',
  parameters: {
    docs: {
      page: PresenterIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Presenter,
};

export const _Presenter = () => (
  <Flex layout="fill-space-centered">
    <Presenter width={text('width', '2rem')} />
  </Flex>
);
