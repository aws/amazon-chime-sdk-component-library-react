// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled, { keyframes } from 'styled-components';

import { baseSpacing, baseStyles } from '../../Base';
import { InfiniteListProps } from './';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface StyledInfiniteListProps extends InfiniteListProps {}

export const StyledInfiniteList = styled.ul<StyledInfiniteListProps>`
  background-color: ${(props) => props.theme.chatBubble.container.bgd};
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  /* disable scrolling while fetching */
  &.ch-not-scrollable {
    overflow-y: hidden;
  }

  ${baseSpacing}
  ${baseStyles}

  .ch-spinner {
    margin: 0 auto;
  }

  .ch-spinner svg {
    width: 2rem;
    height: 2rem;
    animation: ${rotate} 2s linear infinite;
    display: block;
  }
`;
