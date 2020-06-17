import '@testing-library/jest-dom';
import React from 'react';

import SecondaryButton from '../../../src/components/Button/SecondaryButton';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';

describe('Secondary Button', () => {

  it('should render a secondary Button', () => {
    const labelText = 'Secondary Button';
    const component = <SecondaryButton label={labelText} />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('button')).toBeInTheDocument();
  });

});