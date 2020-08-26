// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled, { keyframes } from 'styled-components';

import { baseStyles, baseSpacing } from '../Base';
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


export const StyledInfiniteList = styled.ul<InfiniteListProps>`
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
