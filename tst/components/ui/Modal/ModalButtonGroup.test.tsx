// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import ModalContext from '../../../../src/components/ui/Modal/ModalContext';
import ModalButtonGroup from '../../../../src/components/ui/Modal/ModalButtonGroup';
import ModalButton from '../../../../src/components/ui/Modal/ModalButton';
import lightTheme from '../../../../src/theme/light'
import { renderWithTheme } from '../../../test-helpers';

describe('ModalButtonGroup', () => {

  it('renders a group with a Button', () => {
    const onClose = jest.fn();
    const labelID = 'test-label';
    const testContext = { onClose, labelID };
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalButtonGroup primaryButtons={[<ModalButton label='Button' />]}/>
      </ModalContext.Provider>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const el = getByTestId('modalButtonGroup');
    expect(el).toBeInTheDocument();
  });

  it('passes the onClose function to the close button', () => {
    const onClose = jest.fn();
    const labelID = 'test-label';
    const testContext = { onClose, labelID };
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalButtonGroup primaryButtons={[<ModalButton label='close' closesModal />]}/>
      </ModalContext.Provider>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component)
    const modalButton = getByTestId('button');
    fireEvent.click(modalButton)
    expect(component.props.value.onClose).toHaveBeenCalled();
  });
});