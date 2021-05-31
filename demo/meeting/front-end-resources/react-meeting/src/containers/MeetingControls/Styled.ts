// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

interface StyledProps {
  active: boolean;
}

export const StyledControls = styled.div<StyledProps>`
  opacity: ${props => (props.active ? '1' : '0')};
  transition: opacity 250ms ease;

  @media screen and (max-width: 768px) {
    opacity: 1;
  }

  .controls-menu {
    width: 100%;
    position: static;
  }
`;
