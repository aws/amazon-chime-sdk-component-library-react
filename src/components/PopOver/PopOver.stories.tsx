// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import PopOver from './';
import PopOverItem from './PopOverItem';
import PopOverSubMenu from './PopOverSubMenu';
import PopOverSeparator from './PopOverSeparator';
import PopOverHeader from './PopOverHeader';

import Meeting from '../icons/Meeting';

const StyledContents = styled.span`
  background-color: #0042bb;
  display: inline-block;
  border-radius: 100%;
  color: white;
  width: 2rem;
  height: 2rem;
  svg {
    fill: white;
  }
`;

const getButtonContents = (isOpen: boolean) => {
  const foo = isOpen ? `#0042bb` : '#075fff';  // avoiding TS prop problems.
  return (
    <StyledContents style={{ backgroundColor: `${foo}`}}>
      <Meeting />
    </StyledContents>
  );
}

export default {
  title: 'PopOver',
};

export const BasicPopOverMenu = () => (
  <PopOver
    a11yLabel="Click me"
    renderButton={(isOpen) => getButtonContents(isOpen)}
    >
    <PopOverItem
      as="a"
      href='https://www.amazon.com'
      children={<span>Visit amazon.com</span>}
    />
    <PopOverItem
      as="button"
      onClick={() => console.log('clicked')}
      children={<span>More test content</span>}
    />
    <PopOverItem
      as="button"
      onClick={() => console.log('clicked')}
      children={<span>Also test content</span>}
      checked
    />

    <PopOverItem
      as="button"
      onClick={() => console.log('clicked')}
      children={<span>This has very long text</span>}
    />
  </PopOver>
);

BasicPopOverMenu.story = {
  name: 'Basic Popover Menu'
};

export const PopOverMenuWithHeader = () => {
  return (
    <>

      <PopOver
        a11yLabel="Click me"
        renderButton={(isOpen) => getButtonContents(isOpen)}
        >
        <PopOverHeader
          title="Title text"
          subtitle="Subtitle text"
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          children={<span>Test content</span>}
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          children={<span>More test content</span>}
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          children={<span>This has very long text</span>}
        />
      </PopOver>
    </>
  );
};

PopOverMenuWithHeader.story = {
  name: 'Popover Menu with header'
};

export const PopOverMenuWithSubmenu = () => (
  <PopOver
    a11yLabel="Click me"
    renderButton={(isOpen) => getButtonContents(isOpen)}
    >
    <PopOverItem
      as="button"
      onClick={() => console.log('clicked')}
      children={<span>Also test content</span>}
    />
    <PopOverSeparator />
    <PopOverItem
      as="button"
      onClick={() => console.log('clicked')}
      children={<span>This is more test content</span>}
    />
      <PopOverSubMenu text="This is a submenu">
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          children={<span>This is also a submenu component</span>}
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          children={<span>This is also a submenu component</span>}
        />
      </PopOverSubMenu>
    <PopOverItem
      as="button"
      onClick={() => console.log('clicked')}
      children={<span>This has very long text</span>}
      />
  </PopOver>
);

PopOverMenuWithSubmenu.story = {
  name: 'Popover Menu with submenu'
};