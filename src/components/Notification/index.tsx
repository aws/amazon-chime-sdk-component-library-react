import React, { useState, useEffect } from 'react';

import { StyledNotification, StyledCloseIconButton } from './Styled';
import { Caution, CheckRound, Information, Remove, Clock } from '../icons';

export type Severity = 'success' | 'warning' | 'error' | 'info';

export const DEFAULT_DELAY: number = 8000;

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  severity?: Severity;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const iconMapping = {
  success: <CheckRound />,
  warning: <Clock />,
  error: <Caution />,
  info: <Information />,
};

export const Notification: React.FC<NotificationProps> = props => {
  const {
    severity = 'error',
    icon = iconMapping[severity],
    onClose,
    autoClose = false,
    autoCloseDelay = DEFAULT_DELAY,
    children,
  } = props;
  
  const ariaLive = severity === 'error' ? 'assertive' : 'polite';
  const ariaRole = severity === 'error' ? 'alert' : 'status';

  useEffect(() => {
    if (!autoClose) {
      return;
    }
    const timer = setTimeout(onClose, autoCloseDelay);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <StyledNotification
      aria-live={ariaLive}
      role={ariaRole}
      severity={severity}
      {...props}
      data-testid='notification'
    >
      <div className='severity-icon' data-testid='severity-icon'>{icon}</div>
      <div className='message' data-testid='message'>
        {children}
      </div>
      {onClose && (
        <StyledCloseIconButton label='close' icon={<Remove />} onClick={onClose} data-testid='closeButton' />
      )}
    </StyledNotification>
  );
};

export default Notification;
