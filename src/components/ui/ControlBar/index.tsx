// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import { BaseProps } from '../Base';
import ControlBarContext from './ControlBarContext';
import { StyledControlBar } from './Styled';

export type ControlBarLayout =
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'undocked-horizontal'
  | 'undocked-vertical';

export interface ControlBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** Whether or not the labels of the control bar items should show. */
  showLabels: boolean;
  /** The layout of the control bar, available options are: `top`, `bottom`, `right`, `left`, `undocked-horizontal`, and `undocked-vertical`. */
  layout: ControlBarLayout;
  responsive?: boolean;
}

export const ControlBar: FC<ControlBarProps> = ({
  tag,
  layout,
  showLabels = false,
  responsive = true,
  className,
  children,
  ...rest
}) => {
  const controlBarContext = { layout, showLabels };

  return (
    <ControlBarContext.Provider value={controlBarContext}>
      <StyledControlBar
        className={className || ''}
        responsive={responsive}
        as={tag}
        {...controlBarContext}
        data-testid="control-bar"
        {...rest}
      >
        {children}
      </StyledControlBar>
    </ControlBarContext.Provider>
  );
};

export default ControlBar;
