// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import EmojiPicker from '.';

export default {
  title: 'UI Components/Icons/EmojiPicker',
  component: EmojiPicker,
};

export const _EmojiPicker = (args) => <EmojiPicker {...args} />;

_EmojiPicker.argTypes = {
  width: { control: 'text' },
};

_EmojiPicker.args = {
  width: '2rem',
};

_EmojiPicker.story = {
  name: 'EmojiPicker',
};
