import styled from 'styled-components';

import { BadgeProps } from './';
import { baseStyles, baseSpacing } from '../Base';

export const StyledBadge = styled.span<Partial<BadgeProps>>`
  border-radius: 0.5rem;
  color: ${props => props.theme.colors.greys.white};
  font-size: 0.65rem;
  padding: 0.1rem 0.4rem 0.125rem;
  background-color: ${props => props.status === 'alert' ? props.theme.colors.error.primary : props.theme.colors.greys.grey60};

  ${baseSpacing};
  ${baseStyles}
`;
