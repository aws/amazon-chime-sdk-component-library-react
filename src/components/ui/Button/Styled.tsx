// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled, { css } from 'styled-components';

import { visuallyHidden } from '../../../utils/style';
import { baseSpacing, baseStyles } from '../Base';
import { ButtonProps } from './';

export const StyledButton = styled.button<ButtonProps>`
  border-radius: ${(props) => props.theme.radii.default};
  font-size: ${(props) => props.theme.fontSizes.text.fontSize};
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

  .ch-icon {
    width: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    height: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    margin-right: 0.25rem;
  }

  /* variant styles */
  ${(props) => props.variant === 'primary' && StyledPrimaryButton}
  ${(props) => props.variant === 'secondary' && StyledSecondaryButton}
  ${(props) => props.variant === 'icon' && StyledIconButton}

  ${baseSpacing}
  ${baseStyles}
`;

export const StyledPrimaryButton = css<ButtonProps>`
  background-color: ${(props) =>
    props.selected
      ? props.theme.buttons.primary.selected.bgd
      : props.theme.buttons.primary.static.bgd};
  color: ${(props) =>
    props.selected
      ? props.theme.buttons.primary.selected.text
      : props.theme.buttons.primary.static.text};
  border: ${(props) =>
    props.selected
      ? props.theme.buttons.primary.selected.border
      : props.theme.buttons.primary.static.border};
  box-shadow: ${(props) => props.theme.buttons.primary.static.shadow};

  &:focus {
    background-color: ${(props) => props.theme.buttons.primary.focus.bgd};
    border: ${(props) => props.theme.buttons.primary.focus.border};
    color: ${(props) => props.theme.buttons.primary.focus.text};
    box-shadow: ${(props) => props.theme.buttons.primary.focus.shadow};
  }

  &:hover {
    background-color: ${(props) => props.theme.buttons.primary.hover.bgd};
    border: ${(props) => props.theme.buttons.primary.hover.border};
    color: ${(props) => props.theme.buttons.primary.hover.text};
    box-shadow: ${(props) => props.theme.buttons.primary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${(props) => props.theme.buttons.primary.focus.shadow};
  }

  &:active {
    background-color: ${(props) => props.theme.buttons.primary.active.bgd};
    border: ${(props) => props.theme.buttons.primary.active.border};
    color: ${(props) => props.theme.buttons.primary.active.text};
    box-shadow: ${(props) => props.theme.buttons.primary.active.shadow};
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.primary.disabled.bgd};
    border: ${(props) => props.theme.buttons.primary.disabled.border};
    color: ${(props) => props.theme.buttons.primary.disabled.text};
    cursor: not-allowed;
  }
`;

export const StyledSecondaryButton = css<ButtonProps>`
  background-color: ${(props) =>
    props.selected
      ? props.theme.buttons.secondary.selected.bgd
      : props.theme.buttons.secondary.static.bgd};
  color: ${(props) =>
    props.selected
      ? props.theme.buttons.secondary.selected.text
      : props.theme.buttons.secondary.static.text};
  border: ${(props) =>
    props.selected
      ? props.theme.buttons.secondary.selected.border
      : props.theme.buttons.secondary.static.border};
  box-shadow: ${(props) => props.theme.buttons.secondary.shadow};

  &:focus {
    background-color: ${(props) => props.theme.buttons.secondary.focus.bgd};
    border: ${(props) => props.theme.buttons.secondary.focus.border};
    color: ${(props) => props.theme.buttons.secondary.focus.text};
    box-shadow: ${(props) => props.theme.buttons.secondary.focus.shadow};
  }

  &:hover {
    background-color: ${(props) => props.theme.buttons.secondary.hover.bgd};
    border: ${(props) => props.theme.buttons.secondary.hover.border};
    color: ${(props) => props.theme.buttons.secondary.hover.text};
    box-shadow: ${(props) => props.theme.buttons.secondary.hover.shadow};
  }

  &:focus:hover {
    box-shadow: ${(props) => props.theme.buttons.secondary.focus.shadow};
  }

  &:active {
    background-color: ${(props) => props.theme.buttons.secondary.active.bgd};
    border: ${(props) => props.theme.buttons.secondary.active.border};
    color: ${(props) => props.theme.buttons.secondary.active.text};
    box-shadow: ${(props) => props.theme.buttons.secondary.focus.shadow};
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.secondary.disabled.bgd};
    border: ${(props) => props.theme.buttons.secondary.disabled.border};
    color: ${(props) => props.theme.buttons.secondary.disabled.text};
    cursor: not-allowed;
  }
`;

const badgeLayout = {
  sm: css`
    top: -15%;
    left: 76%;
  `,
  md: css`
    top: 4%;
    left: 76%;
  `,
  lg: css`
    top: 10%;
    left: 76%;
  `,
};

export const StyledIconButton = css<ButtonProps>`
  background-color: ${(props) =>
    props.selected
      ? props.theme.buttons.icon.selected.bgd
      : props.theme.buttons.icon.static.bgd};
  color: ${(props) =>
    props.selected
      ? props.theme.buttons.icon.selected.text
      : props.theme.buttons.icon.static.text};
  border: ${(props) =>
    props.selected
      ? props.theme.buttons.icon.selected.border
      : props.theme.buttons.icon.static.border};
  border-radius: ${(props) => props.theme.radii.circle};
  padding: 0.1875rem;
  position: relative;

  > .ch-label {
    ${visuallyHidden};
  }

  > .ch-icon {
    width: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    height: ${(props) => props.theme.iconButtonSizes[props.iconSize || 'sm']};
    margin: 0;
  }

  &:focus {
    background-color: ${({ theme, selected }) =>
      selected
        ? theme.buttons.icon.selected.bgd
        : theme.buttons.icon.static.bgd};
    border: ${(props) => props.theme.buttons.icon.focus.border};
    color: ${(props) => props.theme.buttons.icon.focus.text};
    color: ${({ theme, selected }) =>
      selected
        ? theme.buttons.icon.selected.text
        : theme.buttons.icon.static.text};
    box-shadow: ${(props) => props.theme.buttons.icon.focus.shadow};
  }

  &:hover {
    background-color: ${(props) => props.theme.buttons.icon.hover.bgd};
    border: ${(props) => props.theme.buttons.icon.hover.border};
    color: ${(props) => props.theme.buttons.icon.hover.text};
  }

  &:active {
    background-color: ${(props) => props.theme.buttons.icon.active.bgd};
    border: ${(props) => props.theme.buttons.icon.active.border};
    color: ${(props) => props.theme.buttons.icon.active.text};
  }

  &:disabled {
    background-color: ${(props) => props.theme.buttons.icon.disabled.bgd};
    border: ${(props) => props.theme.buttons.icon.disabled.border};
    color: ${(props) => props.theme.buttons.icon.disabled.text};
    cursor: not-allowed;
  }

  + * {
    position: absolute;
    font-size: 0.55rem;
    z-index: 1;
    ${({ iconSize }) => (iconSize ? badgeLayout[iconSize] : badgeLayout['sm'])}
  }
`;

export const StyledIconButtonWrapper = styled.span`
  display: inline-block;
  position: relative;
`;
