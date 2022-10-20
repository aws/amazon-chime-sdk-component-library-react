// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { FC } from 'react';

import { BaseProps } from '../Base';
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

type Layout = 'fill-space' | 'fill-space-centered' | 'equal-columns' | 'stack';

type FlexDirection = 'row' | 'column';
type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export interface FlexProps extends BaseProps {
  /** Defines the default behavior for how flex items are laid out along the cross axis on the current line. */
  alignItems?: AlignItems;
  /** If `true`, display = `flex`, otherwise, display = `block`. */
  container?: boolean;
  /** Establishes the main-axis, thus defining the direction flex items are placed in the flex container. */
  flexDirection?: FlexDirection;
  /** By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. */
  flexWrap?: FlexWrap;
  /** Shorthand for flex-grow, flex-shrink and flex-basis combined. */
  flex?: string;
  /** Defines the default size of an element before the remaining space is distributed. */
  flexBasis?: number;
  /** Defines the ability for a flex item to grow if necessary. */
  flexGrow?: number;
  /** Defines the ability for a flex item to shrink if necessary. */
  flexShrink?: number;
  /** Defines the alignment along the main axis. */
  justifyContent?: justifyContent;
  /** The pre-defined layout. */
  layout?: Layout;
  /** Additional style of the flex */
  style?: {};
}

export const Flex: FC<FlexProps> = ({
  children,
  className,
  tag,
  alignItems = 'stretch',
  container = false,
  flexBasis = 'auto',
  flexDirection = 'row',
  flexShrink = 1,
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
  ...props
}) => (
  <StyledFlex
    alignItems={alignItems}
    container={container}
    flexBasis={flexBasis}
    flexDirection={flexDirection}
    flexShrink={flexShrink}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    as={tag}
    data-testid="flex"
    className={className || ''}
    {...props}
  >
    {children}
  </StyledFlex>
);

export default Flex;
