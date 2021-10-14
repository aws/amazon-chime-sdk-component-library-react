// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('trap-focus', () => {
  const component = (
    <div>
      <div data-testid="container">
        <button data-testid="button">button</button>
        <input data-testid="input" />
        <a href="#" data-testid="href">
          link
        </a>
      </div>
      <button>Some other focusable button outside of the trap</button>
      <a href="#">Some other focusable link outside of the trap</a>
    </div>
  );

  it('tabs through the trapped elements', () => {
    const { getByTestId } = render(component);
    const container = getByTestId('container');
    expect(document.body).toHaveFocus();

    userEvent.tab({ focusTrap: container });
    expect(getByTestId('button')).toHaveFocus();

    userEvent.tab({ focusTrap: container });
    expect(getByTestId('input')).toHaveFocus();

    userEvent.tab({ focusTrap: container });
    expect(getByTestId('href')).toHaveFocus();

    userEvent.tab({ focusTrap: container });
    expect(getByTestId('button')).toHaveFocus();
  });

  it('shift+tabs through the trapped elements backwards', () => {
    const { getByTestId } = render(component);
    const container = getByTestId('container');
    expect(document.body).toHaveFocus();

    userEvent.tab({ shift: true, focusTrap: container });
    expect(getByTestId('href')).toHaveFocus();

    userEvent.tab({ shift: true, focusTrap: container });
    expect(getByTestId('input')).toHaveFocus();

    userEvent.tab({ shift: true, focusTrap: container });
    expect(getByTestId('button')).toHaveFocus();

    userEvent.tab({ shift: true, focusTrap: container });
    expect(getByTestId('href')).toHaveFocus();
  });
});
