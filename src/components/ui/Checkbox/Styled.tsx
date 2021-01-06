// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { visuallyHidden } from '../../../utils/style';
import { StyledCheckboxProps } from './';

export const HiddenCheckbox = styled.input`
  ${visuallyHidden};

  &[aria-invalid='true'] + .ch-checkbox {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }
`;

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.radii.default};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  color: ${(props) => props.theme.inputs.fontColor};
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;
  transition: box-shadow 0.05s ease-in;

  > svg {
    left: -0.03125rem;
    position: absolute;
    transform: scale(1.5);
  }

  ${HiddenCheckbox}:checked ~ & {
    background-color: ${(props) => props.theme.inputs.checked.bgd};
    border: ${(props) => props.theme.inputs.checked.border};
    box-shadow: ${(props) => props.theme.inputs.checked.shadow};
    color: ${(props) => props.theme.inputs.checked.fontColor};
  }

  ${HiddenCheckbox}:focus ~ & {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
  }
`;
