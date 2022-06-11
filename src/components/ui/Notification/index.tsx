// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { HTMLAttributes, ReactNode, useEffect } from 'react';

import { BaseProps } from '../Base';
import { ButtonProps } from '../Button';
import { Caution, CheckRound, Clock, Information, Remove } from '../icons';
import {
  StyledCloseIconButton,
  StyledNotification,
  StyledNotificationButton,
} from './Styled';

export const DEFAULT_DELAY: number = 6000;

enum Severity {
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
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
  /** For rendering a button element adjacent to the message */
  buttonProps?: ButtonProps;
  /** optional icon to override the default */
  icon?: ReactNode;
  /** optional content to render in the body of the notification */
  children?: ReactNode | ReactNode[];
}

const iconMapping = {
  success: <CheckRound />,
  warning: <Clock />,
  error: <Caution />,
  info: <Information />,
};

export const Notification: React.FC<React.PropsWithChildren<NotificationProps>> = (props) => {
  const {
    tag,
    message,
    onClose,
    autoClose = false,
    autoCloseDelay = DEFAULT_DELAY,
    severity = Severity.ERROR,
    className,
    buttonProps,
    icon,
    children,
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
        {icon ? icon : iconMapping[severity]}
      </div>
      <output className="ch-message" data-testid="message" role={ariaRole}>
        {message}
      </output>
      {buttonProps && <StyledNotificationButton aria-hidden {...buttonProps} />}
      {children}
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
