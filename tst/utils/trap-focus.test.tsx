// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import trapFocus from '../../src/utils/trap-focus';

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

  it('tabs through the trapped elements', async () => {
    const { getByTestId } = render(component);
    const container = getByTestId('container');
    const onKeydown = (e: any) => {
      trapFocus(e, container);
    };
    window.addEventListener('keydown', onKeydown);

    expect(document.body).toHaveFocus();
    
    await userEvent.tab();
    expect(getByTestId('button')).toHaveFocus();

    await userEvent.tab();
    expect(getByTestId('input')).toHaveFocus();

    await userEvent.tab();
    expect(getByTestId('href')).toHaveFocus();

    await userEvent.tab();
    expect(getByTestId('button')).toHaveFocus();

    window.removeEventListener('keydown', onKeydown);
  });

  it('shift+tabs through the trapped elements backwards', async () => {
    const { getByTestId } = render(component);
    const container = getByTestId('container');
    const onKeydown = (e: any) => {
      trapFocus(e, container);
    };
    window.addEventListener('keydown', onKeydown);

    expect(document.body).toHaveFocus();

    // TODO: Remove the following line and correct the trap-focus.ts implementation, which is unable to focus
    // on the container's last element. Assume that the document body element currently has focus. 
    //
    // Expected result: When pressing Shift + Tab, the last anchor element within the container should receive focus.
    // Actual result: When pressing Shift + Tab, the last element in the document body gains focus instead.
    await userEvent.tab();

    await userEvent.tab({ shift: true });
    expect(getByTestId('href')).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(getByTestId('input')).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(getByTestId('button')).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(getByTestId('href')).toHaveFocus();

    window.removeEventListener('keydown', onKeydown);
  });
});
