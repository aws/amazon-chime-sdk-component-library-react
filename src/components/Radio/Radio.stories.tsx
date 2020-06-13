import React from 'react';

import { boolean } from '@storybook/addon-knobs';

import { Radio } from '.';
import Flex from '../Flex';

export default {
  title: 'Form/Radio',
};

export const _Radio = () => (
  <Flex layout="fill-space-centered">
    <Radio
      value="bananas"
      label="Radio Input"
      checked={boolean('Checked', false)}
      onChange={(e:any) => console.log(e)}
    />
  </Flex>
);

_Radio.story = {
  name: 'Radio',
};
