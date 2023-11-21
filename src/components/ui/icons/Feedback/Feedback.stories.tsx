// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Feedback from '.';

export default {
  title: 'UI Components/Icons/Feedback',
  component: Feedback,
};

export const _Feedback = (args) => <Feedback {...args} />;

_Feedback.argTypes = {
  width: { control: 'text' },
};

_Feedback.args = {
  width: '2rem',
};

_Feedback.story = {
  name: 'Feedback',
};
