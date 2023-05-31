// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Chat from '.';

export default {
  title: 'UI Components/Icons/Chat',
  component: Chat,
};

export const _Chat = (args) => <Chat {...args} />;

_Chat.argTypes = {
  width: { control: 'text' },
};

_Chat.args = {
  width: '2rem',
};

_Chat.story = {
  name: 'Chat',
};
