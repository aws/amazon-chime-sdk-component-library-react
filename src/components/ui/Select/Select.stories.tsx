// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import Flex from '../Flex';
import Select from './';

export default {
  title: 'UI Components/Form/Select',
  component: Select,
};

const options = [
  {
    value: 'no_fruit_selected',
    label: 'Select an option',
  },
  {
    value: 'bananas',
    label: 'Bananas',
  },
  {
    value: 'oranges',
    label: 'Oranges',
  },
  {
    value: 'grapefruit',
    label: 'Grapefruit',
  },
];

const StyledSelect = styled(Select)`
  width: 10rem;
`;

export const BasicSelect = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <StyledSelect
        value={args.value}
        options={options}
        aria-label="basic select input"
        onChange={(e: any) => {
          console.log(e.target.value);
        }}
      />
    </Flex>
  );
};

BasicSelect.argTypes = {
  value: {
    control: 'select',
    options: options.map((option) => option.value),
    mapping: options.reduce((mapping, option) => {
      mapping[option.label] = option.value;
      return mapping;
    }, {}),
  },
  options: { table: { disable: true } },
  onChange: { table: { disable: true } },
};

BasicSelect.args = {
  value: 'no_fruit_selected',
};

BasicSelect.story = {
  name: 'Basic select',
};
