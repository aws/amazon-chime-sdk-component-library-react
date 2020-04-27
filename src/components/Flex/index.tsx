import React, { FC } from 'react';
import { StyledFlex } from './Styled';

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

export interface FlexProps {
  as?: any;
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
}

export const Flex: FC<FlexProps> = ({ children, ...props }) => (
  <StyledFlex {...props}>
    {children}
  </StyledFlex>
);

export default Flex;
