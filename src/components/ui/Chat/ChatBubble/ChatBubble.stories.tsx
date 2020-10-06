// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { useTheme } from 'styled-components';

import Flex from '../../Flex';
import ChatBubble from '.';
import ChatBubbleDocs from './ChatBubble.mdx';
import { PopOverItemProps } from '../../PopOver/PopOverItem';

export default {
  title: 'UI Components/Chat',
  parameters: {
    docs: {
      page: ChatBubbleDocs.parameters.docs.page().props.children.type
    }
  },
  component: ChatBubble
};

const moreOptions: PopOverItemProps[] = [{ children:<span>Edit</span>, onClick: () => console.log("Edit clicked") }];

export const _ChatBubble = () => {
  const theme = useTheme();
  const bgd = theme.chatBubble.container.bgd;
  return (
    <Flex css={`background-color: ${bgd}; height: 100%; padding-top: 1rem;`}>
      <ChatBubble variant='outgoing' senderName='Me' createdTimestamp='9:45 AM' content='This is an outgoing message' actions={moreOptions} showTail/>
      <ChatBubble variant='incoming' senderName='Bob' createdTimestamp='9:55 AM' content='Ok' showTail />
    </Flex>
  );
};

_ChatBubble.story = {
  name: 'ChatBubble'
};