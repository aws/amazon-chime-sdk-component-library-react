// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

import { baseSpacing, baseStyles } from '../Base';
import { FlexProps } from './';

export const fillSpace = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const fillSpaceCentered = css`
  ${fillSpace};
  align-items: center;
  justify-content: center;
`;

export const equalColumns = css`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: stretch;

  > * {
    flex-grow: 1;
    flex-basis: 50%;
  }
`;

export const stack = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }
`;

const layoutMap = {
  'fill-space': fillSpace,
  'fill-space-centered': fillSpaceCentered,
  'equal-columns': equalColumns,
  stack,
};

export const StyledFlex = styled.div<FlexProps>`
  align-items: ${(props) => props.alignItems};
  display: ${(props) => (props.container ? 'flex' : 'block')};
  flex: ${(props) => props.flex || ''};
  flex-basis: ${(props) => props.flexBasis};
  flex-direction: ${(props) => props.flexDirection};
  flex-grow: ${(props) => props.flexGrow || ''};
  flex-shrink: ${(props) => props.flexShrink};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};

  // layout variants
  ${(props) => !!props.layout && layoutMap[props.layout]}

  ${baseSpacing}
  ${baseStyles}
`;
