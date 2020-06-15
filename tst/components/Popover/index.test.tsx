import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { act, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import PopOver from '../../../src/components/PopOver';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';
import PopOverItem from '../../../src/components/PopOver/PopOverItem';
import PopOverSubMenu from '../../../src/components/PopOver/PopOverSubMenu';

let mockFunction: any, value: string, label: string;

describe('PopOver', () => {

  beforeEach(() => {
    label = 'test-label';
    value = 'test-value';
    mockFunction = jest.fn();
  });

  afterEach(cleanup)

  const popOverButton = (isOpen:boolean) => <div>Test Button</div>;
  const testChild = <div>Test Child</div>

  it('should render a PopOver component in the document', () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('popover');

    expect(element).toBeInTheDocument();
  });

  it('should render a toggle button', () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
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

  it('should open a menu when clicked', () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    act(() => {
      fireEvent.click(toggle);
    });    
    const menu = getByTestId('menu');
    expect(menu).toBeInTheDocument();
    act(() => {
      fireEvent.click(toggle);
    }); 
  });

  it('should close the popper when toggle button is clicked', () => {
    const component = <PopOver renderButton={popOverButton} children={testChild} a11yLabel='test-label'/>
    const { getByTestId, queryByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    act(() => {
      fireEvent.click(toggle);
    });    
    const menu = queryByTestId('menu');
    act(() => {
      fireEvent.click(toggle);
    });
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
    act(() => {
      fireEvent.click(toggle);
    });    
    const menu = queryByTestId('menu');
    const item = getByText('Test Item')
    act(() => {
      fireEvent.click(item);
    });
    expect(menu).not.toBeInTheDocument();
  });

  it('should not close the popper when a submenu item is clicked', () => {
    const component = (
      <PopOver renderButton={popOverButton} a11yLabel='test-label'>
        <PopOverSubMenu text='Submenu Item' children={<span>Submenu Item</span>}/>
      </PopOver>
    );
    const { getByText, getByTestId, queryByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    act(() => {
      fireEvent.click(toggle);
    });    
    const menu = queryByTestId('menu');
    const item = getByText('Submenu Item')
    act(() => {
      fireEvent.click(item);
    });
    expect(menu).toBeInTheDocument();
    act(() => {
      fireEvent.click(toggle);
    }); 
  });

  it('should focus down the menu when tab is pressed', async () => {
    const testChildren = [<PopOverItem children={<span>Option 1</span>} key='1'/>, <PopOverItem children={<span>Option 2</span>} key='2' data-testid='option 2'/>]
    const component = <PopOver renderButton={popOverButton} children={testChildren} a11yLabel='test-label'/>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const toggle = getByTestId('popover-toggle');
    act(() => {
      fireEvent.click(toggle);
    });
    const option2 = getByTestId('option 2');
    userEvent.tab();
    userEvent.tab();
    expect(option2).toHaveFocus();
    act(() => {
      fireEvent.click(toggle);
    });
  });

  // The follow test cases are commented out
  // because key presses are not yet supported by the 
  // user-event library. Support looks to be
  // coming soon. https://github.com/testing-library/user-event/issues/354

  // it('should focus up the menu when up is pressed', () => {});

  // it('should focus down the menu when down is pressed', () => {});

  // it('should close the popper when esc is pressed', async () => {});

});