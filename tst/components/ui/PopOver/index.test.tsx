// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event'
import { Simulate } from 'react-dom/test-utils';

import PopOver from '../../../../src/components/ui/PopOver';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';
import PopOverItem from '../../../../src/components/ui/PopOver/PopOverItem';
import PopOverSubMenu from '../../../../src/components/ui/PopOver/PopOverSubMenu';

let mockFunction: any, value: string, label: string;

describe('PopOver', () => {

  beforeEach(() => {
    label = 'test-label';
    value = 'test-value';
    mockFunction = jest.fn();
  });

  const popOverButton = (isOpen: boolean) => <div>Test Button</div>;
  const testChild = <div>Test Child</div>

  it('should render a PopOver component in the document', () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('popover');

    expect(element).toBeInTheDocument();
  });

  it('should render a toggle button when renderButton is passed', () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByRole } = renderWithTheme(lightTheme, component);
    const element = getByRole('button');

    expect(element).toBeInTheDocument();
  });

  it('should render the contents of renderButtonWrapper when passed', () => {
    const renderFn = () => <button>Hello world</button>
    const component = <PopOver renderButtonWrapper={renderFn} children={testChild} a11yLabel='test-label'/>
    const { getByRole } = renderWithTheme(lightTheme, component);
    const element = getByRole('button');

    expect(element).toBeInTheDocument();
  });

  it('should render a toggle with an a11yLabel',() => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByLabelText } = renderWithTheme(lightTheme, component);
    const element = getByLabelText('test-label');

    expect(element).toBeInTheDocument();
  });

  it('should open a menu when clicked', async () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const menu = getByTestId('menu');
    await waitFor(() => expect(menu).toBeInTheDocument());
  });

  it('should close the popper when toggle button is clicked', () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByTestId, queryByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const menu = queryByTestId('menu');
    fireEvent.click(toggle);
    expect(menu).not.toBeInTheDocument();
  });

  it('should close the popper when an item is selected', () => {
    const component = (
      <PopOver renderButton={popOverButton} a11yLabel='test-label'>
        <PopOverItem children={<span>Test Item</span>}/>
      </PopOver>
    );
    const { getByText, getByTestId, queryByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const menu = queryByTestId('menu');
    const item = getByText('Test Item')
    fireEvent.click(item);
    expect(menu).not.toBeInTheDocument();
  });

  it('should not close the popper when a submenu item is clicked', async () => {
    const component = (
      <PopOver renderButton={popOverButton} a11yLabel='test-label'>
        <PopOverSubMenu text='Submenu Item' children={<span>Submenu Item</span>}/>
      </PopOver>
    );
    const { getByText, getByTestId, queryByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const menu = queryByTestId('menu');
    const item = getByText('Submenu Item')
    fireEvent.click(item);
    await waitFor(() => expect(menu).toBeInTheDocument());
  });

  it('should focus down the menu when tab is pressed', async () => {
    const testChildren = [<PopOverItem children={<span>Option 1</span>} key='1'/>, <PopOverItem children={<span>Option 2</span>} key='2' data-testid='option 2'/>]
    const component = <PopOver renderButton={popOverButton} children={testChildren} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const option2 = getByTestId('option 2');
    userEvent.tab();
    userEvent.tab();
    await waitFor(() => expect(option2).toHaveFocus());
  });

  // TODO: Consider replacing these Simulate methods with
  // the 'user' from the 'user-event' library when they are supported (in development).
  // https://github.com/testing-library/user-event/issues/354

  it('should focus down the menu when down is pressed', async () => {
    const testChildren = [<PopOverItem children={<span>Option 1</span>} key='1'/>, <PopOverItem children={<span>Option 2</span>} key='2' data-testid='option 2' />]
    const component = <PopOver renderButton={popOverButton} children={testChildren} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const option2 = getByTestId('option 2');
    Simulate.keyDown(document.activeElement || document.body, {key: "ArrowDown", keyCode: 40, which: 40}); // key down to Option 1
    Simulate.keyDown(document.activeElement || document.body, {key: "ArrowDown", keyCode: 40, which: 40}); // key down to Option 2
    await waitFor(() => expect(option2).toHaveFocus());
  });

  it('should focus up the menu when up is pressed', async () => {
    const testChildren = [<PopOverItem children={<span>Option 1</span>} key='1' data-testid='option 1'/>, <PopOverItem children={<span>Option 2</span>} key='2'/>]
    const component = <PopOver renderButton={popOverButton} children={testChildren} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const option1 = getByTestId('option 1');
    Simulate.keyDown(document.activeElement || document.body, {key: "ArrowDown", keyCode: 40, which: 40}); // key down to Option 1
    Simulate.keyDown(document.activeElement || document.body, {key: "ArrowDown", keyCode: 40, which: 40}); // key down to Option 2
    Simulate.keyDown(document.activeElement || document.body, {key: "ArrowUp", keyCode: 38, which: 38}); // key up to Option 1
    await waitFor(() => expect(option1).toHaveFocus());
  });

  it('should close the popper when esc is pressed', async () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByTestId, queryByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    fireEvent.click(toggle);
    const menu = queryByTestId('menu');
    Simulate.keyDown(document.activeElement || document.body, {key: "Escape", keyCode: 27, which: 27});
    await waitFor(() => expect(menu).not.toBeInTheDocument());
  });
});