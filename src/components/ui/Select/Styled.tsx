// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';
import { baseSpacing, baseStyles } from '../Base';

export const StyledWrapper = styled.div`
  position: relative;

  .ch-select-icon {
    pointer-events: none;
  }

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledSelectInput = styled.select`
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.inputs.borderRadius};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  color: ${(props) => props.theme.inputs.fontColor};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
  line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
  height: 2rem;
  letter-spacing: -0.005625rem;
  width: 100%;
  padding: 0.375rem 1.5rem 0.375rem 0.5rem;
  transition: box-shadow 0.05s ease-in;
  display: inline-block;
  appearance: none;

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

  ${baseSpacing}
  ${baseStyles}
`;
