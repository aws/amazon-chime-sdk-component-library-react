// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import { act } from '@testing-library/react';
import React from 'react';

import EditableChatBubble from '../../../../../src/components/ui/Chat/ChatBubble/EditableChatBubble';
import lightTheme from '../../../../../src/theme/light';
import { renderWithTheme } from '../../../../test-helpers';

describe('ChatBubble', () => {
  const save = jest.fn((e) => e.preventDefault());
  const cancel = jest.fn((e) => e.preventDefault());

  it('should render an EditableChatBubble component in the document', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const message = getByTestId('editable-chat-bubble');

    expect(message).toBeInTheDocument();
  });

  it('should render an input in the EditableChatBubble component input', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const input = getByTestId('input');

    expect(input).toBeInTheDocument();
  });

  it('should render the name in the EditableChatBubble component', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
      />
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const name = getByText('test user');

    expect(name).toBeInTheDocument();
  });

  it('should not render the name in the EditableChatBubble component if showName is false', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
        showName={false}
      />
    );
    const { queryByText } = renderWithTheme(lightTheme, component);
    const name = queryByText('test user');

    expect(name).not.toBeInTheDocument();
  });

  it('should render a bubble tail in the EditableChatBubble component', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
        showTail={true}
      />
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const content = getByTestId('tail');

    expect(content).toBeInTheDocument();
  });

  it('should not render a bubble tail in the EditableChatBubble component if showTail is false', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
        showTail={false}
      />
    );
    const { queryByTestId } = renderWithTheme(lightTheme, component);
    const name = queryByTestId('tail');

    expect(name).not.toBeInTheDocument();
  });

  it('show call save function with save button is clicked', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
        showTail={false}
      />
    );
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    const saveButton = getByLabelText('Save');
    act(() => {
      fireEvent.click(saveButton);
    });

    expect(save).toHaveBeenCalled();
  });

  it('show call save function with enter button is clicked', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
        showTail={false}
      />
    );
    renderWithTheme(lightTheme, component);
    act(() => {
      fireEvent.keyDown(document.activeElement || document.body, {
        key: 'enter',
        keyCode: 13,
      });
    });

    expect(save).toHaveBeenCalled();
  });

  it('show call cancel function with cancel button is clicked', () => {
    const component = (
      <EditableChatBubble
        content="test message"
        senderName="test user"
        variant="outgoing"
        save={save}
        cancel={cancel}
        showTail={false}
      />
    );
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    const cancelButton = getByLabelText('Cancel');
    act(() => {
      fireEvent.click(cancelButton);
    });

    expect(cancel).toHaveBeenCalled();
  });
});
