// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import formatMessageList, { MessageProps } from '../../../../../src/components/ui/Chat/MessageList/formatMessageList';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('InfiniteList', () => {
  const defaultMessage: MessageProps = {
    content: 'Test message',
    messageId: 'test-message-123',
    createdTimestamp: '2020-10-05T21:51:26.569Z',
    lastUpdatedTimestamp: '2020-10-05T21:51:26.569Z',
    redacted: false,
    sender: {
      name: 'Test User',
      arn: 'test-user-123',
    }
  };
  const memberId = 'test-user-abc';

  it('should return a list of ChatBubbles', () => {
    const component = <ul>{formatMessageList([defaultMessage], memberId, null)}</ul>;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const list = getByTestId('chat-bubble');

    expect(list).toBeInTheDocument();
  });

  it('should render a DateHeader', () => {
    const component = <ul>{formatMessageList([defaultMessage], memberId, null)}</ul>;
      const { getAllByTestId } = renderWithTheme(lightTheme, component);
      const dateHeaders = getAllByTestId('date-header');
  
      expect(dateHeaders).toHaveLength(1);
  });
});
