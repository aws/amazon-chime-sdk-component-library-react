// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { ControlBarProps, ControlBarLayout } from '.';
import { PopOverItemProps } from '../PopOver/PopOverItem';
import { baseStyles, baseSpacing } from '../Base';

interface StyledControlBarProps extends ControlBarProps {}

const layoutMap = {
  'undocked-vertical': 'flex-direction: column; padding: 0.375rem 0; ',
  'undocked-horizontal': 'flex-direction: row; padding: 1.125rem;',
  top:
    'flex-direction: row; width: 100%; top: 0; position: fixed; padding: 1.125rem;',
  bottom:
    'flex-direction: row; width: 100%; bottom: 0; position: fixed; padding: 1.125rem;',
  right: 'flex-direction: column; height: 100%; right: 0; position: fixed;',
  left: 'flex-direction: column; height: 100%; left: 0; position: fixed;'
};

const gridTemplateColumnMap = {
  popOver: 'grid-template-columns: 1.5rem 1.5rem',
  'popOver&vertical': 'grid-template-columns: 1.5rem 1.5rem 1.5rem'
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
  left: 'unset;'
};

export const StyledControlBar = styled.div<StyledControlBarProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.controlBar.bgd};
  opacity: ${props => props.theme.controlBar.opacity};
  border: ${({ theme, layout }) =>
    isUndocked(layout) ? 'none' : theme.controlBar.border};
  box-shadow: ${({ theme, layout }) =>
    isUndocked(layout) ? theme.controlBar.shadow : 'none'};
  ${({ layout }) => layoutMap[`${layout}`]};

  ${({ theme }) => theme.mediaQueries.max.sm} {
    padding: 1rem;
    padding-top: ${({ showLabels }) => (showLabels ? '1.25rem' : '1rem')};
    ${unsetPosition}
    ${({ layout }) =>
      isVertical(layout) ? layoutMap['left'] : layoutMap['bottom']};
    box-shadow: ${({ theme }) => theme.controlBar.shadow};
    border: none;
  }

  ${({ theme }) => theme.mediaQueries.max.xs} {
    padding: 1rem;
    padding-top: ${({ showLabels }) => (showLabels ? '1.25rem' : '1rem')};
    justify-content: ${({ layout }) =>
      isVertical(layout) ? 'center' : 'space-around'};
    ${unsetPosition}
    ${({ layout }) =>
      isVertical(layout) ? layoutMap['left'] : layoutMap['bottom']};
    box-shadow: ${({ theme }) => theme.controlBar.shadow};
    border: none;
  }

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
    ${(!isVertical(layout) && (popOver || children) && gridTemplateColumnMap['popOver']) ||
      ''}
    ${(isVertical(layout) &&
      (popOver || children) &&
      gridTemplateColumnMap['popOver&vertical']) ||
      ''}
  `};

  .ch-control-bar-item-iconButton {
    color: ${({ theme, isSelected }) => isSelected ? `${theme.controlBar.selected.text}` : theme.controlBar.text};
    background-color: ${({ isSelected, theme }) =>  isSelected ? `${theme.controlBar.selected.bgd}` : 'inherit'};
    grid-column-start: ${({ layout, popOver, children }) => isVertical(layout) && (popOver || children) ? '2' : '1'};

    .ch-icon {
      width: 1.5rem;
      height: 1.5rem;
      background-color: inherit;
      border-radius: 100%;
    }
  }

  .ch-control-bar-popover {
    background-color: inherit;
    grid-column-start: ${({ layout, popOver, children }) => isVertical(layout) && (popOver || children) ? '2' : '1'};
    color: ${({ theme }) => theme.controlBar.text};

    .isOpen.ch-control-bar-item-caret {
      color: ${props => props.theme.colors.primary.main};
    }

    .ch-control-bar-item-caret {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .ch-control-bar-item-label {
    color: ${({ theme }) => theme.controlBar.text};
    grid-row-start: 2;
    font-size: ${props =>
      props.theme.fontSizes.footnote
        .fontSize}; /* TODO: get updated font size from design */
    padding-top: 0.25rem;
    justify-self: center;
    grid-column: ${({ layout, popOver, children }) =>
      isVertical(layout) && (popOver || children) ? '2' : '1'};
  }

  ${({ theme }) => theme.mediaQueries.max.sm} {
    grid-template-columns: unset;
    justify-content: space-around;

    button ~ span {
      display: none;
    }
  }

  ${({ theme }) => theme.mediaQueries.max.xs} {
    grid-template-columns: unset;
    margin: ${({ layout }) => (isVertical(layout) ? '0.75rem 0' : '0')};

    button ~ span {
      display: none;
    }
  }
`;
