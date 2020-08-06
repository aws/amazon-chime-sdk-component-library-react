// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import ModalContext from '../../../../src/components/ui/Modal/ModalContext';
import ModalButtonGroup from '../../../../src/components/ui/Modal/ModalButtonGroup';
import ModalButton from '../../../../src/components/ui/Modal/ModalButton';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('ModalButtonGroup', () => {
  const primaryButtonLbl = 'test-primary';
  const secondaryButtonLbl = 'test-secondary';
  const onClose = jest.fn();
  const labelID = 'test-label';
  const testContext = { onClose, labelID };

  it('renders a group with a primary Button', () => {
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalButtonGroup
          primaryButtons={[<ModalButton label={primaryButtonLbl} />]}
        />
      </ModalContext.Provider>
    );
    const { getByTestId, getByLabelText } = renderWithTheme(
      lightTheme,
      component
    );
    const el = getByTestId('modal-button-group');
    expect(el).toBeInTheDocument();
    expect(getByLabelText(primaryButtonLbl)).toBeInTheDocument();
  });

  it('renders a group with a primary Button & secondary Button', () => {
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalButtonGroup
          primaryButtons={[<ModalButton label={primaryButtonLbl} />]}
          secondaryButtons={[<ModalButton label={secondaryButtonLbl} />]}
        />
      </ModalContext.Provider>
    );
    const { getByTestId, getByLabelText } = renderWithTheme(
      lightTheme,
      component
    );
    const el = getByTestId('modal-button-group');
    expect(el).toBeInTheDocument();
    expect(getByLabelText(primaryButtonLbl)).toBeInTheDocument();
    expect(getByLabelText(secondaryButtonLbl)).toBeInTheDocument();
  });

  it('renders a group with single primary Button & empty secondary Button', () => {
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalButtonGroup
          primaryButtons={<ModalButton label="close" closesModal />}
          secondaryButtons={[]}
        />
      </ModalContext.Provider>
    );
    const {
      getByTestId,
      getByLabelText,
      queryAllByLabelText
    } = renderWithTheme(lightTheme, component);
    const el = getByTestId('modal-button-group');
    expect(el).toBeInTheDocument();
    expect(getByLabelText('close')).toBeInTheDocument();
    expect.not.arrayContaining(queryAllByLabelText(secondaryButtonLbl));
  });

  it('passes the onClose function to the close button', () => {
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalButtonGroup
          primaryButtons={[<ModalButton label="close" closesModal />]}
        />
      </ModalContext.Provider>
    );
    const { getByTestId, getByLabelText } = renderWithTheme(
      lightTheme,
      component
    );
    const modalButton = getByTestId('button');
    fireEvent.click(modalButton);
    expect(component.props.value.onClose).toHaveBeenCalled();
    expect(getByLabelText('close')).toBeInTheDocument();
  });

  it('passes the onClose function to the close button with custom onClick()', () => {
    const component = (
      <ModalContext.Provider value={testContext}>
        <ModalButtonGroup
          primaryButtons={[
            <ModalButton label="close" closesModal onClick={onClose} />
          ]}
        />
      </ModalContext.Provider>
    );
    const { getByTestId, getByLabelText } = renderWithTheme(
      lightTheme,
      component
    );
    const modalButton = getByTestId('button');
    fireEvent.click(modalButton);
    expect(component.props.value.onClose).toHaveBeenCalled();
    expect(getByLabelText('close')).toBeInTheDocument();
  });
});
