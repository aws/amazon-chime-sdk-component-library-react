// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import { ContentShare } from '../../ui/icons';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useContentShareControls } from '../../../providers/ContentShareProvider';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';

const ContentShareControl: React.FC = () => {
  const { isLocalUserSharing } = useContentShareState();
  const {
    isContentSharePaused,
    toggleContentShare,
    togglePauseContentShare
  } = useContentShareControls();

  const dropdownOptions: PopOverItemProps[] = [
    {
      children: <span>{isContentSharePaused ? 'Play' : 'Pause'}</span>,
      onClick: togglePauseContentShare
    }
  ];

  return (
    <>
      <ControlBarButton
        icon={<ContentShare />}
        onClick={toggleContentShare}
        label="Content"
        popOver={isLocalUserSharing ? dropdownOptions : null}
      />
    </>
  );
};

export default ContentShareControl;
