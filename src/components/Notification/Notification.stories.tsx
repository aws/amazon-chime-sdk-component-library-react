import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Notification } from './';

export default {
  title: 'Notification',
};

export const _Notification = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Notification
        onClose={() => {}}
        size={select('size', { sm: 'sm', md: 'md', lg: 'lg', fill: 'fill' }, 'md')}
        severity={select(
          'severity',
          { success: 'success', warning: 'warning', info: 'info', error: 'error' },
          'warning'
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Notification>
    </div>
  );
};
