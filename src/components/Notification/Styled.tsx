import styled, { css } from 'styled-components';

import { NotificationProps, Severity, Size } from './';

const sizes = {
  sm: '30rem',
  md: '50rem',
  lg: '70rem',
  fill: '100%',
};

interface StyledNotificationProps extends NotificationProps {
  severity: Severity;
  size: Size;
}

export const StyledNotification = styled.div<StyledNotificationProps>`
  position: relative;
  display: flex;
  align-items: start;
  width: ${({ size }) => sizes[size]};
  max-width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  border-radius: 0.25rem;
  color: ${props => props.theme.colors.greys.grey100};
  font-size: 1rem;
  box-sizing: border-box;
  background: ${({ severity, theme }) => theme.colors[severity].main};

  .icon {
    width: 2rem;
    flex-shrink: 0;
    color: ${props => props.theme.colors.greys.grey100};
  }

  .message {
    margin: 0 1.5rem 0 0.5rem;
    line-height: 2;
  }
`;

export const StyledButton = css`
  margin-left: auto;
  border: 0.125rem solid ${props => props.theme.colors.greys.grey100};
  background-color: unset;
  color: ${props => props.theme.colors.greys.grey100};
`;
