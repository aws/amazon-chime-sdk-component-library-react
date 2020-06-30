import React from 'react';

import RosterName from '../RosterName';
import LateMessage from './LateMessage';
import Popover from '../../PopOver';
import IconButton from '../../Button/IconButton';
import { BaseProps } from '../../Base';
import { Microphone, Camera, ScreenShare, Dots } from '../../icons';
import { StyledCell } from './Styled';

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
    return <ScreenShare />;
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
              disabled={muted}
              className="mic"
              poorConnection={poorConnection}
            />
          )}
          {videoIcon}
          {menu && (
            <Popover
              className="menu"
              a11yLabel={a11yMenuLabel}
              renderButton={() => (
                <IconButton
                  className="menu"
                  icon={<Dots />}
                  label={a11yMenuLabel}
                />
              )}
            >
              {menu}
            </Popover>
          )}
        </>
      )}
    </StyledCell>
  );
};

export default RosterCell;
