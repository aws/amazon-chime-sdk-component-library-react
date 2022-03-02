// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { BaseProps } from '../../Base';
import { StyledDetailedChannelList } from './Styled';

export interface DetailedChannelListProps
  extends Omit<HTMLAttributes<HTMLUListElement & HTMLLIElement>, 'css'>,
    BaseProps {}

export const DetailedChannelList: FC<DetailedChannelListProps> = (props) => {
  return (
    <StyledDetailedChannelList {...props} data-testid="detailed-channel-list">
      {props.children}
    </StyledDetailedChannelList>
  );
};

export default DetailedChannelList;
