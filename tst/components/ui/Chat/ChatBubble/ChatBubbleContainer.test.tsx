// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import ChatBubbleContainer from '../../../../../src/components/ui/Chat/ChatBubble/ChatBubbleContainer';
import PopOverItem from '../../../../../src/components/ui/PopOver/PopOverItem';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('ChatBubble', () => {
  const time = '2020-10-05T21:51:26.569Z';

  const component = (
    <ChatBubbleContainer timestamp={time}>
      <div>children</div>
    </ChatBubbleContainer>
  );

  it('should render a ChatBubbleContainer component in the document', () => {
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const message = getByTestId('chat-bubble-container');

    expect(message).toBeInTheDocument();
  });

  it('should render children', () => {
    const { getByText } = renderWithTheme(lightTheme, component);
    const children = getByText('children');

    expect(children).toBeInTheDocument();
  });

  it('should render time', () => {
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const displayedTime = getByTestId('message-time');

    expect(displayedTime).toBeInTheDocument();
  });

  it('should render a popover if more options are passed', () => {
    const componentWithActions = (
      <ChatBubbleContainer
        timestamp={time}
        actions={
          <PopOverItem children={<span>Edit</span>} onClick={() => null} />
        }
      >
        <div>children</div>
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
