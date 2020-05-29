import styled from 'styled-components';

import { ControlBarProps } from '.';
import { isUndocked, isVertical } from './ControlBarItem';
import { PopOverItemProps } from 'components/PopOver/PopOverItem';

interface StyledControlBarProps extends ControlBarProps {}

const layoutMap = {
  'undocked-vertical': 'flex-direction: column; padding: 0.375rem 0; ',
  'undocked-horizontal': 'flex-direction: row; padding: 1.125rem;',
  'top': 'flex-direction: row; width: 100%; top: 0; position: fixed; padding: 1.125rem;',
  'bottom': 'flex-direction: row; width: 100%; bottom: 0; position: fixed; padding: 1.125rem;',
  'right': 'flex-direction: column; height: 100%; right: 0; position: fixed;',
  'left': 'flex-direction: column; height: 100%; left: 0; position: fixed;',
}

const gridTemplateColumnMap = {
  'popOver': 'grid-template-columns: 1.5rem 1.5rem',
  'popOver&vertical': 'grid-template-columns: 1.5rem 1.5rem 1.5rem',
}

export const StyledControlBar = styled.div<StyledControlBarProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.controlBar.bgd};
  opacity: ${props => props.theme.controlBar.opacity};
  border: ${({ theme, layout }) => isUndocked(layout) ?  'none' : theme.controlBar.border};
  box-shadow: ${({ theme, layout }) => isUndocked(layout) ? theme.controlBar.shadow : 'none'};
  ${({ layout }) => layoutMap[`${layout}`]};
`;

interface StyledControlBarItemProps extends StyledControlBarProps {
  popOver: PopOverItemProps[] | null;
}

export const StyledControlBarItem = styled.div<StyledControlBarItemProps>`
  margin: ${({ layout }) => isVertical(layout) ? '0.625rem 0' : '0 0.625rem'};
  display: grid;
  grid-template-rows: ${({ showLabels }) => showLabels ? '1.5rem 1rem' : '1.5rem'};
  justify-items: center;
  align-items: center;
  ${({ popOver, layout }) => `
    ${!isVertical(layout) && popOver && gridTemplateColumnMap['popOver'] || ''}
    ${isVertical(layout) && popOver && gridTemplateColumnMap['popOver&vertical'] || ''}
  `};

  button {
    color: ${({ theme }) => theme.controlBar.text};
    border: none;
    outline: none;
    background-color: inherit;
    grid-column-start: ${({ layout, popOver }) => isVertical(layout) && popOver ? '2' : '1'};
    
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      background-color: inherit;
      border-radius: 100%;
    }

    .controlBarItem__caret {
      width: 1.5rem;
      height: 1.5rem;
    }
    
    .isOpen.controlBarItem__caret {
      color: ${props => props.theme.colors.primary.main};
    }
  }

  .controlBarItem__label {
      grid-row-start: 2;
      font-size: ${props => props.theme.fontSizes.label.fontSize}; /* TODO: get updated font size from design */
      padding-top: 0.25rem;
      justify-self: center;
      grid-column: ${({ layout, popOver }) => isVertical(layout) && popOver ? '2' : '1'};
    }
`;
