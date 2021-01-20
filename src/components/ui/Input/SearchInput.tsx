// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { Ref, forwardRef } from 'react';

import Input, { InputProps } from './';
import Search from '../icons/Search';

export const SearchInput = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const searchProps: InputProps = {
      ...props,
      sizing: 'sm',
      type: 'search',
      leadingIcon: <Search data-testid="search-icon" />,
    };

    return <Input {...searchProps} ref={ref} />;
  }
);

export default SearchInput;
