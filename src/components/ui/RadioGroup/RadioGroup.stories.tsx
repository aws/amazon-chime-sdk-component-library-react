// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { RadioGroup } from './';
import RadioGroupDocs from './RadioGroup.mdx';
import Flex from '../Flex';
import Like from '../icons/Like';
import Dislike from '../icons/Dislike';

export default {
  title: 'UI Components/Form/RadioGroup',
  parameters: {
    docs: {
      page: RadioGroupDocs.parameters.docs.page().props.children.type,
    },
  },
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
  <Flex layout="fill-space-centered">
    <RadioGroup
      options={options}
      value="monkeynuts"
      onChange={() => console.log('change')}
    />
  </Flex>
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

export const _RadioGroupIcon = () => (
  <Flex layout="fill-space-centered">
    <RadioGroup
      options={optionWithIcons}
      value="like"
      onChange={() => console.log('change')}
    />
  </Flex>
);

_RadioGroup.story = {
  name: 'RadioGroup',
};

_RadioGroupIcon.story = {
  name: 'RadioGroup with Icon',
};
