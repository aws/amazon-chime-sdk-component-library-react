// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseStyles, baseSpacing, BaseProps } from '../../Base';
import { MessageProps } from '../Message';

interface StyledMessageProps extends MessageProps {}

export const StyledMessage = styled.div<StyledMessageProps>`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  font-size: 0.65rem;
  margin-left: 1rem;
  align-items: center;

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledMessageContent = styled.div<StyledMessageProps>`
  background-color: ${props => props.theme.chatMessage[props.variant].bgd};
  padding: 0.625rem 1rem;
  border-radius: 4px;
  width: fit-content;
  color: ${props => props.theme.chatMessage[props.variant].fontColor};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  line-height: 20px;
  width: fit-content;
  max-width: 70.6%;
  font-size: 0.875rem;

  & .ch-sender-name {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & svg {
    height: 9px;
    width: 4px;
    position: absolute;
    margin-top: -3px;
    margin-left: -20px;

    & .ch-chat-caret {
      fill: ${props => props.theme.chatMessage[props.variant].bgd}
    }
  }
`;

export const StyledMessageInfo = styled.div`
  display: flex;
  margin-right: 0.5rem;
  margin-left: auto;
  color: ${props => props.theme.chatMessage.container.fontColor};
  align-items: center;

  & .ch-more-options {
    border-radius: 50%;
  }

  & button:hover .ch-more-options {
    background-color: ${props => props.theme.buttons.icon.hover.bgd};

    & g {
      fill: ${props => props.theme.buttons.icon.hover.text};
    }
  }

  & button:focus .ch-more-options {
    border: 1px solid ${props => props.theme.colors.primary.dark};
    border-radius: 50%;
  }

  & .ch-more-options g {
    fill: ${props => props.theme.chatMessage.container.fontColor};
  }

  & .ch-more-options.isOpen {
    background-color: ${props => props.theme.buttons.icon.active.bgd};
    border-radius: 50%;

    & g {
      fill: ${props => props.theme.buttons.icon.active.text};
    }
  }
`;