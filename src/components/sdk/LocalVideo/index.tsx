// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { VideoTileState } from 'amazon-chime-sdk-js';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useLocalVideo } from '../../../providers/LocalVideoProvider';
import VideoTile from '../../ui/VideoTile';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  id?: string;
  nameplate?: string;
}

const StyledLocalVideo = styled(VideoTile)`
  background: unset;
`;

export const LocalVideo: React.FC<Props> = ({
  className,
  nameplate,
  ...rest
}) => {
  const { tileId, isVideoEnabled } = useLocalVideo();
  const audioVideo = useAudioVideo();
  const videoEl = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(() =>
    audioVideo?.hasStartedLocalVideoTile()
  );

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

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    const observer = {
      videoTileDidUpdate: (tileState: VideoTileState) => {
        if (
          !tileState.boundAttendeeId ||
          !tileState.localTile ||
          !tileState.tileId ||
          !videoEl.current
        ) {
          return;
        }

        if (tileState.active !== active) {
          setActive(tileState.active);
        }
      }
    };

    audioVideo.addObserver(observer);

    return () => audioVideo.removeObserver(observer);
  }, [audioVideo, active]);

  return (
    <StyledLocalVideo
      nameplate={active ? nameplate : null}
      className={className || ''}
      ref={videoEl}
      {...rest}
    />
  );
};

export default LocalVideo;
