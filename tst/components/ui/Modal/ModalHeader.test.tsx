// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import ModalHeader from '../../../../src/components/ui/Modal/ModalHeader';
import ModalContext from '../../../../src/components/ui/Modal/ModalContext';
import lightTheme from '../../../../src/theme/light'
import { renderWithTheme } from '../../../test-helpers';

describe('ModalHeader', () => {
  it('renders a header', () => {
    const component = <ModalHeader title='Test Header' />
    const { getByText } = renderWithTheme(lightTheme, component)
    const el = getByText('Test Header');
    expect(el).toBeInTheDocument();
  });

  it('renders a close button is displayClose !== false', () => {
    const component = <ModalHeader title='Test Header' />
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const closeButton = getByTestId('button');
    expect(closeButton).toBeInTheDocument();
  });

  it('calls the onClose function from the context provider', () => {
    const onClose = jest.fn();
    const labelID = 'test-label';
    const testContext = { onClose, labelID };
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalHeader title='Test Header'/>
      </ModalContext.Provider>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const closeButton = getByTestId('button');
    fireEvent.click(closeButton)
    expect(component.props.value.onClose).toHaveBeenCalled();
  });
});