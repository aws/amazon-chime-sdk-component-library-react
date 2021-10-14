// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom/extend-expect';

import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  within,
} from '@testing-library/react';
import React from 'react';

import NotificationGroup from '../../../../src/components/ui/NotificationGroup';
import {
  ActionType,
  NotificationProvider,
  Severity,
  useNotificationDispatch,
} from '../../../../src/providers/NotificationProvider';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

const StorybookTestButton = ({ label, payload }: any) => {
  const dispatch = useNotificationDispatch();
  const addNotification = (e: any) => {
    dispatch({
      type: ActionType.ADD,
      payload: payload,
    });
  };
  return <button onClick={addNotification}>{label}</button>;
};

const getNotificationGroupTree = () => {
  const payloadForInfoNotification: any = {
    severity: Severity.INFO,
    message: 'Info notification',
  };

  const payloadForErrorNotification: any = {
    severity: Severity.ERROR,
    message: 'Error notification',
  };

  const payloadForAutoclosingInfoNotification: any = {
    severity: Severity.INFO,
    message: 'Autoclosing INFO notification',
    autoClose: true,
  };

  return (
    <NotificationProvider>
      <NotificationGroup />
      <StorybookTestButton
        label="Add simple INFO notification"
        payload={payloadForInfoNotification}
      />
      <StorybookTestButton
        label="Add simple ERROR notification"
        payload={payloadForErrorNotification}
      />
      <StorybookTestButton
        label="Add autoclosing INFO notification"
        payload={payloadForAutoclosingInfoNotification}
      />
    </NotificationProvider>
  );
};

describe('NotificationGroup', () => {
  afterAll(cleanup);

  describe('Without NotificationProvider', () => {
    test('Renders a NotificationGroup', () => {
      const { getByTestId } = renderWithTheme(
        lightTheme,
        <NotificationGroup />
      );
      const notifGroupEl = getByTestId('notification-group');
      expect(notifGroupEl).toBeInTheDocument();
    });

    test('NotificationGroup should show no notifications by default', () => {
      const { getByTestId } = renderWithTheme(
        lightTheme,
        <NotificationGroup />
      );
      const notifGroupEl = getByTestId('notification-group');
      expect(notifGroupEl).toContainHTML('');
    });
  });

  describe('With NotificationProvider', () => {
    test('NotificationGroup should show a notification on a button click', () => {
      const tree = getNotificationGroupTree();
      const { getByText, getAllByTestId } = renderWithTheme(lightTheme, tree);
      const addInfoNotificationButtonEl = getByText(
        'Add simple INFO notification'
      );
      fireEvent.click(addInfoNotificationButtonEl);
      const notifications = getAllByTestId('notification');
      expect(notifications).toHaveLength(1);
    });

    test('NotificationGroup should show a info notification when info notification is added', () => {
      const tree = getNotificationGroupTree();
      const { getByText, getAllByTestId } = renderWithTheme(lightTheme, tree);
      const addInfoNotificationButtonEl = getByText(
        'Add simple INFO notification'
      );
      fireEvent.click(addInfoNotificationButtonEl);
      const notifications = getAllByTestId('notification');
      const infoNotificationEl = notifications[0];
      expect(infoNotificationEl).toBeInTheDocument();
    });

    test('NotificationGroup should show a info notification output message when message is provided', () => {
      const tree = getNotificationGroupTree();
      const { getByText, getAllByTestId } = renderWithTheme(lightTheme, tree);
      const addInfoNotificationButtonEl = getByText(
        'Add simple INFO notification'
      );
      fireEvent.click(addInfoNotificationButtonEl);
      const notifications = getAllByTestId('notification');
      const infoNotificationEl = notifications[0];
      expect(infoNotificationEl).toContainElement(
        getByText('Info notification')
      );
    });

    test("NotificationGroup should remove a notification if clicked on that notification's close button", () => {
      const tree = getNotificationGroupTree();
      const { getByText, getAllByTestId } = renderWithTheme(lightTheme, tree);
      const addInfoNotificationButtonEl = getByText(
        'Add simple INFO notification'
      );
      const addErrorNotificationButtonEl = getByText(
        'Add simple ERROR notification'
      );
      fireEvent.click(addInfoNotificationButtonEl);
      fireEvent.click(addErrorNotificationButtonEl);
      let notifications = getAllByTestId('notification');
      const infoNotificationEl = notifications[0];
      const closeButton = within(infoNotificationEl).getByTestId('button');
      fireEvent.click(closeButton);
      notifications = getAllByTestId('notification');
      expect(infoNotificationEl).not.toBeInTheDocument();
    });

    test('NotificationGroup should remove notification when notification autoClose is passed', async () => {
      // Have kept two assertions to check before and after the waitFor function call
      const tree = getNotificationGroupTree();
      const { getByText, queryAllByTestId } = renderWithTheme(lightTheme, tree);
      const addAutoclosingInfoNotificationButtonEl = getByText(
        'Add autoclosing INFO notification'
      );
      fireEvent.click(addAutoclosingInfoNotificationButtonEl);
      let notifications = queryAllByTestId('notification');
      expect(notifications).toHaveLength(1);
      const autoClosingNotificationEl = notifications[0];
      expect(autoClosingNotificationEl).toContainElement(
        getByText('Autoclosing INFO notification')
      );
      jest.setTimeout(10000);
      await waitFor(
        () => {
          notifications = queryAllByTestId('notification');
          expect(notifications).toHaveLength(0);
        },
        { timeout: 10000 }
      );
      jest.clearAllTimers();
    });
  });
});
