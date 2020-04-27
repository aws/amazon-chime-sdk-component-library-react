import React, { forwardRef, Ref } from 'react';

import { StyledLabel } from './Styled';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef((props: LabelProps, ref: Ref<HTMLLabelElement>) => {

  return (
    <StyledLabel {...props}>
      {props.children}
    </StyledLabel>
  );
});

export default Label;
