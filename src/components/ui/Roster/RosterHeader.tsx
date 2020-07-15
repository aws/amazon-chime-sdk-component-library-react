// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useRef, useEffect, ChangeEvent } from 'react';

import Flex from '../Flex';
import Badge from '../Badge';
import SearchInput from '../Input/SearchInput';
import { Search, Arrow, Remove, Hamburger } from '../icons';
import IconButton from '../Button/IconButton';
import { StyledHeader } from './Styled';
import { BaseProps } from '../Base';
import { PopOverMenu } from './PopOverMenu';

interface RosterHeaderProps extends BaseProps {
  title: string;
  badge?: number;
  searchValue?: string;
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClose?: () => void;
  menu?: React.ReactNode;
  a11yMenuLabel?: string;
  onMobileToggleClick?: () => void;
}

const SearchBar: any = ({ onChange, close, value }: any) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  return (
    <Flex container alignItems="center" className="search-wrapper">
      <SearchInput
        aria-label="Search"
        className="search-input"
        ref={inputEl}
        onChange={onChange}
        value={value}
      />
      <IconButton
        className="search-close"
        label="Close search"
        icon={<Arrow direction="right" />}
        onClick={close}
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
  onMobileToggleClick,
  ...rest
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const inputEl = useRef<HTMLInputElement>(null);
  const searchBtn = useRef<HTMLButtonElement>(null);

  const openSearch = () => {
    setIsSearching(true);
    inputEl.current?.focus();
  };

  const closeSearch = () => {
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
      {onMobileToggleClick &&
        <IconButton
          className='navigation-icon'
          label="Open navigation"
          onClick={onMobileToggleClick}
          icon={<Hamburger />}
        />
      }
      <div className="title">{title}</div>
      {typeof badge === 'number' && badge > -1 && (
        <Badge className="badge" value={badge} />
      )}

      <div className="buttons">
        {onSearch && (
          <IconButton
            ref={searchBtn}
            label="Open search"
            onClick={openSearch}
            icon={<Search />}
          />
        )}

        {menu && <PopOverMenu menu={menu} a11yMenuLabel={a11yMenuLabel} />}

        {onClose && (
          <IconButton label="Close" onClick={onClose} icon={<Remove />} />
        )}
      </div>

      {isSearching && (
        <SearchBar
          value={searchValue}
          close={closeSearch}
          onChange={onSearch}
        />
      )}
    </StyledHeader>
  );
};

export default RosterHeader;
