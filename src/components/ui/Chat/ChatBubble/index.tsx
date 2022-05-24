// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes, ReactNode } from 'react';

import { BaseProps } from '../../Base';
import { MessageVariant } from './ChatBubbleContainer';
import { StyledChatBubble } from './Styled';

export interface ChatBubbleProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** Determines styling for outgoing and incoming messages. */
  variant: MessageVariant;
  /** The name of the user that sent the message. */
  senderName?: string;
  /** The timestamp of the message being sent. */
  timestamp?: string;
  /** Adds the bubble tail style to a message. */
  showTail?: boolean;
  /** Determines if the message has been removed after being sent. */
  redacted?: boolean;
  /** Includes other elements or components, such as a message attachment. */
  children?: ReactNode | ReactNode[];
}

export const ChatBubble: FC<ChatBubbleProps> = ({
  variant,
  senderName,
  timestamp,
  showTail,
  redacted,
  children,
  ...rest
}) => {
  return (
    <StyledChatBubble
      variant={variant}
      editable={false}
      {...rest}
      data-testid="chat-bubble"
    >
      {(senderName || timestamp) && (
        <div className="ch-header">
          {senderName && (
            <div
              className="ch-sender-name"
              data-testid="chat-bubble-sender-name"
            >
              {senderName}
            </div>
          )}
          {timestamp && (
            <div
              className="ch-header-timestamp"
              data-testid="chat-bubble-timestamp"
            >
              {timestamp}
            </div>
          )}
        </div>
      )}
      {children && <div>{children}</div>}
      {showTail && (
        <svg viewBox="0 0 4 9" data-testid="tail">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(0, -53)" className="ch-chat-bubble-tail">
              <path d="M4,62 L3.92789928,61.999999 C2.89671177,62.0004988 1.33197354,61.8123902 0.200755581,60.8250184 C-0.0781312712,60.5814641 -0.0639788041,60.0290387 0.229060515,59.8181428 C1.47198013,58.9247413 3.99237825,57.6821586 4,52.9112516 L4,52.9112516 L4,62 Z" />
            </g>
          </g>
        </svg>
      )}
    </StyledChatBubble>
  );
};

export default ChatBubble;
