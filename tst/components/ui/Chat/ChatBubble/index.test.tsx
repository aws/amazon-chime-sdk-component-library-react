// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import ChatBubble from '../../../../../src/components/ui/Chat/ChatBubble';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('ChatBubble', () => {
  it('should render a ChatBubble component in the document', () => {
    const component = (
      <ChatBubble senderName="test user" variant="outgoing">
        test message
      </ChatBubble>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const message = getByTestId('chat-bubble');

    expect(message).toBeInTheDocument();
  });

  it('should render content in the ChatBubble component', () => {
    const component = (
      <ChatBubble senderName="test user" variant="outgoing">
        test message
      </ChatBubble>
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render the name in the ChatBubble component', () => {
    const component = (
      <ChatBubble senderName="test user" variant="outgoing">
        test message
      </ChatBubble>
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const name = queryByTestId('chat-bubble-sender-name');

    expect(name).toBeInTheDocument();
  });

  it('should not render the name in the ChatBubble component if senderName is null', () => {
    const component = <ChatBubble variant="outgoing">test message</ChatBubble>;
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const name = queryByTestId('chat-bubble-sender-name');

    expect(name).not.toBeInTheDocument();
  });

  it('should render timestamp in the ChatBubble component', () => {
    const component = (
      <ChatBubble senderName="test user" timestamp="1:30 PM" variant="outgoing">
        test message
      </ChatBubble>
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const timestamp = queryByTestId('chat-bubble-timestamp');

    expect(timestamp).toBeInTheDocument();
  });

  it('should not render timestamp in the ChatBubble component if timestamp is null', () => {
    const component = (
      <ChatBubble senderName="test user" variant="outgoing">
        test message
      </ChatBubble>
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const timestamp = queryByTestId('chat-bubble-timestamp');

    expect(timestamp).not.toBeInTheDocument();
  });

  it('should render a bubble tail in the ChatBubble component', () => {
    const component = (
      <ChatBubble senderName="test user" variant="outgoing" showTail={true}>
        test message
      </ChatBubble>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const content = getByTestId('tail');

    expect(content).toBeInTheDocument();
  });

  it('should not render a bubble tail in the ChatBubble component if showTail is false', () => {
    const component = (
      <ChatBubble senderName="test user" variant="outgoing" showTail={false}>
        test message
      </ChatBubble>
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const name = queryByTestId('tail');

    expect(name).not.toBeInTheDocument();
  });
});
