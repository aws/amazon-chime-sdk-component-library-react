// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

import { darkTheme } from '../../../theme/dark';
import { lightTheme } from '../../../theme/light';
import { baseSpacing, baseStyles } from '../Base';
import { PopOverItemProps } from '../PopOver/PopOverItem';
import { ControlBarLayout, ControlBarProps } from '.';

interface StyledControlBarProps extends ControlBarProps {
  theme: typeof lightTheme | typeof darkTheme;
}

const layoutMap = {
  'undocked-vertical': 'flex-direction: column;',
  'undocked-horizontal': 'flex-direction: row;',
  top: 'flex-direction: row; width: 100%; top: 0; position: fixed;',
  bottom: 'flex-direction: row; width: 100%; bottom: 0; position: fixed;',
  right: 'flex-direction: column; height: 100%; right: 0; position: fixed;',
  left: 'flex-direction: column; height: 100%; left: 0; position: fixed;',
};

const gridTemplateColumnMap = {
  popOver: 'grid-template-columns: 2.5rem minmax(0.5rem, auto);',
  'popOver&vertical': 'grid-template-columns: 1.5rem 1.5rem 1.5rem',
};

export const isVertical = (layout: ControlBarLayout) => {
  return (
    layout === 'right' || layout === 'left' || layout === 'undocked-vertical'
  );
};

export const isUndocked = (layout: ControlBarLayout) => {
  return layout === 'undocked-vertical' || layout === 'undocked-horizontal';
};
const unsetPosition = {
  top: 'unset;',
  bottom: 'unset;',
  right: 'unset;',
  left: 'unset;',
};

export const responsiveStyles = (props: StyledControlBarProps) => {
  return css`
    ${({ theme }) => theme.mediaQueries.max.sm} {
      ${unsetPosition}
      ${(props: StyledControlBarProps) =>
        isVertical(props.layout) ? layoutMap['left'] : layoutMap['bottom']};
      box-shadow: ${(props: StyledControlBarProps) =>
        props.theme.controlBar.shadow};
      border: none;
      height: ${(props: StyledControlBarProps) =>
        isVertical(props.layout) && '100%'};
      width: ${(props: StyledControlBarProps) =>
        !isVertical(props.layout) && '100%'};
    }

    ${({ theme }) => theme.mediaQueries.max.xs} {
      justify-content: ${(props: StyledControlBarProps) =>
        isVertical(props.layout) ? 'center' : 'space-around'};
      ${unsetPosition}
      ${(props: StyledControlBarProps) =>
        isVertical(props.layout) ? layoutMap['left'] : layoutMap['bottom']};
      box-shadow: ${({ theme }) => theme.controlBar.shadow};
      border: none;
    }
  `;
};

export const StyledControlBar = styled.div<StyledControlBarProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme, layout }) =>
    isUndocked(layout) ? theme.radii.default : '0'};
  background-color: ${(props) => props.theme.controlBar.bgd};
  opacity: ${(props) => props.theme.controlBar.opacity};
  border: ${({ theme, layout }) =>
    isUndocked(layout) ? 'none' : theme.controlBar.border};
  box-shadow: ${({ theme, layout }) =>
    isUndocked(layout) ? theme.controlBar.shadow : 'none'};
  ${({ layout }) => layoutMap[`${layout}`]};

  ${(props) => props.responsive && responsiveStyles(props)}

  width: ${({ layout }) => isVertical(layout) && '5rem'};
  height: ${({ layout }) => !isVertical(layout) && '5rem'};

  ${baseSpacing}
  ${baseStyles}
`;

interface StyledControlBarItemProps extends StyledControlBarProps {
  popOver: PopOverItemProps[] | null;
  isSelected: boolean;
}

export const StyledControlBarItem = styled.div<StyledControlBarItemProps>`
  margin: ${({ layout }) => (isVertical(layout) ? '0.625rem 0' : '0 0.625rem')};
  display: grid;
  grid-template-rows: ${({ showLabels }) =>
    showLabels ? '1.5rem 1rem' : '1.5rem'};
  justify-items: center;
  align-items: center;
  ${({ popOver, layout, children }) => `
    ${
      (!isVertical(layout) &&
        (popOver || children) &&
        gridTemplateColumnMap['popOver']) ||
      ''
    }
    ${
      (isVertical(layout) &&
        (popOver || children) &&
        gridTemplateColumnMap['popOver&vertical']) ||
      ''
    }
  `};

  > :first-child {
    grid-column-start: ${({ layout, popOver, children }) =>
      isVertical(layout) && (popOver || children) ? '2' : '1'};
  }

  .ch-control-bar-item-iconButton {
    .ch-icon {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
    }
  }

  .ch-control-bar-item-caret {
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;

    .ch-icon {
      width: 100%;
      height: 100%;
    }

    // setting this transform on the shape so we
    // don't overwrite the rotate transform on the Caret
    .Svg g {
      transform: scale(1.333);
      transform-origin: 50% 50%;
    }
  }

  .ch-control-bar-popover {
    background-color: inherit;
    grid-column-start: ${({ layout, popOver, children }) =>
      isVertical(layout) && (popOver || children) ? '2' : '1'};
    color: ${({ theme }) => theme.controlBar.text};

    .isOpen.ch-control-bar-item-caret {
      color: ${(props) => props.theme.colors.primary.main};
    }
  }

  .ch-control-bar-item-label {
    color: ${({ theme }) => theme.controlBar.text};
    grid-row-start: 2;
    font-size: ${(props) =>
      props.theme.fontSizes.footnote
        .fontSize}; /* TODO: get updated font size from design */
    padding-top: 0.25rem;
    justify-self: center;
    grid-column: ${({ layout, popOver, children }) =>
      isVertical(layout) && (popOver || children) ? '2' : '1'};
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    justify-content: space-around;
    button ~ span {
      display: none;
    }
  }

  ${({ theme }) => theme.mediaQueries.max.xs} {
    margin: ${({ layout }) => (isVertical(layout) ? '0.75rem 0' : '0')};
    button ~ span {
      display: none;
    }
  }
`;
