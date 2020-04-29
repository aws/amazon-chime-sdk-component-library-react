import styled from 'styled-components';

import { NotificationProps, Severity } from '.';
import IconButton from '../Button/IconButton';

interface StyledNotificationProps extends NotificationProps {
  severity: Severity;
}

export const StyledCloseIconButton = styled(IconButton)``;

export const StyledNotification = styled.div<StyledNotificationProps>`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  color: ${({ theme, severity }) => theme.notification[severity].text};
  background-color: ${({ theme, severity }) => theme.colors[severity].primary};
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.notification.shadow};
  border-radius: 0.25rem;

  .severity-icon {
    width: 1.5rem;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .message {
    display: flex;
    flex-flow: column wrap;
    max-width: 26vw;
    line-height: 1.43;
    letter-spacing: -0.005625rem;
    font-size: 0.875rem;
    margin: 0.375rem 3.3125rem 0.375rem 0.75rem;
  }

  ${StyledCloseIconButton} {
    background-color: ${({ theme, severity }) => theme.colors[severity].primary};
    color: ${({ theme, severity }) => theme.notification[severity].closeButton.text}};
  }

  ${StyledCloseIconButton}:hover, ${StyledCloseIconButton}:focus {
    background-color: ${({ theme, severity }) => theme.notification[severity].closeButton.hover.bgd};
    color: ${({ theme, severity }) => theme.notification[severity].closeButton.hover.text};
  }

  ${StyledCloseIconButton}:active {
    background-color: ${({ theme, severity }) => theme.notification[severity].closeButton.active.bgd};
    color: ${({ theme, severity }) => theme.notification[severity].closeButton.active.text};
  }
`;