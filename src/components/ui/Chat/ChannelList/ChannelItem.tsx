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
  /** Signifies if there are unread message in the channel. */
  unread?: boolean;
  /** Content of the badge signaling unread messages, such as a badge displaying the number. */
  unreadBadgeLabel?: string;
  /* Content of the last channel message to be displayed */
  lastChannelMessage?: string;
  /* Timestamp of the last channel message to be displayed */
  lastChannelMessageTimestamp?: string;
}

export const ChannelItem: FC<React.PropsWithChildren<ChannelItemProps>> = (
  props
) => {
  const {
    name,
    actions,
    isSelected,
    onClick,
    unread,
    unreadBadgeLabel,
    lastChannelMessage,
    lastChannelMessageTimestamp,
  } = props;

  const displayDetailedView = lastChannelMessage || lastChannelMessageTimestamp;
  const displayUnreadBadge = unread && unreadBadgeLabel;
  const displayPopOver = actions && isSelected;
  return (
    <StyledChannelItem
      {...props}
      className={classnames({ 'ch-selected': isSelected, 'ch-unread': unread })}
    >
      {displayDetailedView ? (
        <>
          <div className={'ch-detailed-channel'} onClick={onClick}>
            <div className="ch-detailed-channel-name">{name}</div>
            <div className="ch-detailed-channel-message">
              {lastChannelMessage}
            </div>
            <div className="ch-detailed-channel-message-time">
              {lastChannelMessageTimestamp}
            </div>
          </div>
          {displayUnreadBadge && (
            <Badge
              value={unreadBadgeLabel!}
              className="ch-unread-badge-detailed"
            />
          )}
          {displayPopOver && (
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
        </>
      ) : (
        <>
          <Button
            className="ch-channel-button"
            label={name}
            onClick={onClick}
          />
          {displayUnreadBadge && (
            <Badge
              value={unreadBadgeLabel!}
              className="ch-unread-badge"
            ></Badge>
          )}
          {displayPopOver && (
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
        </>
      )}
    </StyledChannelItem>
  );
};

export default ChannelItem;
