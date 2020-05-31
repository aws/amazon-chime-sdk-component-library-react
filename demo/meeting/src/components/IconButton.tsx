import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  id?: string
  disabled?: boolean;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
}

const IconButton: React.FC<Props> = forwardRef(
  ( props: Props, ref?: React.Ref<HTMLButtonElement>) => {
    const { icon, ...rest } = props;
    return (
      <button
        ref={ref}
        {...rest}
      >
        {<FontAwesomeIcon icon={icon} border />}
      </button>
    );
  }
);

export default IconButton;
