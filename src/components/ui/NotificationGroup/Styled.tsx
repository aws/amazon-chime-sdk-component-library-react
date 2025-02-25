// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { defaultStyledConfig } from '../../../utils/style';

export const StyledNotificationGroup = styled.div.withConfig(
  defaultStyledConfig
)`
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${(props) => props.theme.zIndex.notificationGroup};
  pointer-events: none;
`;
