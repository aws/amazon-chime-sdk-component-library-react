// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useRef } from 'react';

import { useAudioVideo } from '../../../providers/AudioVideoProvider';
import { useContentShareState } from '../../../providers/ContentShareProvider';
import { ContentTile } from '../../ui/ContentTile';
import { BaseSdkProps } from '../Base';

interface Props extends BaseSdkProps {
  nameplate?: string;
  tileId?: number;
}

export const ContentShare: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  tileId,
  ...rest
}) => {
  const audioVideo = useAudioVideo();
  const contentShareState = useContentShareState();

  // Use the provided tileId or fall back to the default (for backward compatibility)
  const tileIdToRender =
    tileId !== undefined ? tileId : contentShareState.tileId;

  const attendeeId = tileIdToRender
    ? contentShareState.tileIdToAttendeeId[tileIdToRender.toString()]
    : null;

  const videoEl = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!audioVideo || !videoEl.current || !tileIdToRender) {
      return;
    }

    audioVideo.bindVideoElement(tileIdToRender, videoEl.current);

    return () => {
      const tile = audioVideo.getVideoTile(tileIdToRender);
      if (tile) {
        audioVideo.unbindVideoElement(tileIdToRender);
      }
    };
  }, [audioVideo, tileIdToRender]);

  return tileIdToRender ? (
    <ContentTile
      objectFit="contain"
      className={`ch-content-share--${tileIdToRender} ${className || ''}`}
      {...rest}
      ref={videoEl}
      data-content-share-attendee={attendeeId}
    />
  ) : null;
};

export default ContentShare;
