// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import ChatBubbleContainer from '../../../../../src/components/ui/Chat/ChatBubble/ChatBubbleContainer';
import ChatBubble from '../../../../../src/components/ui/Chat/ChatBubble';
import PopOverItem from '../../../../../src/components/ui/PopOver/PopOverItem';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('ChatBubble', () => {

  const time = '2020-10-05T21:51:26.569Z';

  const component = (
    <ChatBubbleContainer createdTimestamp={time}>
      <ChatBubble content='test message' senderName='test user' variant='outgoing' createdTimestamp={time} />
    </ChatBubbleContainer>
  );

  it('should render a ChatBubble component in the document', () => {
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const message = getByTestId('chat-bubble');

    expect(message).toBeInTheDocument();
  });

  it('should render content in the ChatBubble component', () => {
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render time in the ChatBubble component', () => {
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const displayedTime = getByTestId('message-time');

    expect(displayedTime).toBeInTheDocument();
  });

  it('should render the name in the ChatBubble component', () => {
    const { getByText } = renderWithTheme(lightTheme, component);
    const name = getByText('test user');

    expect(name).toBeInTheDocument();
  });

  it('should render message content in the ChatBubble component', () => {
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render a popover if more options are passed', () => {
    const componentWithActions = (
      <ChatBubbleContainer createdTimestamp={time} actions={<PopOverItem children={<span>Edit</span>} onClick={() => null} />}>
        <ChatBubble content='test message' senderName='test user' variant='outgoing' createdTimestamp={time} />
      </ChatBubbleContainer>
    );
    const { getByTestId } = renderWithTheme(lightTheme, componentWithActions);
    const popover = getByTestId('popover');

    expect(popover).toBeInTheDocument();
  });

  it('should not render a popover if more options are not passed', () => {
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const popover = queryByTestId('popover');

    expect(popover).not.toBeInTheDocument();
  });
});
