import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean } from "@storybook/addon-knobs";

import { Checkbox } from './';

storiesOf('Checkbox', module)
.add('Checkbox', () =>
<Checkbox
  label="Checkbox"
  checked={boolean("Checked", false)}
/>);