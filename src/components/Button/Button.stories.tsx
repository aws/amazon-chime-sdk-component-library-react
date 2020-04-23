import React from 'react'

import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Button } from './';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import IconButton from './IconButton';
import Meeting from '../icons/Meeting';


storiesOf('Form/Buttons', module)
.add('Basic button', () => <Button className='basic-button' label='Basic button' />)
.add('Primary button', () => <PrimaryButton className='primary-button' label='Primary' />)
.add('Secondary button', () => <SecondaryButton className='secondary-button' label='This is a secondary button' />)
.add('Icon button', () => {
  return (
    <IconButton
      selected={boolean('Selected', false)}
      label="click me"
      icon={<Meeting />}
    />
  );
});
