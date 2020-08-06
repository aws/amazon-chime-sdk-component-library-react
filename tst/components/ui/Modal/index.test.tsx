// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent } from '@testing-library/dom';
import Modal from '../../../../src/components/ui/Modal';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Modal', () => {
  it('renders a modal', () => {
    const component = (
      <Modal size="md" rootId="modal-root" onClose={jest.fn()}>
        <p>Dummy Content</p>
      </Modal>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const el = getByTestId('modal');
    expect(el).toBeInTheDocument();
  });

  it('Pressing ESC closes the modal if onClose is passed', () => {
    const component = (
      <Modal size="md" rootId="modal-root" onClose={jest.fn()}>
        <p>Dummy Content</p>
      </Modal>
    );
    renderWithTheme(lightTheme, component);
    fireEvent.keyDown(document.activeElement || document.body, {
      key: 'escape',
      keyCode: 27
    });
    expect(component.props.onClose).toHaveBeenCalled();
  });

  it(`Pressing non ESC keystrokes doesn't trigger modal onClose fn`, () => {
    const component = (
      <Modal size="md" rootId="modal-root" onClose={jest.fn()}>
        <p>Dummy Content</p>
      </Modal>
    );
    renderWithTheme(lightTheme, component);
    fireEvent.keyDown(document.activeElement || document.body, {
      key: 'space',
      keyCode: 32
    });
    expect(component.props.onClose).toBeCalledTimes(0);
  });
});
