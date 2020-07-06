// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Badge from '../Badge';
import { StyledHeader } from './Styled';
import { BaseProps } from '../Base';

interface RosterHeaderProps extends BaseProps {
  title: string;
  badge?: number;
}

export const RosterHeader: React.FC<RosterHeaderProps> = ({
  tag,
  title,
  badge,
  className,
  children,
  ...rest
}) => {
  return (
    <StyledHeader as={tag} className={className || ''} {...rest}>
      <div className="title">{title}</div>
      {typeof badge === 'number' && badge > -1 && (
        <Badge className="badge" value={badge} />
      )}
      <div className="content">{children}</div>
    </StyledHeader>
  );
};

export default RosterHeader;
