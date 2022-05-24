// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import ModalButton from '../../../../src/components/ui/Modal/ModalButton';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('ModalButton', () => {
  it('renders a Button', () => {
    const modalButtonComponent = <ModalButton label="close" />;
    const { getByTestId } = renderWithTheme(lightTheme, modalButtonComponent);
    const el = getByTestId('button');
    expect(el).toBeInTheDocument();
  });
});
