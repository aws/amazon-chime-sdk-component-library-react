// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';
import { useUserActivityState } from '../../../providers/UserActivityProvider';
import { StyledUserActivityManager } from './Styled';

export interface Props {
  isActive?: boolean | null;
}

export const UserActivityManager: FC<Props> = ({ children }) => {
  const { isUserActive } = useUserActivityState();
  return (
    <StyledUserActivityManager isActive={isUserActive} className={`${isUserActive ? "active" : ""}` }>
      {children}
    </StyledUserActivityManager>
  );
};

UserActivityManager.displayName = 'UserActivityManager';

export default UserActivityManager;
