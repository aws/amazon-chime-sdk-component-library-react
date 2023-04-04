// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import { useUserActivityState } from '../../../providers/UserActivityProvider';
import { StyledUserActivityManager } from './Styled';

export interface Props {
  isActive?: boolean | null;
}

export const UserActivityManager: FC<React.PropsWithChildren<Props>> = ({ children }) => {
  const { isUserActive } = useUserActivityState();
  return (
    <StyledUserActivityManager
      isActive={isUserActive}
      className={`${isUserActive ? 'ch-active' : ''}`}
    >
      {children}
    </StyledUserActivityManager>
  );
};

UserActivityManager.displayName = 'UserActivityManager';

export default UserActivityManager;
