// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';

import ChatBubble, { ChatBubbleProps } from '../../../../../src/components/ui/Chat/ChatBubble';
import PopOverItem from '../../../../../src/components/ui/PopOver/PopOverItem';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';
describe('ChatBubble', () => {

  const defaultProps: ChatBubbleProps = {
      content: 'test message',
      senderName: 'test user',
      createdTimestamp: '10:00 AM',
      variant: 'outgoing'
  }

  it('should render a Message component in the document', () => {
    const component = <ChatBubble {...defaultProps} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const message = getByTestId('chat-bubble');

    expect(message).toBeInTheDocument();
  });

  it('should render content in the ChatBubble component', () => {
    const component = <ChatBubble {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render time in the ChatBubble component', () => {
    const component = <ChatBubble {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const time = getByText('10:00 AM');

    expect(time).toBeInTheDocument();
  });

  it('should render the name in the ChatBubble component', () => {
    const component = <ChatBubble {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const name = getByText('test user');

    expect(name).toBeInTheDocument();
  });

  it('should render an icon button in the ChatBubble component', () => {
    const component = <ChatBubble {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render a popover if more options are passed', () => {
    const popOverItem = <PopOverItem children={<span>Option 1</span>} onClick={() => null} />
    const component = <ChatBubble {...defaultProps} actions={popOverItem} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const popover = getByTestId('popover');

    expect(popover).toBeInTheDocument();
  });

  it('should not render a popover if more options are not passed', () => {
    const component = <ChatBubble {...defaultProps} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const popover = queryByTestId('popover');

    expect(popover).not.toBeInTheDocument();
  });
});
