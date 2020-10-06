// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import Flex from '../../Flex';
import InfiniteList from './';
import InfiniteListDocs from './InfiniteList.mdx';
import createChatBubbleList, { Message } from '../ChatBubble/createChatBubbleList';
import PopOverItem from '../../PopOver/PopOverItem';
import insertDateHeaders from '../DateHeader/insertDateHeaders';

export default {
  title: 'UI Components/Chat/ChatList',
  parameters: {
    docs: {
      page: InfiniteListDocs.parameters.docs.page().props.children.type
    }
  },
  component: InfiniteList
};

export const BasicInfiniteList = () => {
  // All of the below code is just to fake an API call that would return a new batch of messages
  const [batchNumber, setBatchNumber] = useState(2);
  const numberOfBatches = 5;
  const batchSize = 50;

  const createBatch = (batchNum) => {
    if (batchNum <= numberOfBatches) {
      const batch = [];
      for (let i = 1; i <= batchSize; i++) {
        batch.push(
          <div style={{'border': '1px solid #3f4149', 'textAlign': 'center', 'backgroundColor': '#075fff', 'color': 'white', 'padding': '0.5rem'}}>
            {((batchSize * (numberOfBatches - batchNum) + 1) + i - 1).toString()}
          </div>
        );
      }
      return batch
    } else {
      console.log("No more messages to send.")
      return []
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([...createBatch(1)]);

  const onLoad = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setBatchNumber(batchNumber + 1);
      setItems([...createBatch(batchNumber), ...items]);
      setIsLoading(false)
    }, 500)
  };

  return (
    <Flex css="height: unset; display: flex; justify-content: center;">
      <InfiniteList
        items={items}
        onLoad={onLoad}
        css='border: 1px solid #3f4149; width: 10rem; height: 20rem'
        isLoading={isLoading}
      />
    </Flex>
  );
};


BasicInfiniteList.story = {
  name: 'Basic InfiniteList'
};

export const InfiniteChatBubbleList = () => {
  // All of the below code is just to fake an API call that would return a new batch of messages
  const [batchNumber, setBatchNumber] = useState(2);
  const numberOfBatches = 5;
  const batchSize = 50;

  const createBatch = (batchNum) => {
    if (batchNum <= numberOfBatches) {
      const batch = [];
      for (let i = 1; i <= batchSize; i++) {
        const message: Message = {
          content: 'Message' + ((batchSize * (numberOfBatches - batchNum) + 1) + i - 1).toString(),
          messageId: `a0c3ca596799f914${i}`,
          createdTimestamp: '2020-10-05T21:51:26.569Z',
          redacted: false,
          lastUpdatedTimestamp: '2020-10-05T21:51:26.569Z',
          senderName: i%2 === 0 ? 'Alice' : 'Bob',
          senderId: i%2 === 0 ? 'abc': 'def'
        }
        batch.push(message);
      }
      return batch
    } else {
      console.log("No more messages to send.")
      return []
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([...createBatch(1)]);

  const onLoad = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setBatchNumber(batchNumber + 1);
      setItems([...createBatch(batchNumber), ...items]);
      setIsLoading(false)
    }, 500)
  };

  const memberId = 'abc';
  const actions = <PopOverItem children={[<span>Option 1</span>]} onClick={() => console.log("Option 1 clicked")} />
  const theme = useTheme();
  return (
    <Flex css='height: unset; display: flex; justify-content: center'>
      <InfiniteList
        items={createChatBubbleList(insertDateHeaders(items), memberId, actions)}
        onLoad={onLoad}
        css={`width: 100%; height: 40rem; background-color: ${theme.chatBubble.container.bgd}`}
        isLoading={isLoading}
      />
    </Flex>
  );
};

InfiniteChatBubbleList.story = {
  name: 'InfiniteList with ChatBubbles'
};