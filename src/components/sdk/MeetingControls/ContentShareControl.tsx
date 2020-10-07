// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef } from 'react';

import { ControlBarButton } from '../../ui/ControlBar/ControlBarItem';
import { ScreenShare } from '../../ui/icons';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { useContentShareControls } from '../../../providers/ContentShareProvider';
import { PopOverItemProps } from '../../ui/PopOver/PopOverItem';
import FileInput from '../../ui/Input/FileInput';

interface Props {
  /** The label that will be shown for content share control, it defaults to `Content`. */
  label?: string;
  /** The label that will be shown for pausing content share button in content share control, it defaults to `Pause`. */
  pauseLabel?: string;
  /** The label that will be shown for unpausing content share button in content share control, it defaults to `Unpause`. */
  unpauseLabel?: string;
}

const ContentShareControl: React.FC<Props> = ({
  label = 'Content',
  pauseLabel = 'Pause',
  unpauseLabel = 'Unpause',
}) => {
  const { isLocalUserSharing, mediaUrl } = useContentShareState();
  const {
    paused,
    toggleContentShare,
    toggleVideoFileShare,
    togglePauseContentShare,
  } = useContentShareControls();
  const inputElRef = useRef<HTMLInputElement>(null);

  const dropdownOptionsShare: PopOverItemProps[] = [
    {
      children: <span>{paused ? unpauseLabel : pauseLabel}</span>,
      onClick: togglePauseContentShare,
    },
  ];

  const fileUploadOnChangeHandler = () => {
    const file = inputElRef.current?.files && inputElRef.current?.files[0];
    if (file) {
      // @ts-ignore
      const url: string = URL.createObjectURL(file);
      toggleVideoFileShare(url);
    }
  };

  const dropdownOptionsNoShare: PopOverItemProps[] = [
    {
      children: <span>Share your screen</span>,
      onClick: toggleContentShare,
    },
    {
      children: (
        <FileInput
          ref={inputElRef}
          value=""
          id="video-file-input"
          onChange={fileUploadOnChangeHandler}
          optionText="Share a video file"
        />
      ),
    },
  ];

  return (
    <>
      <ControlBarButton
        icon={<ScreenShare />}
        onClick={mediaUrl ? toggleVideoFileShare : toggleContentShare}
        label={label}
        popOver={
          isLocalUserSharing ? dropdownOptionsShare : dropdownOptionsNoShare
        }
      />
    </>
  );
};

export default ContentShareControl;
