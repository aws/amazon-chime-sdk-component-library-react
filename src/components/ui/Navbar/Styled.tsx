// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../Base';
import Flex from '../Flex';
import { NavbarProps } from '.';
import { NavbarItemProps } from './NavbarItem';

export const StyledHeader = styled.div`
  display: flex;
  height: 3rem;
  align-items: center;
  border-bottom: ${({ theme }) =>
    `0.03125rem solid ${theme.navbar.headerBorder}`};
  padding: 1rem;

  .ch-title {
    flex: 1;
  }

  .ch-btn-close {
    margin-left: auto;
    margin-right: 1rem;
  }

  ${({ theme }) => theme.mediaQueries.min.md} {
    display: none;
  }
`;

export const StyledNavbarItem = styled.div<Partial<NavbarItemProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.25rem;
  min-height: 3rem;
  flex-direction: column;
  padding: 0 0.25rem;

  .ch-navigation-bar-item-label {
    text-align: center;
    display: ${({ showLabel }) => (showLabel ? 'block' : 'none')};
    font-size: ${({ theme }) => theme.fontSizes.footnote.fontSize};
    width: 100%;
    padding: 0 0.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const StyledNavbar = styled(Flex)<NavbarProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 100%;
  color: ${(props) => props.theme.navbar.text};
  background-color: ${({ theme }) => theme.navbar.bgd};
  width: 4.25rem;
  padding-top: 1rem;

  ${({ theme, responsive }) => theme.mediaQueries.max.md} {
    width: ${(props) => (props.responsive ? `20rem` : `4.25rem;`)};
    padding-top: ${(props) => (props.responsive ? `0` : `1rem`)};

    ${StyledHeader} {
      display: ${(props) => (props.responsive ? `flex` : `none`)};
    }

    ${StyledNavbarItem} {
      ${(props) =>
        props.responsive &&
        ` 
        width: auto;
        flex-direction: row;

        .ch-navigation-bar-item-label {
          font-size: 1rem;
          text-align: left;
          margin-left: 1.5rem;
          margin-bottom: 0;
          display: block;
        }`};
    }
  }

  ${baseStyles}
  ${baseSpacing}
`;
