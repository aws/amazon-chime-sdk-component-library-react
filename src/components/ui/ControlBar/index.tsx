// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC, HTMLAttributes } from 'react';

import ControlBarContext from './ControlBarContext';
import { BaseProps } from '../Base';
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
  /** Whether labels of control bar items will be shown, or not. */
  showLabels: boolean;
  /** The layout of control bar, available options are: `top`, `bottom`, `right`, `left`, `undocked-horizontal` and `undocked-vertical`. */
  layout: ControlBarLayout;
}

export const ControlBar: FC<ControlBarProps> = props => {
  const {
    tag,
    layout,
    showLabels = false,
    className,
    children,
    ...rest
  } = props;
  const controlBarContext = { layout, showLabels };

  return (
    <ControlBarContext.Provider value={controlBarContext}>
      <StyledControlBar
        className={className || ''}
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
