import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import Crown from '../icons/Crown';
import Input from './';
import SearchInput from './SearchInput';
import Flex from '../Flex';

export default {
  title: 'Form/TextInputs',
};

export const BasicInput = () => {
  return (
    <Flex layout="fill-space-centered">
      <Input
        onChange={() => console.log('changed')}
        sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
        value={text('value', '')}
        placeholder="this is a basic input"
        type="text"
      />
    </Flex>
  );
};

export const InputWithIcon = () => {
  return (
    <Flex layout="fill-space-centered">
      <Input
        onChange={() => console.log('changed')}
        value={text('value', '')}
        placeholder="this is an input with an icon"
        sizing={select('size', { sm: 'sm', md: 'md' }, 'md')}
        type="text"
        leadingIcon={<Crown />}
      />
     </Flex>
  );
};

InputWithIcon.story = {
  name: 'Input with icon',
};

export const _SearchInput = () => {
  return (
    <Flex layout="fill-space-centered">
      <SearchInput
        onChange={() => console.log('changed')}
        value={text('value', '')}
        placeholder="this is a search input"
      />
    </Flex>
  );
};
