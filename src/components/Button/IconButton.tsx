import React, { forwardRef } from 'react';
import Button, { ButtonProps } from './';

export interface IconButtonProps extends ButtonProps {}

export const IconButton = forwardRef((props: IconButtonProps, ref: React.Ref<HTMLButtonElement>) => (
  <Button
    ref={ref}
    variant='icon'
    {...props}
  />
));

export default IconButton;


