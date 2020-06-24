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
  showLabels: boolean;
  layout: ControlBarLayout;
}

export const ControlBar: FC<ControlBarProps> = (props) => {
  const { layout, showLabels = false, tag, className, children, ...rest } = props;
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
