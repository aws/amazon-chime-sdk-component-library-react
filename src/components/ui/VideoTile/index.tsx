// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, HTMLAttributes } from 'react';

import { BaseProps } from '../Base';
import { StyledVideoTile } from './Styled';

type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export interface VideoTileProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** The name to show on the video tile */
  nameplate?: string | null;
  /** Specifies which CSS object-fit value to apply to the VideoTile so that it resizes to fit its container  */
  objectFit?: ObjectFit;
}

export const VideoTile = forwardRef(
  (props: VideoTileProps, ref: React.Ref<HTMLVideoElement>) => {
    const { tag, className, nameplate, ...rest } = props;

    return (
      <StyledVideoTile
        as={tag}
        className={className || ''}
        data-testid="video-tile"
        {...rest}
      >
        <video ref={ref} className="ch-video" />
        {nameplate && (
          <header className="ch-nameplate">
            <p className="ch-text">{nameplate}</p>
          </header>
        )}
      </StyledVideoTile>
    );
  }
);

export default VideoTile;
