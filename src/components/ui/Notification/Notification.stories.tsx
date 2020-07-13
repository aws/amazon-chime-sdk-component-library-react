// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Notification } from '.';
import { Severity } from '../../../providers/NotificationProvider';

export default {
  title: 'UI Components/Notification',
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
        message='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
      />
  );
};
