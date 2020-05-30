import styled, { css } from 'styled-components';

import { visuallyHidden } from '../../utils/style';
import { ButtonProps } from './';

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${props => props.theme.radii.default};
  font-size: ${props => props.theme.fontSizes.text.fontSize};
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${props => props.variant === 'primary' && StyledPrimaryButton}
  ${props => props.variant === 'secondary'&& StyledSecondaryButton}
  ${props => props.variant === 'icon' && StyledIconButton}
`;

export const StyledPrimaryButton = css<ButtonProps>`
  background-color: ${props => props.selected ? props.theme.buttons.primary.selected.bgd : props.theme.buttons.primary.static.bgd};
  color: ${props => props.selected ? props.theme.buttons.primary.selected.color : props.theme.buttons.primary.static.text};
  border: ${props => props.selected ? props.theme.buttons.primary.selected.border : props.theme.buttons.primary.static.border};
  box-shadow: ${props => props.theme.shadows.default};

  &:hover {
    background-color: ${props => props.theme.buttons.primary.hover.bgd};
    border: ${props => props.theme.buttons.primary.hover.border};
    color: ${props => props.theme.buttons.primary.hover.text};
  }

  &:focus {
    background-color: ${props => props.theme.buttons.primary.focus.bgd};
    border: ${props => props.theme.buttons.primary.focus.border};
    color: ${props => props.theme.buttons.primary.focus.text};
  }

  &:active {
    background-color: ${props => props.theme.buttons.primary.active.bgd};
    border: ${props => props.theme.buttons.primary.active.border};
    color: ${props => props.theme.buttons.primary.active.text};
  }
`;

export const StyledSecondaryButton = css<ButtonProps>`
  background-color: ${props => props.selected ? props.theme.buttons.secondary.selected.bgd : props.theme.buttons.secondary.static.bgd};
  color: ${props => props.selected ? props.theme.buttons.secondary.selected.color : props.theme.buttons.secondary.static.text};
  border: ${props => props.selected ? props.theme.buttons.secondary.selected.border : props.theme.buttons.secondary.static.border};
  box-shadow: ${props => props.theme.shadows.default};

  &:hover {
    background-color: ${props => props.theme.buttons.secondary.hover.bgd};
    border: ${props => props.theme.buttons.secondary.hover.border};
    color: ${props => props.theme.buttons.secondary.hover.text};
  }

  &:focus {
    background-color: ${props => props.theme.buttons.secondary.focus.bgd};
    border: ${props => props.theme.buttons.secondary.focus.border};
    color: ${props => props.theme.buttons.secondary.focus.text};
  }

  &:active {
    background-color: ${props => props.theme.buttons.secondary.active.bgd};
    border: ${props => props.theme.buttons.secondary.active.border};
    color: ${props => props.theme.buttons.secondary.active.text};
  }
`;

export const StyledIconButton = css<ButtonProps>`
  background-color: ${props => props.selected ? props.theme.buttons.icon.selected.bgd : props.theme.buttons.icon.static.bgd};
  color: ${props => props.selected ? props.theme.buttons.icon.selected.text : props.theme.buttons.icon.static.text};
  border: ${props => props.selected ? props.theme.buttons.icon.selected.border : props.theme.buttons.icon.static.border};
  border-radius: ${props => props.theme.radii.circle};
  padding: 0.1875rem;

  > .label {
    ${visuallyHidden};
  }

  > .icon {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
  }

  &:hover {
    background-color: ${props => props.theme.buttons.icon.hover.bgd};
    border: ${props => props.theme.buttons.icon.hover.border};
    color: ${props => props.theme.buttons.icon.hover.text};
  }

  &:focus {
    background-color: ${props => props.theme.buttons.icon.focus.bgd};
    border: ${props => props.theme.buttons.icon.focus.border};
    color: ${props => props.theme.buttons.icon.focus.text};
  }

  &:active {
    background-color: ${props => props.theme.buttons.icon.active.bgd};
    border: ${props => props.theme.buttons.icon.active.border};
    color: ${props => props.theme.buttons.icon.active.text};
  }
`;
