import React, { FC } from 'react';
import { StyledBadge } from './Styled';

export interface BadgeProps {
  value: string | number;
  status?: "default" | "alert";
}

export const Badge: FC<BadgeProps> = ({ value, status = "default" }) => {
  return (
    <StyledBadge status={status}>
      {value}
    </StyledBadge>
  );
};

Badge.displayName = 'Badge';

export default Badge;
