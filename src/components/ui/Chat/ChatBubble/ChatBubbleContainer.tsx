// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes, ReactNode } from 'react';

import { BaseProps } from '../../Base';
import { StyledChatBubbleContainer, StyledChatBubbleInfo } from './Styled';
import PopOver from '../../PopOver';
import { Dots } from '../../icons';

export type Message = {
  /** The displayed text of the message sent. */
  content: string;
  /** The timestamp when the message was originally sent by the sender. */
  createdTimestamp: string;
  /** The timestamp of the last time the message was edited. */
  lastEditedTimestamp?: string;
  /** Determines if a message was redacted (deleted) by a user. */
  redacted: boolean;
  /** The display name of the sender. */
  senderName: string;
  /** The unique identifier of the sender. */
  senderId: string;
};

export type MessageVariant = 'outgoing' | 'incoming';

export interface ChatBubbleContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** The time the message was originally sent. */
  timestamp?: string | ReactNode;
  /** This allows for custom elements to be rendered into the optional popover menu for each message, such as an edit button. */
  actions?: ReactNode | ReactNode[];
}

export const ChatBubbleContainer: FC<ChatBubbleContainerProps> = (props) => {
  const { timestamp, actions } = props;

  return (
    <StyledChatBubbleContainer
      data-testid="chat-bubble-container"
      actions={actions}
    >
      {props.children}
      <StyledChatBubbleInfo>
        {timestamp && (
          <span className="ch-timestamp" data-testid="message-time">
            {timestamp}
          </span>
        )}
        {actions && (
          <PopOver
            a11yLabel="Open channel options"
            placement="bottom-end"
            renderButton={(isOpen) => (
              <Dots
                width="1.5rem"
                height="1.5rem"
                className={`${isOpen ? 'isOpen' : ''} ch-message-actions`}
              />
            )}
            children={actions}
          />
        )}
      </StyledChatBubbleInfo>
    </StyledChatBubbleContainer>
  );
};

export default ChatBubbleContainer;
