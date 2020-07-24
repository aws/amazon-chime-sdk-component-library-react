// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledVideoTile } from './Styled';
import { BaseProps } from '../Base';

type ObjectFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export interface VideoTileProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>,
    BaseProps {
  /** The name to show on the video tile */
  nameplate?: string | null;
  /** Used to specify how an VideoTile should be resized to fit its container.  */
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
        <video ref={ref} className="video" />
        {nameplate && (
          <header className="nameplate">
            <p className="text">{nameplate}</p>
          </header>
        )}
      </StyledVideoTile>
    );
  }
);

export default VideoTile;
