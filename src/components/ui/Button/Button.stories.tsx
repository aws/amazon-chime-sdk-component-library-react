// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { boolean, select } from '@storybook/addon-knobs';
import { Button } from './';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import IconButton from './IconButton';
import Meeting from '../icons/Meeting';
import ButtonDocs from './Button.mdx';

export default {
  title: 'UI Components/Form/Buttons',
  parameters: {
    docs: {
      page: ButtonDocs.parameters.docs.page().props.children.type
    }
  },
  component: Button
};

export const BasicButton = () => <Button label="Basic button" />;

BasicButton.story = {
  name: 'Basic button'
};

export const _PrimaryButton = () => <PrimaryButton label="Primary" />;

_PrimaryButton.story = {
  name: 'Primary button'
};

export const _SecondaryButton = () => (
  <SecondaryButton label="This is a secondary button" />
);

_SecondaryButton.story = {
  name: 'Secondary button'
};

export const _IconButton = () => {
  return (
    <IconButton
      selected={boolean('Selected', false)}
      label="click me"
      icon={<Meeting />}
      iconSize={select('iconSize', ['sm', 'md', 'lg'], 'sm')}
    />
  );
};

_IconButton.story = {
  name: 'Icon button'
};
