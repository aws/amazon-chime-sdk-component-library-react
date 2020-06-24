import React, { FC } from 'react';

import { StyledFlex } from './Styled';
import { BaseProps } from '../Base';

type AlignItems =
| 'baseline'
| 'center'
| 'flex-end'
| 'flex-start'
| 'inherit'
| 'initial'
| 'stretch';

type justifyContent =
| 'flex-start'
| 'flex-end'
| 'center'
| 'space-between'
| 'space-around'
| 'initial'
| 'inherit';

type Layout =
| 'fill-space'
| 'fill-space-centered'
| 'equal-columns'
| 'stack';

type FlexDirection = 'row' | 'column';
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export interface FlexProps extends BaseProps {
  alignItems?: AlignItems
  container?: boolean;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  flex?: string;
  flexBasis?: number;
  flexGrow?: number;
  flexShrink?: number;
  justifyContent?: justifyContent
  layout?: Layout;
  style?: {};
}

export const Flex: FC<FlexProps> = ({ children, className, tag, ...props }) => (
  <StyledFlex {...props} as={tag} data-testid='flex' className={className || ''}>
    {children}
  </StyledFlex>
);

export default Flex;
