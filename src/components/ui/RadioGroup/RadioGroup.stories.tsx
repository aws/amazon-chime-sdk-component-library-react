// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { RadioGroup } from './';
import RadioGroupDocs from './RadioGroup.mdx';

export default {
  title: 'UI Components/Form/RadioGroup',
  parameters: {
    docs: {
      page: RadioGroupDocs.parameters.docs.page().props.children.type
    }
  },
  component: RadioGroup
};

const options = [
  {
    value: 'bananas',
    label: 'Bananas'
  },
  {
    value: 'monkeynuts',
    label: 'Monkeynuts'
  },
  {
    value: 'grapes',
    label: 'Grapes'
  }
];

export const _RadioGroup = () => (
  <RadioGroup
    options={options}
    value="monkeynuts"
    onChange={() => console.log('change')}
  />
);

_RadioGroup.story = {
  name: 'RadioGroup'
};
