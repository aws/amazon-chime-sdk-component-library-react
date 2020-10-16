// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { ReactNode } from 'react';

import { formatTime } from '../../Utilities';
import ChatBubble from './';

export type Message = {
  /* The displayed text of the message sent. */
  content: string;
  /* The unique identifier of the message. */
  messageId: string;
  /* The timestamp when the message was originally sent by the sender. */
  createdTimestamp: string;
  /* The timestamp of the last time the message was edited. */
  lastUpdatedTimestamp?: string;
  /* Determines if a message was redacted (deleted) by a user. */
  redacted: boolean;
  /* The display name of the sender. */
  senderName: string;
  /* The unique identifier of the sender. */
  senderId: string;
};

export const createChatBubbleList = (messages: Message[], memberId: string, actions: ReactNode | ReactNode[]): JSX.Element[] => {
  const chatBubbleList = messages.map((m: any, i: number) => {
    if (!m.senderId) {
      return m // not a message
    } else {
      const prevMessageSender = messages[i - 1]?.senderId;
      const currMessageSender = m.senderId;
      const nextMessageSender = messages[i + 1]?.senderId;
      let showTail = true;
      if (
        currMessageSender && // it is a message
        nextMessageSender && // the item after is a message
        currMessageSender === nextMessageSender // the item after is from the same sender
      ) {
        showTail = false
      }
      let showName = true;
      if (
        currMessageSender && // it is a message
        prevMessageSender && // the item before is a message
        currMessageSender === prevMessageSender // the message before is from the same sender
      ) {
        showName = false
      };

      return (
        <ChatBubble
          key={'chatBubble' + i.toString()}
          content={m.content}
          variant={memberId === m.senderId ? 'outgoing' : 'incoming'}
          createdTimestamp={formatTime(m.createdTimestamp)}
          lastUpdatedTimestamp={formatTime(m.lastUpdatedTimestamp)}
          edited={m.createdTimestamp !== m.lastUpdatedTimestamp}
          redacted={m.redacted}
          senderName={m.senderName}
          showTail={showTail}
          showName={showName}
          actions={m.senderId === memberId ? actions : null} // TODO: allow for moderators and admin to access certain message actions
        />
      )
    }
  })
  return chatBubbleList;
};

export default createChatBubbleList;