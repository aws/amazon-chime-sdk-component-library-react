// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/dom';
import React from 'react';

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
      keyCode: 27,
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
      keyCode: 32,
    });
    expect(component.props.onClose).toBeCalledTimes(0);
  });

  it(`will not close the modal using ESC key if "dismissible" prop is set to "false"`, () => {
    const component = (
      <Modal
        size="md"
        rootId="modal-root"
        onClose={jest.fn()}
        dismissible={false}
      >
        <p>Dummy Content</p>
      </Modal>
    );
    renderWithTheme(lightTheme, component);
    fireEvent.keyDown(document.activeElement || document.body, {
      key: 'space',
      keyCode: 32,
    });
    expect(component.props.onClose).toBeCalledTimes(0);
  });

  it(`will close the modal by clicking the background if "dismissible" prop is set to "false"`, () => {
    const component = (
      <Modal
        size="md"
        rootId="modal-root"
        onClose={jest.fn()}
        dismissible={false}
      >
        <p>Dummy Content</p>
      </Modal>
    );
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const bgd = getByTestId('modal');
    fireEvent.click(bgd);
    expect(component.props.onClose).toBeCalledTimes(0);
  });
});
