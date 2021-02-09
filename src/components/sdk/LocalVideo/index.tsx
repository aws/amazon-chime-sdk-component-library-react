// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import VideoTile from '../../ui/VideoTile';
import { BaseSdkProps } from '../Base';
import { useApplyVideoObjectFit } from '../../../hooks/useApplyVideoObjectFit';

interface Props extends BaseSdkProps {
  id?: string;
  nameplate?: string;
}

const StyledLocalVideo = styled<any>(VideoTile)`
  ${(props) => (!props.active ? 'display: none' : '')};
`;

export const LocalVideo: React.FC<Props> = ({ nameplate, ...rest }) => {
  const { tileId, isVideoEnabled } = useLocalVideo();
  const audioVideo = useAudioVideo();
  const videoEl = useRef<HTMLVideoElement>(null);
  useApplyVideoObjectFit(videoEl);

  useEffect(() => {
    if (!audioVideo || !tileId || !videoEl.current || !isVideoEnabled) {
      return;
    }

    audioVideo.bindVideoElement(tileId, videoEl.current);

    return () => {
      const tile = audioVideo.getVideoTile(tileId);
      if (tile) {
        audioVideo.unbindVideoElement(tileId);
      }
    };
  }, [audioVideo, tileId, isVideoEnabled]);

  return (
    <StyledLocalVideo
      active={isVideoEnabled}
      nameplate={nameplate}
      ref={videoEl}
      {...rest}
    />
  );
};

export default LocalVideo;
