// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { fadeAnimation } from '../../../utils/animations';
import { defaultStyledConfig } from '../../../utils/style';
import { Props } from './';

export const StyledUserActivityManager = styled.div.withConfig(
  defaultStyledConfig
)<Props>`
  z-index: ${(props) =>
    props.isActive ? props.theme.zIndex.controlBar : '-10'};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};

  &.ch-active {
    animation: ${fadeAnimation} 0.25s ease 0s forwards;
  }
`;
