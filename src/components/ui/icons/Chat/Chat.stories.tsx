// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Chat from '.';
import ChatIconDocs from './Chat.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Chat',
  parameters: {
    docs: {
      page: ChatIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Chat,
};

export const _Chat = () => (
  <Flex layout="fill-space-centered">
    <Chat width={text('width', '2rem')} />
  </Flex>
);
