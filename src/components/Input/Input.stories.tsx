import React from 'react'
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Crown from '../icons/Crown';
import Input from './';
import SearchInput from './SearchInput';

storiesOf('Form/TextInputs', module)
.add('Basic Input', () => {
  return (
    <Input
      onChange={() => console.log('changed')}
      sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
      value={text("value", "")}
      placeholder="this is a basic input"
      type="text"
    />
  );
})
.add('Input with icon', () => {
  return (
    <Input
      onChange={() => console.log('changed')}
      value={text("value", "")}
      placeholder="this is an input with an icon"
      sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
      type="text"
      leadingIcon={<Crown />}
    />
  );
})
.add('Search Input', () => {
  return (
    <SearchInput
      onChange={() => console.log('changed')}
      value={text("value", "")}
      placeholder="this is a search input"
    />
  );
})
