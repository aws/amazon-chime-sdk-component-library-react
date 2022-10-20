// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import Heading from '../../../../src/components/ui/Heading';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('Heading', () => {
  it('should render a Heading with children', () => {
    const childrenContent = 'children-content';
    const component = <Heading level={1}>{childrenContent}</Heading>;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const heading = getByTestId('heading');

    expect(heading).toHaveTextContent(childrenContent);
  });

  it('should render as the tag passed', () => {
    const component = (
      <Heading level={1} tag="span">
        Hello World
      </Heading>
    );
    renderWithTheme(lightTheme, component);

    expect(document.querySelectorAll('span')).toHaveLength(1);
  });
});
