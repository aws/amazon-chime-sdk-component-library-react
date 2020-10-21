// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useRef, useEffect, ChangeEvent, ReactNode } from 'react';

import Flex from '../Flex';
import Badge from '../Badge';
import SearchInput from '../Input/SearchInput';
import { Search, Remove } from '../icons';
import IconButton from '../Button/IconButton';
import { StyledHeader } from './Styled';
import { PopOverMenu } from './PopOverMenu';
import { BaseProps, FocusableProps } from '../Base';

export interface RosterHeaderProps extends BaseProps, FocusableProps {
  /** The title of the roster header. */
  title: string;
  /** The number of attendees in a meeing. */
  badge?: number;
  /** The string value to search in a roster. */
  searchValue?: string;
  /** The callback fired when the search value is changed. */
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  /** The callback fired when roster is closed. */
  onClose?: () => void;
  /** The PopOver menu for more options. */
  menu?: React.ReactNode;
  /** The label for availability. */
  a11yMenuLabel?: string;
  /** Label shown for search icon button, by default it is "Open search" */
  searchLabel?: string;
  /** Use children to render custom elements in the RosterHeader */
  children?: ReactNode | ReactNode[];
}

const SearchBar: any = ({ onChange, onClose, value }: any) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    const input = inputEl.current;
    const nativeSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    )?.set;

    if (nativeSetter && input) {
      nativeSetter.call(input, '');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    onClose();
  };

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  return (
    <Flex container alignItems="center" className="ch-search-wrapper">
      <SearchInput
        aria-label="Search"
        className="ch-search-input"
        ref={inputEl}
        onChange={onChange}
        value={value}
        onClear={handleClear}
      />
    </Flex>
  );
};

export const RosterHeader: React.FC<RosterHeaderProps> = ({
  tag,
  title,
  badge,
  searchValue,
  onClose,
  onSearch,
  className,
  menu,
  a11yMenuLabel = '',
  searchLabel = 'Open search',
  children,
  ...rest
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const searchBtn = useRef<HTMLButtonElement>(null);

  const openSearch = () => {
    setIsSearching(true);
  };

  const closeSearch = () => {
    onSearch?.({
      target: {
        value: '',
      },
      currentTarget: {
        value: '',
      },
    } as React.ChangeEvent<HTMLInputElement>);
    setIsSearching(false);
    searchBtn.current?.focus();
  };

  return (
    <StyledHeader
      isSearching={isSearching}
      as={tag}
      className={className || ''}
      {...rest}
    >
      <div className="ch-title">{title}</div>
      {typeof badge === 'number' && badge > -1 && (
        <Badge className="ch-badge" value={badge} />
      )}

      <div className="ch-buttons">
        {onSearch && (
          <IconButton
            ref={searchBtn}
            label={searchLabel}
            onClick={openSearch}
            icon={<Search />}
          />
        )}

        {menu && <PopOverMenu menu={menu} a11yMenuLabel={a11yMenuLabel} />}
        {children}
        {onClose && (
          <IconButton label="Close" onClick={onClose} icon={<Remove />} />
        )}
      </div>

      {isSearching && (
        <SearchBar
          value={searchValue}
          onClose={closeSearch}
          onChange={onSearch}
        />
      )}
    </StyledHeader>
  );
};

export default RosterHeader;
