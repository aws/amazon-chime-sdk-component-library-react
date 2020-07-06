// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { RadioGroup } from './';

export default {
  title: 'Form/RadioGroup',
};

const options = [
  {
    value: 'bananas',
    label: 'Bananas',
  },
  {
    value: 'monkeynuts',
    label: 'Monkeynuts',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
];

export const _RadioGroup = () => (
  <RadioGroup
    options={options}
    value="monkeynuts"
    onChange={() => console.log('change')}
  />
);

_RadioGroup.story = {
  name: 'RadioGroup',
};
