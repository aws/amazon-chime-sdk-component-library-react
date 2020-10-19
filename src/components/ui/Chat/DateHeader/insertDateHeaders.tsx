// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import DateHeader from './';
import { Message } from '../ChatBubble/ChatBubbleContainer';

export const insertDateHeaders = (messageItems: Message[]) => {
  const items: any[] = [...messageItems];
  const dateMap = {};
  let messageDate: string;
  let dateCount = 0;
  messageItems.forEach((m: any, i: number) => {
    if (!m || !m.content) {
      return // not a message
    }
    if (i === 0) {
      items.splice(0, 0, <DateHeader key={'date'+i.toString()} date={m.createdTimestamp} />);
      dateMap[new Date(m.createdTimestamp).toLocaleDateString()] = 1;
      dateCount++;
    } else if (
        new Date(m.createdTimestamp).toLocaleDateString() !== messageDate &&
        !dateMap[new Date(m.createdTimestamp).toLocaleDateString()]
      ) {  
      items.splice(i + dateCount, 0, <DateHeader key={'date'+i.toString()} date={m.createdTimestamp} />);
      messageDate = new Date(m.createdTimestamp).toLocaleDateString();
      dateMap[new Date(m.createdTimestamp).toLocaleDateString()] = 1;
      dateCount++;
    }
  })
  return items
};

export default insertDateHeaders;