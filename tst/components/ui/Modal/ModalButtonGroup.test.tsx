// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

import ModalButton from '../../../../src/components/ui/Modal/ModalButton';
import ModalButtonGroup from '../../../../src/components/ui/Modal/ModalButtonGroup';
import ModalContext from '../../../../src/components/ui/Modal/ModalContext';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('ModalButtonGroup', () => {
  const primaryButtonLbl = 'test-primary';
  const secondaryButtonLbl = 'test-secondary';
  const onClose = jest.fn();
  const labelID = 'test-label';
  const testContext = { onClose, labelID, dismissible: true };

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
    const { getByTestId, getByLabelText, queryAllByLabelText } =
      renderWithTheme(lightTheme, component);
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
            <ModalButton label="close" closesModal onClick={onClose} />,
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

  it('does not inject the onClose function into the ModalButton click handler when "dismissible" is false', () => {
    const onClose = jest.fn();
    const labelID = 'test-label';
    const context = { onClose, labelID, dismissible: false };
    const component = (
      <ModalContext.Provider value={context}>
        <ModalButtonGroup
          primaryButtons={[<ModalButton label="close" closesModal />]}
        />
      </ModalContext.Provider>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const modalButton = getByTestId('button');
    fireEvent.click(modalButton);
    expect(component.props.value.onClose).not.toHaveBeenCalled();
  });
});
