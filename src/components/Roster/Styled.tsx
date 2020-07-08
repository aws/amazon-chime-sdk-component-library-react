// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../Base';
import { ellipsis } from '../../utils/style';

export const StyledRoster = styled.div`
  width: 100%;
  max-width: ${props => props.theme.roster.maxWidth};
  height: 100%;
  padding-bottom: 1rem;
  overflow-y: auto;
  background-color: ${props => props.theme.roster.bgd};

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledTitle = styled.span`
  display: inline-block;
  margin: 0 0.625rem 0 0;
  font-weight: 600;
  font-size: 0.675rem;
  color: ${props => props.theme.roster.secondaryText};
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
  border-radius: ${props => props.theme.radii.default};
  background-color: ${props => props.theme.roster.fgd};

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledHeader = styled.div<any>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 0.0625rem solid ${props => props.theme.roster.headerBorder};

  .title {
    font-size: 0.875rem;
    color: ${props => props.theme.roster.primaryText};
    ${props => (props.isSearching ? 'opacity: 0;' : '')}
    ${ellipsis};
  }

  .badge {
    margin-left: 0.5rem;
    ${props => (props.isSearching ? 'opacity: 0;' : '')}
  }

  .buttons {
    margin-left: auto;
    ${props => (props.isSearching ? 'opacity: 0;' : '')}
  }

  .search-wrapper {
    position: absolute !important;
    bottom: 0.75rem;
    left: 0.5rem;
    right: 0.5rem;

    .search-input {
      flex: 1;

      input {
        width: 100%;
      }
    }

    .search-close {
      margin-left: 0.5rem;
    }
  }

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledName = styled.div`
  flex-grow: 1;
  min-width: 0;
  line-height: 1.5;

  .name {
    ${ellipsis};
    font-size: 0.875;
    color: ${props => props.theme.roster.primaryText};
  }

  .subtitle {
    ${ellipsis};
    font-size: 0.65rem;
    color: ${props => props.theme.roster.secondaryText};
  }
`;
