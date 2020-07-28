// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import Svg from '../Svg';
import { MicrophoneProps } from './';

export const StyledSvg = styled(Svg)<MicrophoneProps>`
  ${props =>
    props.poorConnection ? `color: ${props.theme.colors.error.light}` : ''}
`;
