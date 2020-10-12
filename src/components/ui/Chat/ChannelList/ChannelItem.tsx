// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes, ReactNode } from 'react';

import { StyledChannelItem } from './Styled';
import { useChannelListContext } from './ChannelListContext';
import PopOver from '../../PopOver';
import Button from '../../Button';
import { BaseProps } from '../../Base';
import { Dots } from '../../icons';

export interface ChannelItemProps extends Omit<HTMLAttributes<HTMLLIElement & HTMLLIElement>, 'css'>, BaseProps {
  /* Display name of the channel */
  name: string;
  /* Unique identifier of the channel */
  id: string;
  /* Components to be rendered inside the PopOver as children to display channel actions. */
  actions?: ReactNode | ReactNode[];
}

export const ChannelItem: FC<ChannelItemProps> = (props) => {
  const { name, id, actions } = props;
  const context = useChannelListContext();
  const isActive = context.activeChannelId === id;
  return(
    <StyledChannelItem
      {...props}
      className={isActive ? 'ch-active' : ''}
    >
      <Button className='ch-channel-button' label={name} onClick={() => context.setActiveChannelId(id)}>{name}</Button>
      {(actions && isActive) && <PopOver
        a11yLabel='Open channel options'
        placement='bottom-end'
        renderButton={(isOpen: boolean) => (
          <Dots width='1.5rem' height='1.5rem' className={`${isOpen ? 'isOpen' : ''} ch-channel-actions`} data-testid='channel-actions' />
        )}
        children={actions}
      />}
    </StyledChannelItem>
  )
};

export default ChannelItem;