// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Flex from '../../Flex';
import ChatBubbleContainer from './ChatBubbleContainer';
import ChatBubble from './';
import PopOverItem from '../../PopOver/PopOverItem';
import { formatTime } from '../../Utilities';

import ChatBubbleContainerDocs from './ChatBubbleContainer.mdx';

export default {
  title: 'UI Components/Chat/ChatBubbleContainer',
  parameters: {
    docs: {
      page: ChatBubbleContainerDocs.parameters.docs.page().props.children.type,
    },
  },
  component: ChatBubbleContainer,
};

export const _ChatBubbleContainer = () => {
  const flexStyles = `
    display: flex; 
    flex-direction: column;
    width: 30rem;
  `;

  const bubbleStyles = `
    margin: 1rem;
  `;

  const actions = (
    <PopOverItem
      onClick={() => console.log('Option 1 clicked')}
      children={<span>Option 1</span>}
    />
  );

  return (
    <Flex layout="fill-space-centered" css={flexStyles}>
      <ChatBubbleContainer
        timestamp={formatTime('2020-10-05T21:51:26.569Z')}
        actions={actions}
      >
        <ChatBubble
          variant="outgoing"
          senderName="Bruce Wayne"
          content="This is an example ChatBubble in a ChatBubbleContainer."
          showTail={true}
          css={bubbleStyles}
        />
      </ChatBubbleContainer>
      <ChatBubbleContainer
        timestamp={formatTime('2020-10-05T21:51:26.569Z')}
        actions={null}
      >
        <ChatBubble
          variant="incoming"
          senderName="Barry Allen"
          content="This is an example ChatBubble in a ChatBubbleContainer."
          showTail={true}
          css={bubbleStyles}
        />
      </ChatBubbleContainer>
    </Flex>
  );
};

_ChatBubbleContainer.story = {
  name: 'ChatBubbleContainer',
};
