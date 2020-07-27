// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { text } from '@storybook/addon-knobs';
import Chat from '.';
import ChatIconDocs from './Chat.mdx';

export default {
  title: 'Icons/Chat',
  parameters: {
    docs: {
      page: ChatIconDocs.parameters.docs.page().props.children.type
    }
  },
  component: Chat
};

export const _Chat = () => <Chat width={text('width', '2rem')} />;
