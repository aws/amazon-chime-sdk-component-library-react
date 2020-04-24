import React from 'react';

import { boolean } from '@storybook/addon-knobs';

import { Checkbox } from './';

export default {
  title: 'Form/Checkbox',
};

export const _Checkbox = () => <Checkbox label='Checkbox' checked={boolean('Checked', false)} />;
