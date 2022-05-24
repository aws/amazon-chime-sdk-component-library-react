// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React from 'react';

import InfiniteList, {
  InfiniteListProps,
} from '../../../../../src/components/ui/Chat/InfiniteList';
import lightTheme from '../../../../../src/theme/light';
import {
  renderWithTheme,
  setupIntersectionObserverMock,
} from '../../../../test-helpers';

describe('InfiniteList', () => {
  setupIntersectionObserverMock();
  window.HTMLElement.prototype.scrollIntoView = function () {};

  const dummyItems = (size: number) => {
    const listItems = [];
    for (let i = 1; i <= size; i++) {
      listItems.push(<div>{i}</div>);
    }
    return listItems;
  };

  const defaultProps: InfiniteListProps = {
    onLoad: async () => {},
    items: dummyItems(20),
    isLoading: false,
  };

  it('should render a list', () => {
    const component = <InfiniteList {...defaultProps} />;
    const { getByTestId } = renderWithTheme(lightTheme, component);
    const list = getByTestId('infinite-list');

    expect(list).toBeInTheDocument();
  });

  it('should render children in li tags', () => {
    const component = <InfiniteList {...defaultProps} />;
    renderWithTheme(lightTheme, component);

    expect(document.querySelectorAll('li')).toHaveLength(20);
  });
});
