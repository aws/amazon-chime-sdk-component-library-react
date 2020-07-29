// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../Base';
import Flex from '../Flex';
import { NavbarProps } from '.';

export const StyledNavbar = styled(Flex)<NavbarProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20rem;
  max-width: 100%;
  color: ${props => props.theme.navbar.text};
  background-color: ${({ theme }) => theme.navbar.bgd};

  ${({ theme }) => theme.mediaQueries.min.md} {
    width: 4.25rem;
    padding-left: 0;
  }

  ${baseStyles}
  ${baseSpacing}
`;

export const StyledNavbarItem = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;

  ${({ theme }) => theme.mediaQueries.max.xs} {
    margin-left: 0.5rem;

    .ch-navigation-bar-item-label {
      margin-left: 0.625rem;
    }
  }

  ${({ theme }) => theme.mediaQueries.min.md} {
    .ch-navigation-bar-item-label {
      display: none;
    }
    margin-left: 0.5rem;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: 0.03125rem solid ${({ theme }) => theme.navbar.headerBorder};
  padding: 1rem;

  .ch-btn-close {
    margin-left: auto;
    margin-right: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.min.md} {
    display: none;
  }
`;
