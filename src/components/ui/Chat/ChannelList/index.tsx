// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { ChannelListContext } from './ChannelListContext';
import { StyledChannelList } from './Styled';
import { BaseProps } from '../../Base';

export interface ChannelListProps
  extends Omit<HTMLAttributes<HTMLUListElement & HTMLLIElement>, 'css'>,
    BaseProps {
      activeChannelId: string;
      setActiveChannelId: (id: string) => void;
}

export const ChannelList: FC<ChannelListProps> = (props) => {
  const { activeChannelId, setActiveChannelId } = props;

  const channelListContext = { setActiveChannelId, activeChannelId };

  return (
    <ChannelListContext.Provider value={channelListContext}>
      <StyledChannelList {...props} data-testid='channel-list'>
        {props.children}
      </StyledChannelList>
    </ChannelListContext.Provider>
  );
}

export default ChannelList;