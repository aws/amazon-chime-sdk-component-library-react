// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { select } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Flex from '../Flex';
import Select from './';
import SelectDocs from './Select.mdx';

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

export const BasicSelect = () => {
  return (
    <Flex layout="fill-space-centered">
      <StyledSelect
        value={select(
          'value',
          options.map((option) => option.value),
          'no_fruit_selected'
        )}
        options={options}
        aria-label="basic select input"
        onChange={(e: any) => {
          console.log(e.target.value);
        }}
      />
    </Flex>
  );
};

BasicSelect.story = {
  name: 'Basic select',
};

export default {
  title: 'UI Components/Form/Select',
  parameters: {
    docs: {
      page: SelectDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Select,
};
