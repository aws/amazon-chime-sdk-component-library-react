import '@testing-library/jest-dom';
import React from 'react';

import lightTheme from '../../../src/theme/light'
import { renderWithTheme } from '../../test-helpers';
import Notification from '../../../src/components/Notification';
import { fireEvent } from '@testing-library/dom';

const getNotificationComponent = () => (
  <Notification
    onClose={jest.fn()}
    severity='error'
  >
    Hello
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

  it('Checks notification close button focus', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const closeButton = getByTestId('closeButton');
    closeButton.focus();
    expect(closeButton).toHaveFocus();
  });

  it('Checks notification close button calls the onClose function', () => {
    const notificationComponent = getNotificationComponent();
    const { getByTestId } = renderWithTheme(lightTheme, notificationComponent);
    const closeButton = getByTestId('closeButton');
    fireEvent.click(closeButton);
    expect(notificationComponent.props.onClose).toHaveBeenCalled();
  });

});