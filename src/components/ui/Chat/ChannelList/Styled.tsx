// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseSpacing, baseStyles } from '../../Base';
import { ChannelListProps } from '.';
import { ChannelItemProps } from './ChannelItem';

export const StyledChannelList = styled.ul<ChannelListProps>`
  display: flex;
  flex-direction: column;
  width: 20rem;

  ${baseStyles}
  ${baseSpacing}
`;

export const StyledChannelItem = styled.li<ChannelItemProps>`
  position: relative;

  ${baseStyles};
  ${baseSpacing};

  & .ch-channel-button {
    width: 100%;
    height: 100%;
    padding: 11px 0;
    background-color: ${(props) => props.theme.channelList.bgd};
    border: none;
    border-radius: unset;
    justify-content: left;
    padding-left: 1rem;
    color: ${(props) => props.theme.channelList.fontColor};
    border: ${(props) => props.theme.channelList.border};
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
    padding-left: 1.5rem;
  }

  & .ch-unread-badge {
    display: ${(props) => (props.unread ? 'inline' : 'none')};
    position: absolute;
    z-index: 2;
    top: 12px;
    left: 5px;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  &.ch-unread .ch-channel-button {
    font-weight: bold;
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

  & .ch-detailed-channel {
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

  & .ch-detailed-channel-name {
    font-weight: bold;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 85%;
  }

  & .ch-detailed-channel-message {
    grid-row: span 2;
    padding-left: 25px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    max-width: 90%;
  }

  & .ch-detailed-channel-message-time {
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    font-size: 8px;
    max-width: 15%;
    text-align: right;
  }

  & .ch-unread-badge-detailed {
    display: ${(props) => (props.unread ? 'inline' : 'none')};
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 5px;
    background-color: ${(props) => props.theme.colors.primary.light};
  }

  &.ch-selected .ch-detailed-channel {
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.channelList.selected.fontColor};

    &:focus {
      border: ${(props) => props.theme.channelList.focus.selectedBorder};
    }
  }

  & .ch-popover-toggle-detailed {
    position: absolute;
    top: 1.75rem;
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

export default StyledChannelList;
