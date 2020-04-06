import styled, { css } from 'styled-components';
import { ButtonProps } from './';

export const StyledButton = styled.button<ButtonProps>`
  font-size: 0.85rem;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.radii.default};
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: flex;
  align-items: center;

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
`;

export const StyledPrimaryButton = css`
  background-color: ${props => props.theme.colors.button.primary.static};
  color: ${props => props.theme.colors.greys.white};
  box-shadow: ${props => props.theme.shadows.default};

  &:hover {
    background-color: ${props => props.theme.colors.button.primary.hover};
  }

  &:focus {
    background-color: ${props => props.theme.colors.button.primary.focus};
  }

  &:active {
    background-color: ${props => props.theme.colors.button.primary.active};
  }
`;

export const StyledSecondaryButton = css`
  background-color: ${props => props.theme.colors.button.secondary.static};
  color: ${props => props.theme.colors.greys.grey100};
  box-shadow: ${props => props.theme.shadows.default};


  &:hover {
    background-color: ${props => props.theme.colors.button.secondary.hover};
  }

  &:focus {
    background-color: ${props => props.theme.colors.button.secondary.focus};
  }

  &:active {
    background-color: ${props => props.theme.colors.button.secondary.active};
  }
`;
