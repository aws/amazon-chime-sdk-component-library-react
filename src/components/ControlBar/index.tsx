import React, { FC } from 'react';

import ControlBarContext from './ControlBarContext';

import { StyledControlBar } from './Styled';

export type ControlBarLayout = 
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'undocked-horizontal'
  | 'undocked-vertical';

export interface ControlBarProps extends React.HTMLAttributes<HTMLDivElement> {
  showLabels: boolean;
  layout: ControlBarLayout;
}

export const ControlBar:FC<ControlBarProps> = ({ layout, showLabels = false, children }) => {
  const controlBarContext = { layout, showLabels }
  return (
    <ControlBarContext.Provider value={controlBarContext}>
      <StyledControlBar {...controlBarContext} data-testid='control-bar'>{children}</StyledControlBar>
    </ControlBarContext.Provider>
  )
}

export default ControlBar;