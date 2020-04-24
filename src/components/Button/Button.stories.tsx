import React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { Button } from './';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import IconButton from './IconButton';
import Meeting from '../icons/Meeting';

export default {
  title: 'Form/Buttons',
};

export const BasicButton = () => <Button className='basic-button' label='Basic button' />;

BasicButton.story = {
  name: 'Basic button',
};

export const _PrimaryButton = () => <PrimaryButton className='primary-button' label='Primary' />;

_PrimaryButton.story = {
  name: 'Primary button',
};

export const _SecondaryButton = () => (
  <SecondaryButton className='secondary-button' label='This is a secondary button' />
);

_SecondaryButton.story = {
  name: 'Secondary button',
};

export const _IconButton = () => {
  return <IconButton selected={boolean('Selected', false)} label='click me' icon={<Meeting />} />;
};

_IconButton.story = {
  name: 'Icon button',
};
