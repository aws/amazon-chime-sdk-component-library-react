// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import NotificationGroup from '.';
import {
  useNotificationDispatch,
  NotificationProvider,
  ActionType,
  Severity
} from '../../../providers/NotificationProvider';
import NotificationGroupDocs from './NotificationGroup.mdx';

export default {
  title: 'UI Components/NotificationGroup',
  parameters: {
    docs: {
      page: NotificationGroupDocs.parameters.docs.page().props.children.type
    }
  },
  component: NotificationGroup
};

const StorybookTestButton = ({ label, payload }: any) => {
  const dispatch = useNotificationDispatch();

  const addNotification = (e: any) => {
    dispatch({
      type: ActionType.ADD,
      payload: payload
    });
  }

  return (
    <button  onClick={addNotification}>
      {label}
    </button>
  );
};

const AddNotificationButtonGroup = () => {
  const payloadForSimpleNotification: any = {
    severity: Severity.INFO,
    message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  };
  const payloadForAutoclosingNotification = {
    severity: Severity.ERROR,
    message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    autoClose: true
  };
  return (
    <div>
      <StorybookTestButton label='Add simple notification' payload={payloadForSimpleNotification}/>
      <StorybookTestButton label='Add autoclosing notification' payload={payloadForAutoclosingNotification}/>
    </div>
  );
};

export const NotificationGroupStory = () => {
  return (
    <NotificationProvider>
      <NotificationGroup />
      <AddNotificationButtonGroup />
    </NotificationProvider>
  );
};

NotificationGroupStory.story = {
  name: 'Notification group'
}
