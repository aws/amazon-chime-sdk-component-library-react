import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import ModalHeader from '../../../src/components/Modal/ModalHeader';
import ModalContext from '../../../src/components/Modal/ModalContext';
import lightTheme from '../../../src/theme/light'
import { renderWithTheme } from '../../test-helpers';

describe('ModalButton', () => {

  it('renders a header', () => {
    const component = <ModalHeader title='Test Header' />
    const { getByText } = renderWithTheme(lightTheme, component)
    const el = getByText('Test Header');
    expect(el).toBeInTheDocument();
  });

  it('renders a close button is displayClose !== false', () => {
    const component = <ModalHeader title='Test Header' />
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const closeButton = getByTestId('closeButton');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls the onClose function from the context provider', () => {
    const onClose = jest.fn();
    const labelID = 'test-label';
    const testContext = { onClose, labelID };
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalHeader title='Test Header' />]}/>
      </ModalContext.Provider>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const closeButton = getByTestId('closeButton');
    fireEvent.click(closeButton)
    expect(component.props.value.onClose).toHaveBeenCalled();
  });
});