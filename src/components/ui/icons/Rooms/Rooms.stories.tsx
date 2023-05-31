// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Rooms from '.';

export default {
  title: 'UI Components/Icons/Rooms',
  component: Rooms,
};

export const _Rooms = (args) => <Rooms {...args} />;

_Rooms.argTypes = {
  width: { control: 'text' },
};

_Rooms.args = {
  width: '2rem',
};

_Rooms.story = {
  name: 'Rooms',
};
