import React from 'react';

import { boolean } from '@storybook/addon-knobs';

import { RadioInput } from './';

export default {
  title: 'Form/Radio',
};

export const _RadioInput = () => (
  <RadioInput label="Radio Input" checked={boolean('Checked', false)} />
);

_RadioInput.story = {
  name: 'RadioInput',
};
