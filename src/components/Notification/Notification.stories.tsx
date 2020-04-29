import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Notification } from '.';

export default {
  title: 'Notification',
};

export const _Notification = () => {
  return (
      <Notification
        onClose={() => {console.log('Close notification')}}
        severity={select(
          'severity',
          { success: 'success', warning: 'warning', info: 'info', error: 'error' },
          'error'
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Notification>
  );
};
