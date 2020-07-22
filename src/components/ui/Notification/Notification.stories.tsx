// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Notification } from '.';
import { Severity } from '../../../providers/NotificationProvider';
import NotificationDocs from './Notification.mdx';

export default {
  title: 'UI Components/Notification',
  parameters: {
    docs: {
      page: NotificationDocs.parameters.docs.page().props.children.type
    }
  },
  component: Notification
};

export const _Notification = () => {
  return (
      <Notification
        onClose={() => {console.log('Close notification')}}
        severity={select(
          'severity',
          { success: Severity.SUCCESS,
            warning: Severity.WARNING,
            info: Severity.INFO,
            error: Severity.ERROR,
           },
          Severity.ERROR
        )}
        message='This is the notification message'
      />
  );
};
