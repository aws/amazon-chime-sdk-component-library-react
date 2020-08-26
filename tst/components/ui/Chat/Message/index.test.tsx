// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import Message, { MessageProps } from '../../../../../src/components/ui/Chat/Message';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';
describe('Message', () => {

    const defaultProps: MessageProps = {
        content: 'test message',
        name: 'test user',
        time: '10:00 AM',
        variant: 'outgoing'
    }

  it('should render a Message component in the document', () => {
    const component = <Message {...defaultProps} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const message = getByTestId('chat-message');

    expect(message).toBeInTheDocument();
  });

  it('should render content in the Message component', () => {
    const component = <Message {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render time in the Message component', () => {
    const component = <Message {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const time = getByText('10:00 AM');

    expect(time).toBeInTheDocument();
  });

  it('should render the name in the Message component', () => {
    const component = <Message {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const name = getByText('test user');

    expect(name).toBeInTheDocument();
  });

  it('should render an icon button in the Message component', () => {
    const component = <Message {...defaultProps} />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const content = getByText('test message');

    expect(content).toBeInTheDocument();
  });

  it('should render a popover if more options are passed', () => {
    const component = <Message {...defaultProps} moreOptions={[{ children: <span>Option 1</span>, onClick: () => null }]} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const popover = getByTestId('popover');

    expect(popover).toBeInTheDocument();
  });

  it('should not render a popover if more options are not passed', () => {
    const component = <Message {...defaultProps} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const popover = queryByTestId('popover');

    expect(popover).not.toBeInTheDocument();
  });

  it('should not render a popover if more options has a length of 0', () => {
    const component = <Message {...defaultProps} moreOptions={[]} />;
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const popover = queryByTestId('popover');

    expect(popover).not.toBeInTheDocument();
  });
});
