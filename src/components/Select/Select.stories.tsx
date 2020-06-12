import React from 'react';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Flex from '../Flex';
import Select from './';

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
  }
];

const StyledSelect = styled(Select)`
  width: 10rem;
`;

export const BasicInput = () => {
  return (
    <Flex layout="fill-space-centered">
    <StyledSelect
      value={text('value', "no_fruit_selected")}
      options={options}
      aria-label="basic select input"
      onChange={(e: any) => { console.log(e.target.value)} }
    />
    </Flex>
  );
};

export default {
  title: 'Form/Select',
};
