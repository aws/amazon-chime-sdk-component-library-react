// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { ellipsis } from '../../../utils/style';
import { baseSpacing, baseStyles } from '../Base';

export const StyledRoster = styled.aside`
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  overflow-y: auto;
  background-color: ${(props) => props.theme.roster.bgd};
  box-shadow: 1rem 1rem 3.75rem 0 rgba(0, 0, 0, 0.1);
  border-left: 0.0625rem solid ${(props) => props.theme.roster.containerBorder};
  border-right: 0.0625rem solid ${(props) => props.theme.roster.containerBorder};

  ${({ theme }) => theme.mediaQueries.min.md} {
    width: ${(props) => props.theme.roster.maxWidth};
  }

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledTitle = styled.span`
  display: inline-block;
  margin: 0 0.625rem 0 0;
  font-weight: 600;
  font-size: 0.675rem;
  color: ${(props) => props.theme.roster.secondaryText};
`;

export const StyledGroupWrapper = styled.div`
  margin: 0 0.5rem;

  & + & {
    margin-top: 1rem;
  }

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledGroup = styled.div`
  background-color: ${(props) => props.theme.roster.fgd};
  border-radius: ${(props) => props.theme.radii.default};

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledHeader = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 0.0625rem solid ${(props) => props.theme.roster.headerBorder};

  .ch-title {
    font-size: 0.875rem;
    color: ${(props) => props.theme.roster.primaryText};
    ${(props) => (props.isSearching ? 'opacity: 0;' : '')}
    ${ellipsis};
  }

  .ch-badge {
    margin-left: 0.5rem;
    ${(props) => (props.isSearching ? 'opacity: 0;' : '')}
  }

  .ch-buttons {
    margin-left: auto;
    display: flex;

    > * {
      margin-left: 0.5rem;
    }

    ${(props) => (props.isSearching ? 'opacity: 0;' : '')}
  }

  .ch-search-wrapper {
    position: absolute !important;
    bottom: 0.75rem;
    left: 0.5rem;
    right: 0.5rem;

    .ch-search-input {
      flex: 1;

      input {
        width: 100%;
      }
    }

    .ch-search-close {
      margin-left: 0.5rem;
    }
  }

  .ch-navigation-icon {
    margin-right: 0.5rem;
    margin-left: -0.5rem;

    ${({ theme }) => theme.mediaQueries.min.md} {
      display: none;
    }
  }

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledName = styled.div`
  flex-grow: 1;
  min-width: 0;
  line-height: 1.5;

  .ch-name {
    ${ellipsis};
    font-size: 0.875rem;
    color: ${(props) => props.theme.roster.primaryText};
  }

  .ch-subtitle {
    ${ellipsis};
    font-size: 0.65rem;
    color: ${(props) => props.theme.roster.secondaryText};
  }
`;
