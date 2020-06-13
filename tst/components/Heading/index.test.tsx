import '@testing-library/jest-dom';
import React from 'react';

import Heading from '../../../src/components/Heading';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';


describe('Heading', () => {

  it('should render a Heading with children', () => {
    const childrenContent = 'children-content';
    const component = <Heading level={'h1'}>{childrenContent}</Heading>;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const heading = getByTestId('heading');

    expect(heading).toHaveTextContent(childrenContent);
  });
});