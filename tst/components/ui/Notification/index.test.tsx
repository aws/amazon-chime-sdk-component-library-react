// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';

import lightTheme from '../../../../src/theme/light'
import { renderWithTheme } from '../../../test-helpers';
import Notification from '../../../../src/components/ui/Notification';
import { Severity } from '../../../../src/providers/NotificationProvider';

const getNotificationComponent = () => (
  <Notification
    onClose={jest.fn()}
    severity={Severity.ERROR}
    message='Hello'
  />
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