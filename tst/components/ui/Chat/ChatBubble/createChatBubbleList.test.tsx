// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import createChatBubbleList, { Message } from '../../../../../src/components/ui/Chat/ChatBubble/createChatBubbleList';
import insertDateHeaders from '../../../../../src/components/ui/Chat/DateHeader/insertDateHeaders';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('InfiniteList', () => {
  const defaultMessage: Message = {
    content: 'Test message',
    messageId: 'test-message-123',
    createdTimestamp: '2020-10-05T21:51:26.569Z',
    lastUpdatedTimestamp: '2020-10-05T21:51:26.569Z',
    redacted: false,
    senderName: 'Test User',
    senderId: 'test-user-123',
  };
  const memberId = 'test-user-abc';

  it('should return a list of ChatBubbles', () => {
    const component = <ul>{createChatBubbleList([defaultMessage], memberId, null)}</ul>;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const list = getByTestId('chat-bubble');

    expect(list).toBeInTheDocument();
  });

  it('should render a DateHeader when called with insertDateHeaders helper function', () => {
    const component = <ul>{createChatBubbleList(insertDateHeaders([defaultMessage]), memberId, null)}</ul>;
      const { getAllByTestId } = renderWithTheme(lightTheme, component);
      const dateHeaders = getAllByTestId('date-header');
  
      expect(dateHeaders).toHaveLength(1);
  });
});