// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Flex from '../../Flex';
import ChatBubble from './';
import MessageAttachment from '../MessageAttachment';

export default {
  title: 'UI Components/Chat/ChatBubble',
  component: ChatBubble,
};

export const _ChatBubble = (args) => {
  const containerStyles = `
    display: flex; 
    flex-direction: column;
    padding-top: 1rem;
  `;

  const bubbleStyles = `
    margin: 1rem;
  `;

  return (
    <Flex layout="fill-space-centered" css={containerStyles}>
      <ChatBubble
        variant={args.variant}
        senderName={args.senderName}
        timestamp={args.timestamp}
        showTail={args.showTail}
        css={bubbleStyles}
      >
        {args.message}
        {args.withAttachment && (
          <MessageAttachment
            name="Report.pdf"
            size="23.3KB"
            downloadUrl="https://test.com/download/Report.pdf"
            css="margin-top: 1rem"
          />
        )}
      </ChatBubble>
    </Flex>
  );
};

_ChatBubble.argTypes = {
  showTail: { control: 'boolean' },
  variant: { control: 'select', options: ['incoming', 'outgoing'] },
  senderName: { control: 'text' },
  message: { control: 'text' },
  timestamp: { control: 'text' },
  withAttachment: { control: 'boolean' },
  redacted: { table: { disable: true } },
};

_ChatBubble.args = {
  showTail: false,
  variant: 'incoming',
  message:
    'This is a long message. This amount of text reaches the max length and goes onto the next line.',
  senderName: 'Kam Chancellor',
  timestamp: '2022-02-22',
  withAttachment: false,
};

_ChatBubble.story = {
  name: 'ChatBubble',
};
