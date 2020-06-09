import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import ControlBarItem from '../../../src/components/ControlBar/ControlBarItem';
import { Sound } from '../../../src/components/icons';
import lightTheme from '../../../src/theme/light'
import { renderWithTheme } from '../../test-helpers';

export const controlBarItemProps = {
  icon: <Sound/>,
  label: 'test label',
  onClick: () => null,
};

export const controlBarItemWithPopOverProps = {
  icon: <Sound/>,
  label: 'test label',
  onClick: () => null,
  popOver: [{ onClick: () => console.log('popover item clicked'), text: 'option 1'}]
};

describe('ControlBarButton', () => {
  it('renders a ControlBarButton', () => {
    const component = <ControlBarItem {...controlBarItemProps}/>;
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const el = getByTestId('control-bar-item');
    expect(el).toBeInTheDocument();
  });

  it('should render a PopOver if multiple options are available', () => {
    const component = <ControlBarItem {...controlBarItemWithPopOverProps} />;
    const { getByTestId, getByText } = renderWithTheme(lightTheme, component);
    const button = getByTestId('control-bar-item-caret');
    fireEvent.click(button);
    const el = getByText('option 1');
    expect(el).toBeInTheDocument();
    fireEvent.click(button); // We will get a React warning if we don't return the UI to the initial state
  })
})