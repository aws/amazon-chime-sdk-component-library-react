// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { Notification } from '.';
import { Severity } from '../../../providers/NotificationProvider';
import Flex from '../Flex';
import { Cog } from '../icons';
import Heading from '../Heading';

export default {
  title: 'UI Components/Notification',
  component: Notification,
};

export const BasicNotification = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <Notification
        onClose={() => {
          console.log('Close notification');
        }}
        severity={args.severity}
        message={args.message}
      />
    </Flex>
  );
};

const commonHiddenArgTypes = {
  onClose: { table: { disable: true } },
  autoClose: { table: { disable: true } },
  autoCloseDelay: { table: { disable: true } },
  buttonProps: { table: { disable: true } },
  icon: { table: { disable: true } },
};

BasicNotification.argTypes = {
  severity: {
    control: 'select',
    options: {
      success: Severity.SUCCESS,
      warning: Severity.WARNING,
      info: Severity.INFO,
      error: Severity.ERROR,
    },
  },
  message: { control: 'text' },
  ...commonHiddenArgTypes,
};

BasicNotification.args = {
  severity: Severity.ERROR,
  message: 'This is the notification message',
};

BasicNotification.story = {
  name: 'Basic Notification',
};

export const NotificationWithButton = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <Notification
        onClose={() => {
          console.log('Close notification');
        }}
        severity={args.severity}
        icon={<Cog />}
        message={args.message}
        buttonProps={{ label: 'Click me', onClick: () => alert('clicked') }}
      />
    </Flex>
  );
};

NotificationWithButton.argTypes = {
  severity: {
    control: 'select',
    options: {
      success: Severity.SUCCESS,
      warning: Severity.WARNING,
      info: Severity.INFO,
      error: Severity.ERROR,
    },
  },
  message: { control: 'text' },
  ...commonHiddenArgTypes,
};

NotificationWithButton.args = {
  severity: Severity.ERROR,
  message: 'This is the notification message',
};

NotificationWithButton.story = {
  name: 'Notification with button and custom icon',
};

export const NotificationWithCustomContent = (args) => {
  return (
    <Flex layout="fill-space-centered">
      <Notification
        onClose={() => {
          console.log('Close notification');
        }}
        severity={args.severity}
        icon={<Cog />}
      >
        <Heading
          css={`
            padding: 0 2rem;
            font-weight: bold;
          `}
          level={6}
        >
          This is a Heading component with custom styling
        </Heading>
      </Notification>
    </Flex>
  );
};

NotificationWithCustomContent.argTypes = {
  severity: {
    control: 'select',
    options: {
      success: Severity.SUCCESS,
      warning: Severity.WARNING,
      info: Severity.INFO,
      error: Severity.ERROR,
    },
  },
  message: { table: { disable: true } },
  ...commonHiddenArgTypes,
};

NotificationWithCustomContent.args = {
  severity: Severity.ERROR,
};

NotificationWithCustomContent.story = {
  name: 'Notification with custom content',
};
