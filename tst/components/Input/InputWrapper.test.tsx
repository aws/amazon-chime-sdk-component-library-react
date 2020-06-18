import '@testing-library/jest-dom';
import React from 'react';

import InputWrapper from '../../../src/components/Input/InputWrapper';
import lightTheme from '../../../src/theme/light';
import { renderWithTheme } from '../../test-helpers';
import Crown from '../../../src/components/icons/Crown';

describe('InputWrapper', () => {

  it('should render an InputWrapper', () => {
    const component = <InputWrapper />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId('input-wrapper')).toBeInTheDocument();
  });

  it('should render an InputWrapper with children', () => {
    const component = <InputWrapper>children content</InputWrapper>
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const inputWrapper = getByTestId('input-wrapper');

    expect(inputWrapper).toHaveTextContent('children content');
  });

  it('should render an InputWrapper with icon', () => {
    const iconTestId = 'crown-icon';
    const component = <InputWrapper leadingIcon={<Crown data-testid={iconTestId} />} />
    const { queryByTestId } = renderWithTheme(lightTheme, component);

    expect(queryByTestId(iconTestId)).toBeInTheDocument();
  });

});