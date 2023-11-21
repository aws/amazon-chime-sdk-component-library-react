// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import LeaveMeeting from '.';

export default {
  title: 'UI Components/Icons/LeaveMeeting',
  component: LeaveMeeting,
};

export const _LeaveMeeting = (args) => <LeaveMeeting {...args} />;

_LeaveMeeting.argTypes = {
  width: { control: 'text' },
};

_LeaveMeeting.args = {
  width: '2rem',
};

_LeaveMeeting.story = {
  name: 'LeaveMeeting',
};
