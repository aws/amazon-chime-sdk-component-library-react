// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import Grid from '../../../../src/components/ui/Grid';
import Cell from '../../../../src/components/ui/Grid/Cell';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

const CHILD = 'Child';
const Child = () => <p>{CHILD}</p>;

describe('Grid', () => {
  it('should render a Grid without specified props', () => {
    const component = (
      <Grid>
        <Child />
      </Grid>
    );
    const { getByText } = renderWithTheme(lightTheme, component);
    const element = getByText(CHILD);

    expect(element).toBeInTheDocument();
  });

  it('should render a Grid with specified props', () => {
    const component = (
      <Grid
        responsive
        gridGap=".5rem"
        gridTemplateColumns="1fr 1fr 4fr"
        gridTemplateRows="auto"
        gridAutoFlow=""
      >
        <Child />
        <Child />
      </Grid>
    );
    const { getAllByText, container } = renderWithTheme(lightTheme, component);
    const result = getAllByText(/Child/);
    expect(result).toHaveLength(2);
  });

  it('should render a Grid with custom <ul> tag prop', () => {
    const component = (
      <Grid tag="ul">
        <Child />
      </Grid>
    );
    const { getAllByText, container } = renderWithTheme(lightTheme, component);
    const result = getAllByText(/Child/);

    expect(result).toHaveLength(1);
    expect(container.getElementsByTagName('ul').length).toBe(1);
  });

  it('should render a Grid with specified className prop', () => {
    const component = (
      <Grid className="test-class">
        <Child />
      </Grid>
    );
    const { container } = renderWithTheme(lightTheme, component);

    expect(container.getElementsByClassName('test-class')).toBeInTheDOM;
  });

  it('should render a Grid with Cell component', () => {
    const component = (
      <Grid>
        <Cell gridArea={{ md: 'main' }}>TestCell</Cell>
      </Grid>
    );
    const { getAllByText, container } = renderWithTheme(lightTheme, component);
    const result = getAllByText(/TestCell/);

    expect(result).toHaveLength(1);
    expect(container.childElementCount).toBe(1);
  });
});
