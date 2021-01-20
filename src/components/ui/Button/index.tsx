// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, HTMLAttributes } from 'react';

import { BaseProps } from '../Base';
import { StyledButton } from './Styled';

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'css'>,
    BaseProps {
  /** The icon element to be shown in the button. */
  icon?: JSX.Element;
  /** The text of the button. */
  label: string;
  /** The variant of button. */
  variant?: ButtonVariant;
  /** Whether or not the button is selected. */
  selected?: boolean;
  /** Defines the size of the icon in the button, it defaults to `sm`. */
  iconSize?: IconSize;
  /** Whether or not the button is disabled. **/
  disabled?: boolean;
}

export type IconSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'icon';

export const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <StyledButton
      {...props}
      className={props.className || ''}
      as={props.tag}
      ref={ref}
      aria-label={props.label}
      data-testid="button"
      disabled={props.disabled}
    >
      {props.icon && (
        <span className="ch-icon" data-testid="button-icon">
          {props.icon}
        </span>
      )}
      <span className="ch-label" data-testid="button-label">
        {props.label}
      </span>
    </StyledButton>
  )
);

export default Button;
