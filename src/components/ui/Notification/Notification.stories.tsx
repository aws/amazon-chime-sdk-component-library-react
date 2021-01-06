// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Notification } from '.';
import { Severity } from '../../../providers/NotificationProvider';
import NotificationDocs from './Notification.mdx';
import Flex from '../Flex';
import { Cog } from '../icons';
import Heading from '../Heading';

export default {
  title: 'UI Components/Notification',
  parameters: {
    docs: {
      page: NotificationDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Notification,
};

export const BasicNotification = () => {
  return (
    <Flex layout="fill-space-centered">
      <Notification
        onClose={() => {
          console.log('Close notification');
        }}
        severity={select(
          'severity',
          {
            success: Severity.SUCCESS,
            warning: Severity.WARNING,
            info: Severity.INFO,
            error: Severity.ERROR,
          },
          Severity.ERROR
        )}
        message='This is the notification message'
      />
    </Flex>
  );
};

BasicNotification.story = {
  name: 'Basic Notification',
};

export const NotificationWithButton = () =>{
  return (
    <Flex layout="fill-space-centered">
      <Notification
        onClose={() => {
          console.log('Close notification');
        }}
        severity={select(
          'severity',
          {
            success: Severity.SUCCESS,
            warning: Severity.WARNING,
            info: Severity.INFO,
            error: Severity.ERROR,
          },
          Severity.SUCCESS
        )}
        icon={<Cog />} 
        message='This is the notification message'
        buttonProps={{ label: 'Click me', onClick: () => alert('clicked'), }}
      />
    </Flex>
  );
};

NotificationWithButton.story = {
  name: 'Notification with button and custom icon',
};

export const NotificationWithCustomContent = () =>{
  return (
    <Flex layout="fill-space-centered">
      <Notification
        onClose={() => {
          console.log('Close notification');
        }}
        severity={select(
          'severity',
          {
            success: Severity.SUCCESS,
            warning: Severity.WARNING,
            info: Severity.INFO,
            error: Severity.ERROR,
          },
          Severity.SUCCESS
        )}
        icon={<Cog />} 
      >
        <Heading 
          css={`padding: 0 2rem; font-weight: bold;`} 
          level={6}
        >
          This is a Heading component with custom styling
        </Heading> 
      </Notification>
    </Flex>
  );
};

NotificationWithButton.story = {
  name: 'Notification with custom content',
};