// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import classnames from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';

import Badge from '../../Badge';
import { BaseProps } from '../../Base';
import { Dots } from '../../icons';
import PopOver from '../../PopOver';
import { StyledDetailedChannelItem } from './Styled';

export interface DetailedChannelItemProps
  extends Omit<HTMLAttributes<HTMLLIElement & HTMLLIElement>, 'css'>,
    BaseProps {
  /* Display name of the channel */
  name: string;
  /* Display last channel message of the channel */
  channelMessage: string;
  /* Display the timestamp of last channel message of the channel */
  channelMessageTime: string;
  /* Components to be rendered inside the PopOver as children to display channel actions. */
  actions?: ReactNode | ReactNode[];
  /** Determines if the channel is currently selected and can show actions. */
  isSelected?: boolean;
  /** Callback function when clicked */
  onClick: () => void;
  /** Signifies of there are unread message in the channel. */
  unread?: boolean;
  /** Content of the badge signaling unread messages, such as a badge displaying the number. */
  unreadBadgeLabel?: string;
}

export const DetailedChannelItem: FC<DetailedChannelItemProps> = (props) => {
  const {
    name,
    channelMessage,
    channelMessageTime,
    actions,
    isSelected,
    onClick,
    unread,
    unreadBadgeLabel,
  } = props;
  return (
    <StyledDetailedChannelItem
      {...props}
      className={classnames({ 'ch-selected': isSelected, 'ch-unread': unread })}
    >
      <div className={'ch-channel-button'} onClick={() => onClick()}>
        <div className="ch-label">{name}</div>
        <div className="channel-message">{channelMessage}</div>
        <div className="channel-message-time">{channelMessageTime}</div>
      </div>
      {unread && unreadBadgeLabel && (
        <Badge value={unreadBadgeLabel} className="ch-unread-badge" />
      )}
      {actions && isSelected && (
        <PopOver
          a11yLabel="Open channel options"
          placement="bottom-end"
          renderButton={(isOpen: boolean) => (
            <Dots
              width="1.5rem"
              height="1.5rem"
              className={`${isOpen ? 'isOpen' : ''} ch-channel-actions`}
              data-testid="channel-actions"
            />
          )}
          children={actions}
        />
      )}
    </StyledDetailedChannelItem>
  );
};

export default DetailedChannelItem;
