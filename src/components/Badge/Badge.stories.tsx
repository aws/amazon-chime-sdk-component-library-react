import React from 'react';
import { select } from '@storybook/addon-knobs';
import Flex from '../Flex';
import { Badge } from './';

export default {
  title: 'Badge',
};

export const BasicBadge = () => {
  return (
    <Flex layout="fill-space-centered">
      <div style={{ 'alignItems': 'center', 'display': 'flex'}}>
        <span style={{ 'marginRight': '0.5rem' }}>Number of new messages</span>
        <Badge
          value="50+"
          status={select('status', { default: 'default', alert: 'alert', }, 'default')}
        />
      </div>
    </Flex>
  );
}

BasicBadge.story = {
  name: 'Basic Badge',
};


