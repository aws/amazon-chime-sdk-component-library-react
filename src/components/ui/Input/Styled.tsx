// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { baseSpacing, baseStyles } from '../Base';

import { InputWrapperProps } from './InputWrapper';

const getPadding = (props: InputWrapperProps) => {
  const { sizing, leadingIcon } = props;
  return sizing === 'sm'
    ? `0.125rem 1.75rem 0.125rem ${leadingIcon ? '1.3125rem' : '0.5rem'}`
    : `0.34375rem 1.75rem 0.34375rem ${leadingIcon ? '1.3125rem' : '0.5rem'}`;
};

export const StyledInputWrapper = styled.span<InputWrapperProps>`
  position: relative;

  > .ch-icon {
    position: absolute;
    width: 1rem;
    left: 0.1875rem;
    position: absolute;
    top: 54%;
    transform: translateY(-50%);
  }

  > input {
    padding: ${(props) => getPadding(props)};
  }
`;

export const StyledInput = styled.input`
  align-items: center;
  display: flex;
  letter-spacing: -0.005625rem;
  transition: box-shadow 0.05s ease-in;
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  color: ${(props) => props.theme.inputs.fontColor};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};

  &::placeholder {
    color: ${(props) => props.theme.inputs.placeholder};
  }

  &:focus,
  &[aria-invalid='true']:focus {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
    outline: none;
  }

  &[aria-invalid='true'] {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }

  // Hides native clear button
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  ${baseSpacing}
  ${baseStyles}
`;

interface ClearProps {
  active: boolean;
}

export const StyledClear = styled.button<ClearProps>`
  position: absolute;
  top: 50%;
  right: 0.125rem;
  transform: translateY(-44%);
  border: none;
  background: none;
  cursor: pointer;
  display: ${(props) => (props.active ? 'block' : 'none')};

  path {
    fill: ${(props) => props.theme.inputs.clearBg};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;
