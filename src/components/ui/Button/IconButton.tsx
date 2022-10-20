// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef } from 'react';

import Button, { ButtonProps } from './';
import { StyledIconButtonWrapper } from './Styled';

export interface IconButtonProps extends ButtonProps {
  /** Render a component to the top right area of the IconButton */
  badge?: React.ReactNode | React.ReactNode[];
}

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <StyledIconButtonWrapper>
      <Button ref={ref} variant="icon" {...props} />
      {props.badge}
    </StyledIconButtonWrapper>
  )
);

export default IconButton;
