// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, HTMLAttributes } from 'react';

import { BaseProps } from '../Base';
import { StyledButton } from './Styled';

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'css'>, BaseProps {
  /** The icon element to be shown */
  icon?: JSX.Element;
  /** The text to be shown */
  label: string;
  /** The style of button to be shown */
  variant?: ButtonVariant;
  /** Determines if the button is selected */
  selected?: boolean;
}

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'icon';

export const Button = forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
  <StyledButton
    {...props}
    className={props.className || ''}
    as={props.tag}
    ref={ref}
    aria-label={props.label}
    data-testid='button'
  >
    { props.icon &&
      <span className='icon' data-testid='button-icon'>
        {props.icon}
      </span>
    }
    <span className='label' data-testid='button-label'>{props.label}</span>
  </StyledButton>

));

export default Button;
