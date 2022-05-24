// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import { boolean } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import ChannelList from './';
import ChannelItem from './ChannelItem';
import PopOverItem from '../../PopOver/PopOverItem';
import ChannelListDocs from './ChannelList.mdx';

export default {
  title: 'UI Components/Chat',
  parameters: {
    docs: {
      page: ChannelListDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ChannelList,
};

export const _ChannelList = () => {
  const [activeChannelId, setActiveChannelId] = useState(null);
  const showLastChannelMessage = boolean('showLastChannelMessage', false);
  const showLastChannelMessageTimestamp = boolean('showLastChannelMessageTimestamp', false);

  return (
    <Flex layout="fill-space-centered">
      <ChannelList>
        <ChannelItem
          unread={boolean('unread', false)}
          unreadBadgeLabel="New"
          name="Channel 1"
          actions={
            <PopOverItem
              children={<span>Option 1</span>}
              onClick={() => console.log('Option 1 clicked')}
            />
          }
          onClick={() => setActiveChannelId('channel1')}
          lastChannelMessage = {showLastChannelMessage ? "Alice: Hello, how are you doing recently?" : ""}
          lastChannelMessageTimestamp = {showLastChannelMessageTimestamp ? "5:01 pm" : ""}
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
          lastChannelMessage = {showLastChannelMessage ? "Bob: Good morning!" : ""}
          lastChannelMessageTimestamp = {showLastChannelMessageTimestamp ? "Yesterday" : ""}
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
          lastChannelMessage = {showLastChannelMessage ? "Alice: [Attachment]" : ""}
          lastChannelMessageTimestamp = {showLastChannelMessageTimestamp ? "Jan 27" : ""}
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
          lastChannelMessage = {showLastChannelMessage ? "Kevin: Hello!": ""}
          lastChannelMessageTimestamp = {showLastChannelMessageTimestamp ? "Jan 26" : ""}
          isSelected={activeChannelId === 'channel4'}
        />
      </ChannelList>
    </Flex>
  );
};

_ChannelList.story = {
  name: 'ChannelList',
};
