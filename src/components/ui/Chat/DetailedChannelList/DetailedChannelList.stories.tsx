// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import { boolean } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import DetailedChannelList from './index';
import DetailedChannelItem from './DetailedChannelItem';
import PopOverItem from '../../PopOver/PopOverItem';
import DetailedChannelListDocs from './DetailedChannelList.mdx';

export default {
  title: 'UI Components/Chat',
  parameters: {
    docs: {
      page: DetailedChannelListDocs.parameters.docs.page().props.children.type,
    },
  },
  component: DetailedChannelList,
};

export const _DetailedChannelList = () => {
  const [activeChannelId, setActiveChannelId] = useState(null);

  return (
    <Flex layout="fill-space-centered">
      <DetailedChannelList>
        <DetailedChannelItem
          unread={boolean('unread', false)}
          unreadBadgeLabel="New"
          channelMessageTime = "5:01 pm"
          name="Channel 1"
          channelMessage = "Alice: Hello, how are you doing recently?"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel1')}
          isSelected={activeChannelId === 'channel1'}
        />
        <DetailedChannelItem
          name="Channel 2"
          unread={boolean('unread', false)}
          channelMessage = "Bob: Good morning!"
          unreadBadgeLabel="New"
          channelMessageTime = "Yesterday"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel2')}
          isSelected={activeChannelId === 'channel2'}
        />
        <DetailedChannelItem
          name="Channel 3"
          channelMessage = "Alice: [Attachment]"
          channelMessageTime = "Jan 27"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel3')}
          isSelected={activeChannelId === 'channel3'}
        />
        <DetailedChannelItem
          name="Channel 4"
          channelMessage = "No Message Sent On Channel"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel4')}
          isSelected={activeChannelId === 'channel4'}
        />
      </DetailedChannelList>
    </Flex>
  );
};

_DetailedChannelList.story = {
  name: 'DetailedChannelList',
};
