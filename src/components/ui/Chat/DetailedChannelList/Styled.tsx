// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../../Base';
import { DetailedChannelListProps } from './index';
import { DetailedChannelItemProps } from './DetailedChannelItem';

export const StyledDetailedChannelList = styled.ul<DetailedChannelListProps>`
  display: flex;
  flex-direction: column;
  width: 20rem;

  ${baseStyles}
  ${baseSpacing}
`;

export const StyledDetailedChannelItem = styled.li<DetailedChannelItemProps>`
  position: relative;

  ${baseStyles};
  ${baseSpacing};

  & .ch-channel-button {
    display: grid;
    grid-template-rows: 17px 1fr max-content;
    grid-gap: 16px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.channelList.bgd};
    color: ${(props) => props.theme.channelList.fontColor};
    border-bottom: 0.5px solid #d3d3d3;
    font-family: ${(props) => props.theme.fonts.body};

    &:hover {
      background-color: ${(props) => props.theme.channelList.hover.bgd};
    }

    &:active {
      background-color: ${(props) => props.theme.channelList.active.bgd};
      color: ${(props) => props.theme.channelList.active.fontColor};
    }

    &:focus {
      border: ${(props) => props.theme.channelList.focus.border};
    }
  }

  & .ch-label {
    font-weight: bold;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 85%;
  }

  & .channel-message {
    grid-row: span 2;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 90%;
  }

  & .channel-message-time {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    font-size: 8px;
    max-width: 15%;
    text-align: right;
  }

  & .ch-unread-badge {
    display: ${(props) => (props.unread ? 'inline' : 'none')};
    position: absolute;
    z-index: 2;
    margin: 0;
    left: 5px;
    top: 10px;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  &.ch-selected .ch-channel-button {
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.channelList.selected.fontColor};

    &:focus {
      border: ${(props) => props.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    margin: 0.5rem 0;
    height: 1.5rem;
    border-radius: 50%;

    .ch-channel-actions {
      border: 1px solid transparent;
    }

    & g {
      fill: ${(props) => props.theme.channelList.active.fontColor};
    }

    & button:focus .ch-channel-actions {
      border: ${(props) => props.theme.channelList.focus.selectedBorder};
      border-radius: 50%;
    }

    &:hover,
    &:active {
      background-color: ${(props) =>
        props.theme.channelList.iconButton.activeBgd};

      & g {
        fill: ${(props) => props.theme.colors.primary.light};
      }
    }
  }
`;

export default StyledDetailedChannelList;
