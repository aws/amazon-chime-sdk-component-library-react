// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, useMemo, HTMLAttributes, ReactNode, Ref } from 'react';

import { BaseProps } from '../../Base';
import { StyledChatBubbleContainer, StyledChatBubbleInfo } from './Styled';
import PopOver from '../../PopOver';
import { Dots } from '../../icons';
import { IconButton } from '../../../..';
import { IconButtonProps } from '../../Button/IconButton';
import { Tooltipable, WithTooltip } from '../../WithTooltip';

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
    BaseProps,
    Tooltipable {
  /** The time the message was originally sent. */
  timestamp?: string | ReactNode;
  /** This allows for custom elements to be rendered into the optional popover menu for each message, such as an edit button. */
  actions?: ReactNode | ReactNode[];
  /** The label used for availability. */
  a11yLabel?: string;
}

export const ChatBubbleContainer: FC<ChatBubbleContainerProps> = React.forwardRef(
  (props, ref: Ref<HTMLDivElement>) => {
    const {
      timestamp,
      actions,
      tooltipContainerId,
      a11yLabel = 'Open channel options',
      ...rest
    } = props;

    const IconButtonWithToolTip = useMemo(
      () => WithTooltip(IconButton, tooltipContainerId),
    [tooltipContainerId]);

    const ButtonComponent = !!rest['data-tooltip']
      ? IconButtonWithToolTip
      : IconButton;
    const buttonComponentProps = !!rest['data-tooltip-position']
      ? { tooltipPosition: rest['data-tooltip-position'] }
      : {};

    return (
      <StyledChatBubbleContainer
        data-testid="chat-bubble-container"
        ref={ref}
        actions={actions}
        {...rest}
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
              a11yLabel={a11yLabel}
              placement="bottom-end"
              renderButtonWrapper={(
                isActive: boolean,
                props: IconButtonProps
              ) => (
                <ButtonComponent
                  {...buttonComponentProps}
                  icon={<Dots width="1.5rem" height="1.5rem" />}
                  selected={isActive}
                  {...props}
                  label={a11yLabel}
                />
              )}
              children={actions}
            />
          )}
        </StyledChatBubbleInfo>
      </StyledChatBubbleContainer>
    );
  }
);

export default ChatBubbleContainer;
