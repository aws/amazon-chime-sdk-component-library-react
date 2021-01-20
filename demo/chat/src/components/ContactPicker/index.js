// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import Select from 'react-select';

export const MultiSelect = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (selections) => props.onChange(selections);

  const getCustomStyles = () => {
    const { theme } = props;
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        transition: 'background-color .05s ease-in',
        backgroundColor: state.isFocused ? `${theme.colors.primary.light}` : `${theme.colors.greys.white}`,
        color: state.isFocused ? `${theme.colors.greys.white}` : `${theme.colors.greys.grey70}`,
        padding: 16,
        '&:first-of-type': {
           borderRadius:  `${theme.radii.default} ${theme.radii.default} 0 0`
        },
        '&:last-of-type': {
          borderRadius:  `0 0 ${theme.radii.default} ${theme.radii.default}`
        },
        '&:hover': {
          backgroundColor: `${theme.colors.primary.light}`,
          color: `${theme.colors.greys.white}`
        }
      }),

      menu: (provided) => ({
        ...provided,
        marginBottom: '2rem',
        boxShadow: 'none',
        position: 'relative'
      }),

      control: (provided) => ({
        ...provided,
        boxShadow: '0 0.0625rem 0.0625rem 0 rgba(0, 0, 0, 0.1)',
        margin: '2rem 0',
        background: `${theme.colors.greys.white}`,
        border: `0.03125rem solid ${theme.colors.greys.grey30}`,
        borderRadius: theme.radii.default,
        color: `${theme.colors.greys.grey80}`,
        fontSize: `${theme.fontSizes.text.fontSize}`,
        lineHeight: `${theme.fontSizes.text.lineHeight}`,
        '&:focus-within': {
          boxShadow:  `0 0 0 0.125rem ${theme.colors.primary.lightest}`
        },
        '&:hover': {
          borderColor: 'none',
        }
      }),
      menuList: () => ({
        padding: 0,
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.1)'

      }),
      multiValue: (provided) => ({
        ...provided,
        backgroundColor: `${theme.colors.primary.light}`,
        borderRadius: '1rem',
        color: `${theme.colors.greys.white}`,
      }),
      multiValueLabel: (provided) => ({
        ...provided,
        color: `${theme.colors.greys.white}`,
        fontWeight: 'bolder',
      })
    }
    return customStyles;
  };

  const onInputChange = (inputValue, { action }) => {
    switch (action) {
      case 'input-change':
        setInputValue (inputValue);
        return;
      case 'set-value':
        setInputValue ('');
        return;
      default:
        return;
    }
  }

  return (
    <Select
      closeMenuOnSelect={false}
      components={{
        DropdownIndicator:() => null,
        IndicatorSeparator: () => null,
      }}
      defaultMenuIsOpen
      inputValue={inputValue}
      isSearchable
      onChange={handleChange}
      onInputChange={onInputChange}
      hideSelectedOptions
      menuIsOpen
      options={props.options.filter(o => o.label && o.value)}
      styles={getCustomStyles()}
      captureMenuScroll={false}
    />
  );
};

export default withTheme(MultiSelect);
