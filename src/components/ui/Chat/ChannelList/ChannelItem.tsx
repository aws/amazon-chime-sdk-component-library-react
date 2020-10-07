// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes } from 'react';

import { StyledChannelItem } from './Styled';
import { useChannelListContext } from './ChannelListContext';
import PopOver from '../../PopOver';
import PopOverItem, { PopOverItemProps } from '../../PopOver/PopOverItem';
import Button from '../../Button';
import { BaseProps } from '../../Base';
import { Dots } from '../../icons';

export interface ChannelItemProps extends Omit<HTMLAttributes<HTMLLIElement & HTMLLIElement>, 'css'>, BaseProps {
  name: string;
  arn: string;
  moreOptions?: PopOverItemProps[];
}

export const ChannelItem = (props: ChannelItemProps) => {
  const { name, arn, moreOptions } = props;
  const context = useChannelListContext();
  const isActive = context.activeChannelArn === arn;
  return(
    <StyledChannelItem
      {...props}
      className={isActive ? 'ch-active' : ''}
    >
      <Button className='ch-channel-button' label={name} onClick={() => context.setActiveChannelArn(arn)}>{name}</Button>
      {(moreOptions && isActive) && <PopOver
        a11yLabel='Open channel options'
        placement='bottom-end'
        renderButton={(isOpen: boolean) => (
          <Dots width='1.5rem' height='1.5rem' className={`${isOpen ? 'isOpen' : ''} ch-more-channel-options`} data-testid='more-channel-options' />
        )}
        children={moreOptions?.map((option: PopOverItemProps, index: number) => (
          <PopOverItem {...option} key={index} />
        ))}
      />}
    </StyledChannelItem>
  )
};

export default ChannelItem;