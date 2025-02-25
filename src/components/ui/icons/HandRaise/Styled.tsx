// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { defaultStyledConfig } from '../../../../utils/style';

export const StyledCircle = styled.circle.withConfig(defaultStyledConfig)`
  fill: ${(props) => props.theme.colors.primary.main};
`;
