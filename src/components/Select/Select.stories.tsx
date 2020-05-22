import React from 'react';
import { text } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Flex from '../Flex';
import Select from './';

const options = ["select an option", "bananas", "oranges", "grapefruit" ]

const StyledSelect = styled(Select)`
  width: 10rem;
`;

export const BasicInput = () => {
  return (
    <Flex layout="fill-space-centered">
    <StyledSelect
      value={text('value', options[0])}
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
