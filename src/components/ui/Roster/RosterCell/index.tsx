// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import RosterName from '../RosterName';
import LateMessage from './LateMessage';
import { BaseProps } from '../../Base';
import { Microphone, Camera, ContentShare } from '../../icons';
import { StyledCell } from './Styled';
import { PopOverMenu } from '../PopOverMenu';

type MicPosition = 'leading' | 'grouped';

export interface RosterCellProps extends BaseProps {
  /** Primary name in roster cell */
  name: string;
  /** Subtitle for the primary name */
  subtitle?: string;
  /** Late message */
  runningLate?: string;
  /** Mic's position defined by type MicPosition either 'leading' or 'grouped' */
  micPosition?: MicPosition;
  /** Whether or not the user is muted. This is ignored if you pass a custom microphone via the microphone prop */
  muted?: boolean;
  /** Whether or not the user has enabled the local video */
  videoEnabled?: boolean;
  /** Whether or not the user is sharing content */
  sharingContent?: boolean;
  /** Whether or not the user is having poor connection. This is ignored if you pass a custom microphone via the microphone prop */
  poorConnection?: boolean;
  /** A replacement for the default volume icon, such as the MicrophoneActivity component */
  microphone?: React.ReactNode;
  /** PopOver menu for more options */
  menu?: React.ReactNode;
  /** Label for PopOverMenu, by default it is an empty string */
  a11yMenuLabel?: string;
}

function getVideoIcon(
  isVideoEnabled: boolean | null | undefined,
  isSharingContent: boolean | null | undefined
) {
  if (isSharingContent) {
    return <ContentShare />;
  }

  if (typeof isVideoEnabled === 'boolean') {
    return <Camera disabled={!isVideoEnabled} />;
  }

  return null;
}

export const RosterCell: React.FC<RosterCellProps> = props => {
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
    a11yMenuLabel = ''
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
          {videoIcon}
          {menu && <PopOverMenu menu={menu} a11yMenuLabel={a11yMenuLabel} />}
        </>
      )}
    </StyledCell>
  );
};

export default RosterCell;
