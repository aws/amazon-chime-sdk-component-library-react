// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

import { StyledChannelItem } from './Styled';
import PopOver from '../../PopOver';
import Button from '../../Button';
import { BaseProps } from '../../Base';
import { Dots } from '../../icons';
import Badge from '../../Badge';

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
}

export const ChannelItem: FC<ChannelItemProps> = (props) => {
  const {
    name,
    actions,
    isSelected,
    onClick,
    unread,
    unreadBadgeLabel,
  } = props;
  return (
    <StyledChannelItem
      {...props}
      className={classnames({ 'ch-selected': isSelected, 'ch-unread': unread })}
    >
      <Button className="ch-channel-button" label={name} onClick={onClick} />
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
    </StyledChannelItem>
  );
};

export default ChannelItem;
