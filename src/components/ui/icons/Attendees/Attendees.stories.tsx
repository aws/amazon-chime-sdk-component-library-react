// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Attendees from '.';

export default {
  title: 'UI Components/Icons/Attendees',
  component: Attendees,
};

export const _Attendees = (args) => <Attendees {...args} />;

_Attendees.argTypes = {
  width: { control: 'text' },
};

_Attendees.args = {
  width: '2rem',
};

_Attendees.story = {
  name: 'Attendees',
};
