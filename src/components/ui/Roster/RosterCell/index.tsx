// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import RosterName from '../RosterName';
import LateMessage from './LateMessage';
import { BaseProps, FocusableProps } from '../../Base';
import { Microphone, Camera, ScreenShare } from '../../icons';
import { StyledCell } from './Styled';
import { PopOverMenu } from '../PopOverMenu';
import { IconButtonProps } from '../../Button/IconButton';

type MicPosition = 'leading' | 'grouped';

export interface RosterCellProps extends BaseProps, FocusableProps {
  /** The primary name in the roster cell. */
  name: string;
  /** The subtitle for the primary name. */
  subtitle?: string;
  /** The running late message. */
  runningLate?: string;
  /** The position to place microphone icon. */
  micPosition?: MicPosition;
  /** Whether or not the attendee is muted. This is ignored if you pass a custom microphone via the microphone prop. */
  muted?: boolean;
  /** Whether or not the attendee has enabled their local video. */
  videoEnabled?: boolean;
  /** Whether or not the attendee is sharing content. */
  sharingContent?: boolean;
  /** Whether or not the attendee is having poor connection, it defaults to `false`. This is ignored if you pass a custom microphone via the microphone prop. */
  poorConnection?: boolean;
  /** A replacement for the default volume icon, such as the `MicrophoneActivity` component. */
  microphone?: React.ReactNode;
  /** The PopOver menu for more options. */
  menu?: React.ReactNode;
  /** The label for availability, it defaults to an empty string. */
  a11yMenuLabel?: string;
  /** The icon to depict moderator or presentor status . */
  extraIcon?: React.ReactNode;
  /** extra properties to pass through to the menu button */
  buttonProps?: Partial<IconButtonProps>;
}

function getVideoIcon(
  isVideoEnabled: boolean | null | undefined,
  isSharingContent: boolean | null | undefined
) {
  if (isSharingContent) {
    return <ScreenShare />;
  }

  if (typeof isVideoEnabled === 'boolean') {
    return <Camera disabled={!isVideoEnabled} />;
  }

  return null;
}

export const RosterCell: React.FC<RosterCellProps> = (props) => {
  const {
    tag,
    name,
    menu,
    subtitle,
    className,
    runningLate,
    muted,
    videoEnabled,
    sharingContent,
    poorConnection = false,
    microphone,
    a11yMenuLabel = '',
    extraIcon,
    buttonProps,
  } = props;

  const videoIcon = getVideoIcon(videoEnabled, sharingContent);
  const showMic = typeof muted === 'boolean';
  const mic = microphone || (
    <Microphone muted={muted} poorConnection={poorConnection} />
  );

  return (
    <StyledCell
      className={className || ''}
      as={tag}
      {...props}
      data-testid="roster-cell"
    >
      <RosterName name={name} subtitle={subtitle} />
      {runningLate ? (
        <LateMessage>{runningLate}</LateMessage>
      ) : (
        <>
          {showMic && <div className="ch-mic">{mic}</div>}
          {extraIcon}
          {videoIcon}
        </>
      )}
      {menu && (
        <PopOverMenu
          menu={menu}
          a11yMenuLabel={a11yMenuLabel}
          buttonProps={buttonProps}
        />
      )}
    </StyledCell>
  );
};

export default RosterCell;
