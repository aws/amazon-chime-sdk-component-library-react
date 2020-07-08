// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createRef } from 'react';

import { StyledGrid } from './Styled';
import useElementAspectRatio from '../../../hooks/useElementAspectRatio';

export interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

export const VideoGrid: React.FC<VideoGridProps> = ({
  size,
  children,
  ...props
}) => {
  const gridEl = createRef<HTMLDivElement>();
  const ratio = useElementAspectRatio(gridEl);

  return (
    <StyledGrid
      ref={gridEl}
      {...props}
      size={size}
      ratio={ratio}
      data-testid="video-grid"
    >
      {children}
    </StyledGrid>
  );
};

export default VideoGrid;
