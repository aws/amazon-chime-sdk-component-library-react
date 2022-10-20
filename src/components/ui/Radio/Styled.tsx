// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { absoluteCenter, visuallyHidden } from '../../../utils/style';

export const HiddenRadio = styled.input`
  ${visuallyHidden};

  &[aria-invalid='true'] + .ch-radio {
    border: ${(props) => props.theme.inputs.error.border};
    box-shadow: ${(props) => props.theme.inputs.error.shadow};
  }
`;

export const StyledRadioWrapper = styled.span`
  > label {
    margin-left: 0.5rem;
  }
`;
export const StyledRadio = styled.div<any>`
  background-color: ${(props) => props.theme.inputs.bgd};
  border: ${(props) => props.theme.inputs.border};
  border-radius: ${(props) => props.theme.radii.circle};
  box-shadow: ${(props) => props.theme.inputs.shadow};
  margin-bottom: -0.1875rem;
  transition: box-shadow 0.05s ease-in;

  ${HiddenRadio}:checked ~ & {
    background-color: ${(props) => props.theme.inputs.checked.bgd};
    border: ${(props) => props.theme.inputs.checked.border};
    box-shadow: ${(props) => props.theme.inputs.checked.shadow};
  }

  ${HiddenRadio}:focus ~ & {
    border: ${(props) => props.theme.inputs.focus.border};
    box-shadow: ${(props) => props.theme.inputs.focus.shadow};
  }
`;

export const StyledRadioLabel = styled(StyledRadio)<any>`
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 1rem;

  &:after {
    background-color: ${(props) =>
      props.checked
        ? props.theme.inputs.checked.fontColor
        : props.theme.inputs.bgd};
    border-radius: ${(props) => props.theme.radii.circle};
    content: '';
    display: block;
    height: 0.375rem;
    padding: 0.03125rem;
    width: 0.375rem;
    ${absoluteCenter};
  }
`;

export const StyledRadioIcon = styled(StyledRadio)<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-color: ${(props) => props.theme.colors.greys.white};
  box-shadow: none;
  margin: 0.1rem;

  ${HiddenRadio}:checked ~ & {
    svg {
      stroke: ${(props) => props.theme.colors.greys.white};
    }
  }
`;
