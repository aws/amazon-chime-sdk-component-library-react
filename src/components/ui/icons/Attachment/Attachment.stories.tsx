// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Attachment from '.';

export default {
  title: 'UI Components/Icons/Attachment',
  component: Attachment,
};

export const _Attachment = (args) => <Attachment {...args} />;

_Attachment.argTypes = {
  width: { control: 'text' },
};

_Attachment.args = {
  width: '2rem',
};

_Attachment.story = {
  name: 'Attachment',
};
