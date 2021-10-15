// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../Base';
import { HeadingProps } from './';

export const StyledHeading = styled.h1<HeadingProps>`
  display: block;
  margin: 0;

  font-size: ${(props) =>
    props.theme.fontSizes[`h${props.level}`].mobile.fontSize};
  font-weight: ${(props) =>
    props.theme.fontSizes[`h${props.level}`].mobile.fontWeight};
  line-height: ${(props) =>
    props.theme.fontSizes[`h${props.level}`].mobile.lineHeight};

  ${({ theme }) => theme.mediaQueries.min.md} {
    font-size: ${(props) => props.theme.fontSizes[`h${props.level}`].fontSize};
    font-weight: ${(props) =>
      props.theme.fontSizes[`h${props.level}`].fontWeight};
    line-height: ${(props) =>
      props.theme.fontSizes[`h${props.level}`].lineHeight};
  }

  ${baseSpacing}
  ${baseStyles}
`;
