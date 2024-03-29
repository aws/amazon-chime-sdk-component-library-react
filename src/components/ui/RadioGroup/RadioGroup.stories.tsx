// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { RadioGroup } from './';
import Like from '../icons/Like';
import Dislike from '../icons/Dislike';

export default {
  title: 'UI Components/Form/RadioGroup',
  component: RadioGroup,
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

const optionWithIcons = [
  {
    value: 'like',
    label: 'Like',
    icon: <Like width="2rem" />,
  },
  {
    value: 'dislike',
    label: 'Dislike',
    icon: <Dislike width="2rem" />,
  },
];

export const _RadioGroupWithIcon = () => (
  <RadioGroup
    options={optionWithIcons}
    value="like"
    onChange={() => console.log('change')}
  />
);

_RadioGroup.story = {
  name: 'RadioGroup',
};

_RadioGroupWithIcon.story = {
  name: 'RadioGroup with Icon',
};
