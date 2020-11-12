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
import Flex from '../Flex';
import Heading from '../Heading';
import PopOverDocs from './PopOver.mdx';

export default {
  title: 'UI Components/PopOver',
  parameters: {
    docs: {
      page: PopOverDocs.parameters.docs.page().props.children.type,
    },
  },
  component: PopOver,
};

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
  const foo = isOpen ? `#0042bb` : '#075fff'; // avoiding TS prop problems.
  return (
    <StyledContents style={{ backgroundColor: `${foo}` }}>
      <Meeting />
    </StyledContents>
  );
};

export const BasicPopOverMenu = () => (
  <>
    <Flex layout="fill-space-centered" flexDirection="column">
      <Heading tag="p" level={6} mb={4}>
        Click the button icon to trigger the popover
      </Heading>
      <PopOver
        a11yLabel="Click me"
        renderButton={(isOpen) => getButtonContents(isOpen)}
      >
        <PopOverItem
          as="a"
          href="https://www.amazon.com"
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
    </Flex>
  </>
);

BasicPopOverMenu.story = {
  name: 'Basic PopOver Menu',
};

export const PopOverMenuWithHeader = () => (
  <Flex layout="fill-space-centered" flexDirection="column">
    <Heading tag="p" level={6} mb={4}>
      Click the button icon to trigger the popover
    </Heading>
    <PopOver
      a11yLabel="Click me"
      renderButton={(isOpen) => getButtonContents(isOpen)}
    >
      <PopOverHeader title="Title text" subtitle="Subtitle text" />
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
  </Flex>
);

PopOverMenuWithHeader.story = {
  name: 'PopOver Menu with Header',
};

export const PopOverMenuWithSubmenu = () => (
  <Flex layout="fill-space-centered" flexDirection="column">
    <Heading tag="p" level={6} mb={4}>
      Click the button icon to trigger the popover
    </Heading>
    <PopOver
      a11yLabel="Click me"
      renderButton={(isOpen) => getButtonContents(isOpen)}
    >
      <PopOverItem
        as="button"
        onClick={() => console.log('clicked')}
        children={<span>Also test content</span>}
        checked
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
  </Flex>
);

PopOverMenuWithSubmenu.story = {
  name: 'PopOver Menu with Submenu',
};
