/* eslint-disable no-plusplus */
// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Badge, formatDate } from 'amazon-chime-sdk-component-library-react';
import React from 'react';

import './styles.css';

const insertDateHeaders = (messageItems) => {
  const items = [...messageItems];
  const dateMap = {};
  let messageDate;
  let dateCount = 0;

  messageItems.forEach((m, i) => {
    if (!m || !m.content) {
      return; // not a message
    }
    if (i === 0) {
      items.splice(
        0,
        0,
        <Badge
          key={`date${i.toString()}`}
          value={formatDate(m.createdTimestamp)}
          className="date-header"
        />
      );
      dateMap[new Date(m.createdTimestamp).toLocaleDateString()] = 1;
      dateCount++;
    } else if (
      new Date(m.createdTimestamp).toLocaleDateString() !== messageDate &&
      !dateMap[new Date(m.createdTimestamp).toLocaleDateString()]
    ) {
      items.splice(
        i + dateCount,
        0,
        <Badge
          key={`date${i.toString()}`}
          value={formatDate(m.createdTimestamp)}
          className="date-header"
        />
      );
      messageDate = new Date(m.createdTimestamp).toLocaleDateString();
      dateMap[new Date(m.createdTimestamp).toLocaleDateString()] = 1;
      dateCount++;
    }
  });
  return items;
};

export default insertDateHeaders;
