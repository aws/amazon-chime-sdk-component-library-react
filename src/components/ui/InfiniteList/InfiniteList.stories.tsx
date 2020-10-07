// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect, useRef } from 'react';

import Flex from '../Flex';
import InfiniteList from './';
import InfiniteListDocs from './InfiniteList.mdx';

export default {
  title: 'UI Components/InfiniteList',
  parameters: {
    docs: {
      page: InfiniteListDocs.parameters.docs.page().props.children.type
    }
  },
  component: InfiniteList
};

export const BasicInfiniteList = () => {
  // All of the below code is just to fake an API call that would return a new batch of messages
  const [batchNumber, setBatchNumber] = useState(1);
  const numberOfBatches = 5;
  const batchSize = 50;

  const createBatch = () => {
    if (batchNumber <= numberOfBatches) {
      const batch = [];
      for (let i = 1; i <= batchSize; i++) {
        batch.push(
          <div style={{'border': '1px solid #3f4149', 'textAlign': 'center', 'backgroundColor': '#075fff', 'color': 'white', 'padding': '0.5rem'}}>
            {((batchSize * (numberOfBatches - batchNumber) + 1) + i - 1).toString()}
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
  const [items, setItems] = useState([...createBatch()]);

  useEffect(() => {
    setBatchNumber(batchNumber + 1)
  }, [])

  const onLoad = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setBatchNumber(batchNumber + 1);
      setItems([...createBatch(), ...items]);
      setIsLoading(false)
    }, 500)
  };

  return (
    <Flex css="height: unset; display: flex; justify-content: center;">
      <InfiniteList
        label='chat-feed'
        items={items}
        onLoad={onLoad}
        css='border: 1px solid #3f4149; width: 10rem; height: 20rem'
        isLoading={isLoading}
      />
    </Flex>
  );
};