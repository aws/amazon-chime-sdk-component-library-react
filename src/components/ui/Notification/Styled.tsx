// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { Severity } from '../../../providers/NotificationProvider';
import { baseSpacing, baseStyles } from '../Base';
import IconButton from '../Button/IconButton';
import SecondaryButton from '../Button/SecondaryButton';
import { NotificationProps } from '.';

interface StyledNotificationProps extends NotificationProps {
  severity: Severity;
}

export const StyledCloseIconButton = styled(IconButton)``;
export const StyledNotificationButton = styled(SecondaryButton)``;

export const StyledNotification = styled.div<StyledNotificationProps>`
  align-items: center;
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({ theme, severity }) => theme.notification[severity].text};
  background-color: ${({ theme, severity }) => theme.colors[severity].primary};
  padding: 0.75rem;
  box-shadow: ${({ theme }) => theme.notification.shadow};
  border-radius: 0.25rem;
  margin: 0.75rem;
  max-width: 45rem;
  pointer-events: auto;

  .ch-severity-icon {
    width: 1.5rem;
    flex-shrink: 0;
  }

  .ch-message {
    display: flex;
    flex-flow: column wrap;
    font-size: ${(props) => props.theme.fontSizes.text.fontSize};
    line-height: ${(props) => props.theme.fontSizes.text.lineHeight};
    letter-spacing: -0.005625rem;
    margin: 0.5rem 0.75rem;

    &:empty {
      margin: 0;
    }
  }

  ${StyledNotificationButton} {
    margin-right: 1.6rem;
    border-color: ${({ theme, severity }) => theme.notification[severity].text};
  }

  ${StyledCloseIconButton},
  ${StyledNotificationButton} {
    background-color: ${({ theme, severity }) =>
      theme.colors[severity].primary};
    color: ${({ theme, severity }) =>
      theme.notification[severity].closeButton.text}};
  }

  ${StyledCloseIconButton}:hover, ${StyledCloseIconButton}:focus, ${StyledNotificationButton}:hover, ${StyledNotificationButton}:focus {
    background-color: ${({ theme, severity }) =>
      theme.notification[severity].closeButton.hover.bgd};
    color: ${({ theme, severity }) =>
      theme.notification[severity].closeButton.hover.text};
  }

  ${StyledCloseIconButton}:active, ${StyledNotificationButton}:active {
    background-color: ${({ theme, severity }) =>
      theme.notification[severity].closeButton.active.bgd};
    color: ${({ theme, severity }) =>
      theme.notification[severity].closeButton.active.text};
  }

  ${baseSpacing}
  ${baseStyles}
`;
