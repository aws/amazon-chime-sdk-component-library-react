// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import PopOverHeader from '../../../../src/components/ui/PopOver/PopOverHeader';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

const imgSrc =
  'https://seeklogo.com/images/A/amazon-chime-logo-EE2754CC2C-seeklogo.com.png';

describe('PopOver Header', () => {
  it('should render a popover header component', () => {
    const component = <PopOverHeader />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const element = getByTestId('popover-header');

    expect(element).toBeInTheDocument();
  });

  it('should render an image in the header', () => {
    const component = <PopOverHeader imgSrc={imgSrc} title="chime-logo" />;
    const { getByAltText } = renderWithTheme(lightTheme, component);
    const element = getByAltText('chime-logo');

    expect(element).toBeInTheDocument();
  });

  it('should render a title', () => {
    const component = <PopOverHeader title="test title" />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const element = getByText('test title');

    expect(element).toBeInTheDocument();
  });

  it('should render a subtitle', () => {
    const component = <PopOverHeader subtitle="test subtitle" />;
    const { getByText } = renderWithTheme(lightTheme, component);
    const element = getByText('test subtitle');

    expect(element).toBeInTheDocument();
  });
});
