// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import ChatBubble from '../../../../../src/components/ui/Chat/ChatBubble';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('ChatBubble', () => {

  it('should render a ChatBubble component in the document', () => {
    const component = <ChatBubble content='test message' senderName='test user' variant='outgoing' />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const message = getByTestId('chat-bubble');

    expect(message).toBeInTheDocument();
  });

  it('should render content in the ChatBubble component', () => {
    const component = <ChatBubble content='test message' senderName='test user' variant='outgoing' />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render the name in the ChatBubble component', () => {
    const component = <ChatBubble content='test message' senderName='test user' variant='outgoing' />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const name = getByText('test user');

    expect(name).toBeInTheDocument();
  });

  it('should not render the name in the ChatBubble component if showName is false', () => {
    const component = <ChatBubble content='test message' senderName='test user' variant='outgoing' showName={false} />;
    const { queryByText } = renderWithTheme(lightTheme, component);
    const name = queryByText('test user');

    expect(name).not.toBeInTheDocument();
  });

  it('should render a bubble tail in the ChatBubble component', () => {
    const component = <ChatBubble content='test message' senderName='test user' variant='outgoing' showTail={true} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const content = getByTestId('tail');

    expect(content).toBeInTheDocument();
  });

  it('should not render a bubble tail in the ChatBubble component if showTail is false', () => {
    const component = <ChatBubble content='test message' senderName='test user' variant='outgoing' showTail={false} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const name = queryByTestId('tail');

    expect(name).not.toBeInTheDocument();
  });
});