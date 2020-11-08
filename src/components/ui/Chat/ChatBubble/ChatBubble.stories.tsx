// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import ChatBubble from './';
import MessageAttachment from '../MessageAttachment';

import ChatBubbleDocs from './ChatBubble.mdx';

export default {
  title: 'UI Components/Chat/ChatBubble',
  parameters: {
    docs: {
      page: ChatBubbleDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ChatBubble,
};

export const _ChatBubble = () => {
  const showTail = boolean('showTail', false);
  const showName = boolean('showName', true);

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
        variant="incoming"
        senderName="Kam Chancellor"
        content="This is an incoming message."
        showTail={showTail}
        showName={showName}
        css={bubbleStyles}
      />
      <ChatBubble
        variant="outgoing"
        senderName="Jamal Adams"
        content="This is an outgoing message with longer text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        showTail={showTail}
        showName={showName}
        css={bubbleStyles}
      />
    </Flex>
  );
};

_ChatBubble.story = {
  name: 'ChatBubble',
};

export const ChatBubbleWithMessageAttachment = () => {
  const showTail = boolean('showTail', false);
  const showName = boolean('showName', true);

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
        variant="outgoing"
        senderName="Fred Miller"
        content="This is an outgoing message with attachment"
        showTail={showTail}
        showName={showName}
        css={bubbleStyles}
      >
        <MessageAttachment
          name="Report.pdf"
          size="23.3KB"
          downloadUrl="https://test.com/download/Report.pdf"
          css="margin-top: 1rem"
        />
      </ChatBubble>
      <ChatBubble
        variant="incoming"
        senderName="Sarah Anderson"
        content="This is an incoming message with attachment. It is much longer. This amount of text reaches the max length and goes onto the next line."
        showTail={showTail}
        showName={showName}
        css={bubbleStyles}
      >
        <MessageAttachment
          name="Report.pdf"
          size="23.3KB"
          downloadUrl="https://test.com/download/Report.pdf"
          css="margin-top: 1rem"
        />
      </ChatBubble>
    </Flex>
  );
};

ChatBubbleWithMessageAttachment.story = {
  name: 'ChatBubble with MessageAttachment',
};
