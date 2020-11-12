// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { baseStyles, baseSpacing, BaseProps } from '../../Base';
import { MessageVariant } from './ChatBubbleContainer';

interface StyledChatBubbleContainerProps extends BaseProps {
  actions?: any;
}

interface StyledChatBubbleProps extends BaseProps {
  variant: MessageVariant;
  editable?: boolean;
}

export const StyledChatBubbleContainer = styled.div<
  StyledChatBubbleContainerProps
>`
  display: flex;
  flex-direction: row;
  font-size: 0.65rem;
  margin-left: 1rem;
  align-items: center;
  background-color: ${(props) => props.theme.chatBubble.container.bgd};
  width: 100%;

  .ch-timestamp {
    padding-right: ${(props) => (props.actions ? '1rem' : '2.5rem')};
  }

  .ch-popover-toggle {
    height: 1.5rem;
  }

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledChatBubble = styled.div<StyledChatBubbleProps>`
  background-color: ${(props) => props.theme.chatBubble[props.variant].bgd};
  padding: 0.625rem 1rem;
  border-radius: 4px;
  width: fit-content;
  color: ${(props) => props.theme.chatBubble[props.variant].fontColor};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  line-height: 20px;
  width: ${(props) => (props.editable ? '100%' : 'fit-content')};
  max-width: 70.6%;
  font-size: 0.875rem;
  position: relative;
  margin-bottom: ${(props) => (props.editable ? '4rem' : 'unset')};

  & .ch-sender-name {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & svg {
    position: absolute;
    height: 19px;
    width: 11px;
    margin-top: -14px;
    margin-left: -25px;

    & .ch-chat-bubble-tail {
      fill: ${(props) => props.theme.chatBubble[props.variant].bgd};
    }
  }

  .ch-input {
    width: 100%;
  }

  .ch-edit-buttons {
    position: absolute;
    margin-top: 1rem;
    display: flex;
    flex-direction: row-reverse;
    width: 10rem;
    justify-content: space-between;
  }

  ${baseSpacing};
  ${baseStyles};
`;

export const StyledChatBubbleInfo = styled.div`
  display: flex;
  margin-right: 0.5rem;
  margin-left: auto;
  color: ${(props) => props.theme.chatBubble.container.fontColor};
  align-items: center;

  & .ch-message-actions {
    border: 1px solid transparent;
    border-radius: 50%;
  }

  & button:hover .ch-message-actions {
    background-color: ${(props) => props.theme.buttons.icon.hover.bgd};

    & g {
      fill: ${(props) => props.theme.buttons.icon.hover.text};
    }
  }

  & button:focus .ch-message-actions {
    border: 1px solid ${(props) => props.theme.colors.primary.dark};
    border-radius: 50%;
  }

  & .ch-message-actions g {
    fill: ${(props) => props.theme.chatBubble.container.fontColor};
  }

  & .ch-message-actions.isOpen {
    background-color: ${(props) => props.theme.buttons.icon.active.bgd};
    border-radius: 50%;

    & g {
      fill: ${(props) => props.theme.buttons.icon.active.text};
    }
  }
`;
