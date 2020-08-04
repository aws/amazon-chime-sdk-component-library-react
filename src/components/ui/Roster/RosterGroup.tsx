// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Badge from '../Badge';
import Flex from '../Flex';
import { BaseProps } from '../Base';

import { StyledGroupWrapper, StyledGroup, StyledTitle } from './Styled';

interface Props extends BaseProps {
  /** The title of the roster group. */
  title?: string;
  /** The number of attendees within one roster group. */
  badge?: number;
}

export const RosterGroup: React.FC<Props> = ({
  tag,
  title,
  badge,
  className,
  children,
  ...rest
}) => {
  return (
    <StyledGroupWrapper as={tag} className={className || ''} {...rest}>
      {title && (
        <Flex alignItems="center" pl=".5rem" mb=".5rem">
          <StyledTitle>{title}</StyledTitle>
          {typeof badge === 'number' && badge > -1 && <Badge value={badge} />}
        </Flex>
      )}
      <StyledGroup>{children}</StyledGroup>
    </StyledGroupWrapper>
  );
};

export default RosterGroup;
