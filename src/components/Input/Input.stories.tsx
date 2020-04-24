import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import Crown from '../icons/Crown';
import Input from './';
import SearchInput from './SearchInput';

export default {
  title: 'Form/TextInputs',
};

export const BasicInput = () => {
  return (
    <Input
      onChange={() => console.log('changed')}
      sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
      value={text('value', '')}
      placeholder="this is a basic input"
      type="text"
    />
  );
};

export const InputWithIcon = () => {
  return (
    <Input
      onChange={() => console.log('changed')}
      value={text('value', '')}
      placeholder="this is an input with an icon"
      sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
      type="text"
      leadingIcon={<Crown />}
    />
  );
};

InputWithIcon.story = {
  name: 'Input with icon',
};

export const _SearchInput = () => {
  return (
    <SearchInput
      onChange={() => console.log('changed')}
      value={text('value', '')}
      placeholder="this is a search input"
    />
  );
};
