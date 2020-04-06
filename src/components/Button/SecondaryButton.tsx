import React from 'react';

import { Button, ButtonProps } from './';

export const SecondaryButton: React.FC<ButtonProps> = props => <Button variant='secondary' {...props} />;

export default SecondaryButton;
