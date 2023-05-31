// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Dislike from '.';

export default {
  title: 'UI Components/Icons/Dislike',
};

export const _Dislike = (args) => <Dislike {...args} />;

_Dislike.argTypes = {
  width: { control: 'text' },
};

_Dislike.args = {
  width: '2rem',
};

_Dislike.story = {
  name: 'Dislike',
};
