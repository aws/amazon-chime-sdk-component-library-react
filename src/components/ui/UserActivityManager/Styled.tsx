// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from "styled-components";

import { fadeAnimation } from '../../../utils/animations';
import { Props } from './';

export const StyledUserActivityManager = styled.div<Props>`
  z-index: ${props => props.isActive ? props.theme.zIndex.controlBar : "-10"};
  visibility: ${props => props.isActive ? "visible" : "hidden"};

  &.active {
    animation: ${fadeAnimation} 0.25s ease 0s forwards;
  }
`;
