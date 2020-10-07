// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes } from 'react';

import { ChannelListContext } from './ChannelListContext';
import { StyledChannelList } from './Styled';
import { BaseProps } from '../../Base';

export interface ChannelListProps
  extends Omit<HTMLAttributes<HTMLUListElement & HTMLLIElement>, 'css'>,
    BaseProps {
      activeChannelArn: string;
      setActiveChannelArn: (arn: string) => void;
}

export const ChannelList = (props: ChannelListProps) => {
  const { activeChannelArn, setActiveChannelArn } = props;

  const channelListContext = { setActiveChannelArn, activeChannelArn };

  return (
    <ChannelListContext.Provider value={channelListContext}>
      <StyledChannelList {...props} data-testid='channel-list'>
        {props.children}
      </StyledChannelList>
    </ChannelListContext.Provider>
  );
}

export default ChannelList;