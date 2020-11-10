// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { StyledChannelList } from './Styled';
import { BaseProps } from '../../Base';

export interface ChannelListProps
  extends Omit<HTMLAttributes<HTMLUListElement & HTMLLIElement>, 'css'>,
    BaseProps {}

export const ChannelList: FC<ChannelListProps> = (props) => {
  return (
    <StyledChannelList {...props} data-testid="channel-list">
      {props.children}
    </StyledChannelList>
  );
};

export default ChannelList;
