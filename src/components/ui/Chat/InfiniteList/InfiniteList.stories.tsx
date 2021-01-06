// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';

import Flex from '../../Flex';
import InfiniteList from './';
import InfiniteListDocs from './InfiniteList.mdx';

export default {
  title: 'UI Components/Chat/InfiniteList',
  parameters: {
    docs: {
      page: InfiniteListDocs.parameters.docs.page().props.children.type,
    },
  },
  component: InfiniteList,
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
          <div
            style={{
              border: '1px solid #3f4149',
              textAlign: 'center',
              backgroundColor: '#075fff',
              color: 'white',
              padding: '0.5rem',
            }}
          >
            {(batchSize * (numberOfBatches - batchNum) + 1 + i - 1).toString()}
          </div>
        );
      }
      return batch;
    } else {
      console.log('No more messages to send.');
      return [];
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([...createBatch(1)]);

  const onLoad = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setBatchNumber(batchNumber + 1);
      setItems([...createBatch(batchNumber), ...items]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <Flex css="height: unset; display: flex; justify-content: center;">
      <InfiniteList
        items={items}
        onLoad={onLoad}
        css="border: 1px solid #3f4149; width: 10rem; height: 20rem"
        isLoading={isLoading}
      />
    </Flex>
  );
};

BasicInfiniteList.story = {
  name: 'Basic InfiniteList',
};
