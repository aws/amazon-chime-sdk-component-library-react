// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useContentShareControls } from '../../../providers/ContentShareProvider';
import { ControlBarButton } from '../../ui/ControlBar/ControlBarButton';
import { ScreenShare } from '../../ui/icons';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  /** The label that will be shown for content share control, it defaults to `Content`. */
  label?: string;
  /** The label that will be shown for pausing content share button in content share control, it defaults to `Pause`. */
  pauseLabel?: string;
  /** The label that will be shown for unpausing content share button in content share control, it defaults to `Unpause`. */
  unpauseLabel?: string;
  /** Title attribute for the icon, it defaults to `Screen share`. */
  iconTitle?: string;
}

const ContentShareControl: React.FC<Props> = ({
  label = 'Content',
  pauseLabel = 'Pause',
  unpauseLabel = 'Unpause',
  iconTitle,
  ...rest
}) => {
  const { isLocalUserSharing } = useContentShareState();
  const { paused, toggleContentShare, togglePauseContentShare } =
    useContentShareControls();

  const dropdownOptions: PopOverItemProps[] = [
    {
      children: <span>{paused ? unpauseLabel : pauseLabel}</span>,
      onClick: togglePauseContentShare,
    },
  ];

  return (
    <>
      <ControlBarButton
        icon={<ScreenShare title={iconTitle} />}
        onClick={toggleContentShare}
        label={label}
        popOver={isLocalUserSharing ? dropdownOptions : null}
        {...rest}
      />
    </>
  );
};

export default ContentShareControl;
