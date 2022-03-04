// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import classnames from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';

import Badge from '../../Badge';
import { BaseProps } from '../../Base';
import Button from '../../Button';
import { Dots } from '../../icons';
import PopOver from '../../PopOver';
import { StyledChannelItem } from './Styled';

export interface ChannelItemProps
  extends Omit<HTMLAttributes<HTMLLIElement & HTMLLIElement>, 'css'>,
    BaseProps {
  /* Display name of the channel */
  name: string;
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
  /** Boolean to indicate if we want to display the channel with last channel message and timestamp */
  displayLastChannelMessageAndTimestamp?: boolean;
  /* Display last channel message of the channel */
  lastChannelMessage?: string;
  /* Display the timestamp of last channel message of the channel */
  lastChannelMessageTimestamp?: string;
}

export const ChannelItem: FC<ChannelItemProps> = (props) => {
  const {
    name,
    actions,
    isSelected,
    onClick,
    unread,
    unreadBadgeLabel,
    displayLastChannelMessageAndTimestamp,
    lastChannelMessage,
    lastChannelMessageTimestamp,
  } = props;
  return (
    <StyledChannelItem
      {...props}
      className={classnames({ 'ch-selected': isSelected, 'ch-unread': unread })}
    >
      {displayLastChannelMessageAndTimestamp ? (
        <div className={'ch-channel-detailed'} onClick={onClick}>
          <div className="channel-name">{name}</div>
          <div className="channel-message">{lastChannelMessage}</div>
          <div className="channel-message-time">
            {lastChannelMessageTimestamp}
          </div>
        </div>
      ) : (
        <Button className="ch-channel-button" label={name} onClick={onClick} />
      )}
      {displayLastChannelMessageAndTimestamp && unread && unreadBadgeLabel && (
        <Badge value={unreadBadgeLabel} className="ch-unread-badge-detailed" />
      )}
      {!displayLastChannelMessageAndTimestamp && unread && unreadBadgeLabel && (
        <Badge value={unreadBadgeLabel} className="ch-unread-badge" />
      )}
      {displayLastChannelMessageAndTimestamp && actions && isSelected && (
        <PopOver
          className={'ch-popover-toggle-detailed'}
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
      {!displayLastChannelMessageAndTimestamp && actions && isSelected && (
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
    </StyledChannelItem>
  );
};

export default ChannelItem;
