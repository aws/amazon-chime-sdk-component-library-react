import '@testing-library/jest-dom';
import React from 'react';

import PopOverSeparator from '../../../src/components/PopOver/PopOverSeparator';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';

describe('PopOverSeparator', () => {
    
  it('should render a popover sepatator', () => {
    const component = <PopOverSeparator />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('popover-separator');

    expect(element).toBeInTheDocument();
  });
})