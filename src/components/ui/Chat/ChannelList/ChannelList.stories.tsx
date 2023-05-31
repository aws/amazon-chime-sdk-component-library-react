// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import Flex from '../../Flex';
import ChannelList from './';
import ChannelItem from './ChannelItem';
import PopOverItem from '../../PopOver/PopOverItem';

export default {
  title: 'UI Components/Chat',
  component: ChannelList,
};

export const _ChannelList = (args) => {
  const [activeChannelId, setActiveChannelId] = useState<string>();

  return (
    <Flex layout="fill-space-centered">
      <ChannelList>
        <ChannelItem
          unread={args.unread}
          unreadBadgeLabel="New"
          name="Channel 1"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel1')}
          lastChannelMessage={
            args.showLastChannelMessage
              ? 'Alice: Hello, how are you doing recently?'
              : ''
          }
          lastChannelMessageTimestamp={
            args.showLastChannelMessageTimestamp ? '5:01 pm' : ''
          }
          isSelected={activeChannelId === 'channel1'}
        />
        <ChannelItem
          name="Channel 2"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel2')}
          lastChannelMessage={
            args.showLastChannelMessage ? 'Bob: Good morning!' : ''
          }
          lastChannelMessageTimestamp={
            args.showLastChannelMessageTimestamp ? 'Yesterday' : ''
          }
          isSelected={activeChannelId === 'channel2'}
        />
        <ChannelItem
          name="Channel 3"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel3')}
          lastChannelMessage={
            args.showLastChannelMessage ? 'Alice: [Attachment]' : ''
          }
          lastChannelMessageTimestamp={
            args.showLastChannelMessageTimestamp ? 'Jan 27' : ''
          }
          isSelected={activeChannelId === 'channel3'}
        />
        <ChannelItem
          name="Channel 4"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel4')}
          lastChannelMessage={
            args.showLastChannelMessage ? 'Kevin: Hello!' : ''
          }
          lastChannelMessageTimestamp={
            args.showLastChannelMessageTimestamp ? 'Jan 26' : ''
          }
          isSelected={activeChannelId === 'channel4'}
        />
      </ChannelList>
    </Flex>
  );
};

_ChannelList.argTypes = {
  showLastChannelMessage: { control: 'boolean' },
  showLastChannelMessageTimestamp: { control: 'boolean' },
  unread: { control: 'boolean' },
};

_ChannelList.args = {
  showLastChannelMessage: false,
  showLastChannelMessageTimestamp: false,
  unread: false,
};

_ChannelList.story = {
  name: 'ChannelList',
};
