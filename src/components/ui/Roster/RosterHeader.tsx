// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  ChangeEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import Badge from '../Badge';
import { BaseProps, FocusableProps } from '../Base';
import IconButton from '../Button/IconButton';
import Flex from '../Flex';
import { Remove, Search } from '../icons';
import SearchInput from '../Input/SearchInput';
import { Tooltipable, WithTooltip } from '../WithTooltip';
import { PopOverMenu } from './PopOverMenu';
import { StyledHeader } from './Styled';

export interface RosterHeaderProps
  extends BaseProps,
    FocusableProps,
    Tooltipable {
  /** The title of the roster header, or an element that can render in this area */
  title: string | ReactNode;
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
  /** Label shown for close icon button, by default it is "Close" */
  closeLabel?: string;
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

export const RosterHeader: React.FC<
  React.PropsWithChildren<RosterHeaderProps>
> = ({
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
  closeLabel = 'Close',
  tooltipContainerId,
  children,
  ...rest
}) => {
  const IconButtonWithToolTip = useMemo(
    () => WithTooltip(IconButton, tooltipContainerId),
    [tooltipContainerId]
  );

  const ButtonComponent = rest['data-tooltip']
    ? IconButtonWithToolTip
    : IconButton;
  const buttonComponentProps = rest['data-tooltip-position']
    ? { tooltipPosition: rest['data-tooltip-position'] }
    : {};
  const popOverMenuComponentProps = rest['data-tooltip']
    ? {
        ['data-tooltip-position']: rest['data-tooltip-position'],
        ['data-tooltip']: rest['data-tooltip'],
      }
    : {};
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
          <ButtonComponent
            {...buttonComponentProps}
            ref={searchBtn}
            label={searchLabel}
            onClick={openSearch}
            icon={<Search />}
          />
        )}

        {menu && (
          <PopOverMenu
            {...popOverMenuComponentProps}
            tooltipContainerId={tooltipContainerId}
            menu={menu}
            a11yMenuLabel={a11yMenuLabel}
          />
        )}
        {children}
        {onClose && (
          <ButtonComponent
            {...buttonComponentProps}
            label={closeLabel}
            onClick={onClose}
            icon={<Remove />}
          />
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
