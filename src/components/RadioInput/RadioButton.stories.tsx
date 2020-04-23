import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from "@storybook/addon-knobs";

import { RadioInput } from './';

storiesOf('Form/Radio', module)
.add('RadioInput', () =>
<RadioInput
  label="Radio Input"
  checked={boolean("Checked", false)}
/>);