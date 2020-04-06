import React from 'react';

import { ButtonProps, Button } from './';

export const PrimaryButton: React.FC<ButtonProps> = props => <Button variant='primary' {...props} />;

export default PrimaryButton;
