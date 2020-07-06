// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import styled from 'styled-components';

//TODO: Having issue using <ul><li> with passing clickHandler, use <select> temporarily
const StyledContainer = styled.select`
  display: block;
  padding: 0.3rem;
  background-color: #fff;
  min-width: 10rem;
  overflow: auto;
  border: 0.1rem solid #ced4da;
`;

const StyledItem = styled.option`
  &:hover {
    background-color: #ced4da;
  }
`;

export interface OptionItem {
  name: string;
  label: string;
}

interface Props {
  options: OptionItem[];
  onChange: (_: string) => void;
}

const Dropdown: React.FC<Props> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
    setSelectedValue(e.target.value);
  }
  const listItems = options.map(option =>
    <StyledItem value={option.name} key={option.name}>
      {option.label}
    </StyledItem>
  );

  return (
    <StyledContainer value={selectedValue} onChange={handleChange}>
      {listItems}
    </StyledContainer>
  );
};

export default Dropdown;
