import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

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
  svg {
    fill: white;
    width: 2rem;
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

export const BasicPopOverMenu = () => {
  return (
    <>
      <PopOver
        a11yLabel="Click me"
        renderButton={(isOpen) => getButtonContents(isOpen)}
        >
        <PopOverItem
          as="button"

          text="Test content"
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="More test content"
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="Also test content"
          checked
        />

        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="This has very long text"
        />
      </PopOver>
    </>
  );
};

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
          text="Test content"
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="More test content"
        />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="This has very long text"
        />
      </PopOver>
    </>
  );
};

PopOverMenuWithHeader.story = {
  name: 'Popover Menu with header'
};

export const PopOverMenuWithSubmenu = () => {
  return (
    <>
      <PopOver
        a11yLabel="Click me"
        renderButton={(isOpen) => getButtonContents(isOpen)}
        >
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="Test content"
        />
        <PopOverSeparator />
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="This is more test content"
        />
          <PopOverSubMenu text="This is a submenu">
            <PopOverItem
              as="button"
              onClick={() => console.log('clicked')}
              text="This is also a submenu component"
            />
            <PopOverItem
              as="button"
              onClick={() => console.log('clicked')}
              text="This is also a submenu component"
            />
          </PopOverSubMenu>
        <PopOverItem
          as="button"
          onClick={() => console.log('clicked')}
          text="This has very long text"
        />
      </PopOver>
    </>
  );
};

PopOverMenuWithSubmenu.story = {
  name: 'Popover Menu with submenu'
};