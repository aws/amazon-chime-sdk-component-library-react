// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import Svg from '../Svg';
import { MicrophoneProps } from './';

const SvgWithoutMicrophoneProps = ({
  poorConnection,
  muted,
  ...rest
}: MicrophoneProps) => <Svg {...rest} />;

export const StyledSvg = styled(SvgWithoutMicrophoneProps)<MicrophoneProps>`
  ${(props) =>
    props.poorConnection ? `color: ${props.theme.colors.error.light}` : ''}
`;
