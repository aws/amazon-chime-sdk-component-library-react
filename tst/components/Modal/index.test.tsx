import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import Modal from '../../../src/components/Modal';
import lightTheme from '../../../src/theme/light'
import { renderWithTheme } from '../../test-helpers';

describe('Modal', () => {

  it('renders a modal', () => {
    const modalComponent = <Modal size='medium' rootId='modal-root'><p>Dummy Content</p></Modal>
    const { getByTestId } = renderWithTheme(lightTheme, modalComponent)
    const modalEl = getByTestId('modal');
    expect(modalEl).toBeInTheDocument();
  });

  it('Close button is not in the modal if onClose is undefined', () => {
    const modalComponent = <Modal size='medium' rootId='modal-root'><p>Dummy Content</p></Modal>
    const { queryByTestId } = renderWithTheme(lightTheme, modalComponent);
    expect(queryByTestId('closeButton')).toBeNull();
  });

  it('Pressing ESC closes the modal if onClose is passed', () => {
    const modalComponent = <Modal size='medium' rootId='modal-root' onClose={jest.fn()}><p>Dummy Content</p></Modal>
    const { getByTestId } = renderWithTheme(lightTheme, modalComponent);
    getByTestId('closeButton').focus();
    fireEvent.keyDown(document.activeElement || document.body, { key: 'escape', keyCode: 27 });
    expect(modalComponent.props.onClose).toHaveBeenCalled();
  });

  it('clicking the close button closes the modal if onClose is passed', () => {
    const modalComponent = <Modal size='medium' rootId='modal-root' onClose={jest.fn()}><p>Dummy Content</p></Modal>
    const { getByTestId } = renderWithTheme(lightTheme, modalComponent)
    fireEvent.click(getByTestId('closeButton'));
    expect(modalComponent.props.onClose).toHaveBeenCalled();
  });
});