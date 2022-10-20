// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent, getByText } from '@testing-library/dom';
import React from 'react';

import Echo from '../../../../src/components/ui/icons/Echo';
import Notification from '../../../../src/components/ui/Notification';
import { Severity } from '../../../../src/providers/NotificationProvider';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

const getNotificationComponent = () => (
  <Notification onClose={jest.fn()} severity={Severity.ERROR} message="Hello" />
);

const getNotificationWithOptionalProps = () => (
  <Notification
    icon={<Echo />}
    onClose={jest.fn()}
    severity={Severity.SUCCESS}
    message="Hello"
    buttonProps={{
      label: 'click me',
      onClick: jest.fn(),
    }}
  >
    <p>This is custom content</p>
  </Notification>
);

describe('Notification', () => {
  it('renders a notification', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const notificationEl = getByTestId('notification');
    expect(notificationEl).toBeInTheDocument();
  });

  it('renders a notification with serverity icon', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const notificationEl = getByTestId('notification');
    const severityIconEl = getByTestId('severity-icon');
    expect(notificationEl).toContainElement(severityIconEl);
  });

  it('renders a notification with message', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const notificationEl = getByTestId('notification');
    const messageEl = getByTestId('message');
    expect(notificationEl).toContainElement(messageEl);
    expect(messageEl).toHaveTextContent('Hello');
  });

  it('Checks notification accessibility role and aria-live', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const notificationEl = getByTestId('notification');
    expect(notificationEl).toHaveAttribute('role', 'alert');
    expect(notificationEl).toHaveAttribute('aria-live', 'assertive');
  });

  it('Checks notification close button is an HTML buttom element ', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const closeButton = getByTestId('button');
    expect(closeButton.nodeName).toEqual('BUTTON');
  });

  it('Checks notification close button calls the onClose function', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const closeButton = getByTestId('button');
    fireEvent.click(closeButton);
    expect(notificationComponent.props.onClose).toHaveBeenCalledTimes(1);
  });
});

describe('Notification with optional props', () => {
  it('renders a notification with a button', () => {
    const notificationComponent = getNotificationWithOptionalProps();
    const { getByText } = renderWithTheme(lightTheme, notificationComponent);
    const button = getByText('click me');
    expect(button).toBeInTheDocument();
  });

  it('renders a notification with a custom icon', () => {
    const notificationComponent = getNotificationWithOptionalProps();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const severityIconEl = getByTestId('severity-icon');
    expect(severityIconEl.children[0].classList.contains('Svg')).toBe(true);
    expect(severityIconEl).toBeInTheDocument();
  });

  it('renders children if any are provided', () => {
    const notificationComponent = getNotificationWithOptionalProps();
    const { getByText } = renderWithTheme(lightTheme, notificationComponent);
    const content = getByText('This is custom content');
    expect(content).toBeInTheDocument();
  });
});
