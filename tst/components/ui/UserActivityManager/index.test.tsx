// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import '@testing-library/jest-dom';

import React, { useState } from 'react';

import UserActivityManager from '../../../../src/components/ui/UserActivityManager';
import { UserActivityContext } from '../../../../src/providers/UserActivityProvider';
import lightTheme from '../../../../src/theme/light';
import { renderWithTheme } from '../../../test-helpers';

describe('UserActivityManager', () => {
  const testString = 'bananas';

  interface UserActivityState {
    isUserActive: boolean | null;
  }
  const ComponentUnderTest = ({ isUserActive = false }: UserActivityState) => {
    const [state] = useState({ isUserActive });
    return (
      <UserActivityContext.Provider value={state}>
        <UserActivityManager>
          <h3>{testString}</h3>
        </UserActivityManager>
      </UserActivityContext.Provider>
    );
  };

  it('should render a UserActivityManager when user isUserActive=true', () => {
    const component = <ComponentUnderTest isUserActive></ComponentUnderTest>;

    const { queryByText } = renderWithTheme(lightTheme, component);

    expect(queryByText(testString)).toBeInTheDocument();
  });

  it('should render a UserActivityManager when user isUserActive=false', () => {
    const component = (
      <ComponentUnderTest isUserActive={false}></ComponentUnderTest>
    );

    const { queryByText, container } = renderWithTheme(lightTheme, component);
    container.focus();
    expect(queryByText(testString)).toBeInTheDocument();
  });
});
