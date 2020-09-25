// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import Flex from '../../Flex';
import ChannelList from './';
import ChannelItem from './ChannelItem';
import ChannelListDocs from './ChannelList.mdx';

export default {
  title: 'UI Components/Chat/ChannelList',
  parameters: {
    docs: {
      page: ChannelListDocs.parameters.docs.page().props.children.type
    }
  },
  component: ChannelList
};

export const _ChannelList = () => {
  const [activeChannelArn, setActiveChannelArn] = useState(null);

  return (
    <Flex layout="fill-space-centered">
        <ChannelList
          activeChannelArn={activeChannelArn}
          setActiveChannelArn={setActiveChannelArn}
        >
          <ChannelItem
            name='Channel 1'
            arn='abc'
            moreOptions={[{ children: <span>Option 1</span>, onClick: () => console.log('Option 1 clicked') }]}
          />
          <ChannelItem
            name='Channel 2'
            arn='dce'
            moreOptions={[{ children: <span>Option 1</span>, onClick: () => console.log('Option 1 clicked') }] }
          />
          <ChannelItem
            name='Channel 3'
            arn='fgh'
            moreOptions={[{ children: <span>Option 1</span>, onClick: () => console.log('Option 1 clicked') }] }
          />
          <ChannelItem
            name='Channel 4'
            arn='ijk'
            moreOptions={[{ children: <span>Option 1</span>, onClick: () => console.log('Option 1 clicked') }] }
          />
        </ChannelList>
    </Flex>
  )
};

_ChannelList.story = {
  name: 'Channel List'
}; 