import React, { FC } from 'react';

import Input, { InputProps } from './';
import Search from '../icons/Search';

export const SearchInput: FC<InputProps> = (props) => {
  const searchProps: InputProps = {
    ...props,
    sizing: 'sm',
    type: "search",
    leadingIcon: <Search data-testid='search-icon' />
  };

  return <Input {...searchProps} />
}

export default SearchInput;
