import React, { forwardRef } from 'react';
import { StyledButton } from './Styled';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element;
  label: string;
  variant?: ButtonVariant;
  selected?: boolean;
}

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'icon';

export const Button = forwardRef((props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
  <StyledButton
    {...props}
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
