// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { useTheme } from 'styled-components';
import { select, boolean } from '@storybook/addon-knobs';

import Flex from '../../Flex';
import Message from './';
import MessageDocs from './Message.mdx';
import { PopOverItemProps } from '../../PopOver/PopOverItem';

export default {
  title: 'UI Components/Chat',
  parameters: {
    docs: {
      page: MessageDocs.parameters.docs.page().props.children.type
    }
  },
  component: Message
};

const moreOptions: PopOverItemProps[] = [{ children:<span>Edit</span>, onClick: () => console.log("Edit clicked") }];

export const _Message = () => {
  const theme = useTheme();
  const bgd = theme.chatMessage.container.bgd;
  return (
    <Flex css={`background-color: ${bgd}; height: 100%; padding-top: 1rem;`}>
      <Message variant={select('variant', ['outgoing', 'incoming'], 'incoming')} showCaret={boolean('showCaret', true)} name='Name' time='9:45 AM' content='This is a message' moreOptions={moreOptions} />
    </Flex>
  );
};

_Message.story = {
  name: 'Message'
};

export const _MessageGroup = () => {
  const theme = useTheme();
  const bgd = theme.chatMessage.container.bgd;
  return (
    <Flex css={`background-color: ${bgd}; height: 100%; padding-top: 1rem;`}>
      <Message variant='outgoing' name='Me' time='9:45 AM' content='This is an outgoing message' moreOptions={moreOptions} showCaret/>
      <Message variant='incoming' name='Sarah Anderson' time='9:47 AM' content='This is an incoming message' moreOptions={moreOptions} />
      <Message variant='incoming' name='Sarah Anderson' time='9:48 AM' showCaret content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur justo diam, quis tincidunt diam mollis non. Nulla rhoncus eu dui ut tincidunt. Donec venenatis magna vel odio pellentesque, laoreet tristique metus placerat. Ut a auctor odio, in lacinia dolor. Mauris et tempus neque, vitae aliquam eros. Quisque eget blandit libero. Vestibulum id consectetur leo. In ut libero efficitur, mollis nunc a, ultrices leo. Sed molestie et purus nec venenatis. Ut hendrerit fermentum mattis. Phasellus ullamcorper et nisl a efficitur. In eget viverra diam, id elementum nunc. Vivamus non dui varius, aliquam ante ac, ullamcorper ex. Cras suscipit sapien vitae.' moreOptions={moreOptions} />
      <Message variant='outgoing' name='Me' time='9:55 AM' showCaret content='Ok' moreOptions={moreOptions} />
    </Flex>
  );
};

_MessageGroup.story = {
  name: 'Message Group'
};