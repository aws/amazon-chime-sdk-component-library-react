import React, { useEffect } from 'react';

import { StyledNotification, StyledCloseIconButton } from './Styled';
import { Caution, CheckRound, Information, Remove, Clock } from '../icons';
import { Severity } from '../../providers/NotificationProvider';

export const DEFAULT_DELAY: number = 8000;

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  severity?: Severity;
  message?: string;
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
    severity = Severity.ERROR,
    message,
    onClose,
    autoClose = false,
    autoCloseDelay = DEFAULT_DELAY,
  } = props;
  
  const ariaLive = severity === Severity.ERROR ? 'assertive' : 'polite';
  const ariaRole = severity === Severity.ERROR ? 'alert' : 'status';

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
      <div className='severity-icon' data-testid='severity-icon'>{iconMapping[severity]}</div>
      <output className='message' data-testid='message' role={ariaRole}>
        {message}
      </output>
      {onClose && (
        <StyledCloseIconButton label='close' icon={<Remove />} onClick={onClose} data-testid='closeButton' />
      )}
    </StyledNotification>
  );
};

export default Notification;
