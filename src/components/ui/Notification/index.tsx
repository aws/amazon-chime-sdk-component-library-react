// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, HTMLAttributes } from 'react';

import { StyledNotification, StyledCloseIconButton } from './Styled';
import { Caution, CheckRound, Information, Remove, Clock } from '../icons';
import { BaseProps } from '../Base';

export const DEFAULT_DELAY: number = 6000;

enum Severity {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning'
}

export interface NotificationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** The severity of the notification. */
  severity?: Severity;
  /** The message to display in the notification. */
  message?: string;
  /** The callback fired when a notification is closed. */
  onClose: () => void;
  /** Whether or not the notification should get closed automatically. */
  autoClose?: boolean;
  /** The auto close delay in milliseconds, it defaults to `6000` (6s). */
  autoCloseDelay?: number;
  /** CSS classname to apply custom styles. */
  className?: string;
}

const iconMapping = {
  success: <CheckRound />,
  warning: <Clock />,
  error: <Caution />,
  info: <Information />
};

export const Notification: React.FC<NotificationProps> = props => {
  const {
    tag,
    message,
    onClose,
    autoClose = false,
    autoCloseDelay = DEFAULT_DELAY,
    severity = Severity.ERROR,
    className
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
      as={tag}
      {...props}
      className={className || ''}
      data-testid="notification"
    >
      <div className="ch-severity-icon" data-testid="severity-icon">
        {iconMapping[severity]}
      </div>
      <output className="ch-message" data-testid="message" role={ariaRole}>
        {message}
      </output>
      {onClose && (
        <StyledCloseIconButton
          label="close"
          icon={<Remove />}
          onClick={onClose}
        />
      )}
    </StyledNotification>
  );
};

export default Notification;
