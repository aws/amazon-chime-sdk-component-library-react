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
  name: string;
  subtitle?: string;
  runningLate?: string;
  micPosition?: MicPosition;
  muted?: boolean;
  videoEnabled?: boolean;
  sharingContent?: boolean;
  poorConnection?: boolean;
  menu?: React.ReactNode;
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
    a11yMenuLabel = ''
  } = props;

  const videoIcon = getVideoIcon(videoEnabled, sharingContent);

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
          {typeof muted === 'boolean' && (
            <Microphone
              muted={muted}
              className="mic"
              poorConnection={poorConnection}
            />
          )}
          {videoIcon}
          {menu && <PopOverMenu menu={menu} a11yMenuLabel={a11yMenuLabel} />}
        </>
      )}
    </StyledCell>
  );
};

export default RosterCell;
