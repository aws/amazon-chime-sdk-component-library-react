import styled, { css } from 'styled-components';

import { FlexProps } from './';
import { baseStyles, baseSpacing } from '../Base';

export const fillSpace = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const fillSpaceCentered = css`
  ${fillSpace};
  align-items: center;
  justify-content: center;
`;

export const equalColumns = css`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: stretch;

  > * {
    flex-grow: 1;
    flex-basis: 50%;
  }
`;

export const stack = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    width: 100%;
  }
`;

const layoutMap = {
  'fill-space': fillSpace,
  'fill-space-centered': fillSpaceCentered,
  'equal-columns': equalColumns,
  stack,
};

export const StyledFlex = styled.div<FlexProps>`
  align-items: ${props => props.alignItems || 'stretch'};
  display: ${props => props.container ? 'flex' : 'block'};
  flex: ${props => props.flex || ''};
  flex-basis: ${props => props.flexBasis || 'auto'};
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-grow: ${props => props.flexGrow || ''};
  flex-shrink: ${props => props.flexShrink || 1};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
  justify-content: ${props => props.justifyContent || 'flex-start'};

  // layout variants
  ${props => !!props.layout && layoutMap[props.layout]}

  ${baseSpacing}
  ${baseStyles}
`;
