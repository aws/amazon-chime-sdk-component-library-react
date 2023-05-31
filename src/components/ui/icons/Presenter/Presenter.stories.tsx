// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Presenter from '.';

export default {
  title: 'UI Components/Icons/Presenter',
  component: Presenter,
};

export const _Presenter = (args) => <Presenter {...args} />;

_Presenter.argTypes = {
  width: { control: 'text' },
};

_Presenter.args = {
  width: '2rem',
};

_Presenter.story = {
  name: 'Presenter',
};
