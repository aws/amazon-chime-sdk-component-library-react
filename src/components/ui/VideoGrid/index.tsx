// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { createRef, useContext, createContext } from 'react';

import { StyledGrid } from './Styled';
import useElementAspectRatio from '../../../hooks/useElementAspectRatio';

type Layout = 'standard' | 'featured' | null;

export interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number of tiles to lay out */
  size?: number;
  /** The layout of the grid */
  layout?: Layout;
}

interface GridContext {
  usingGrid: boolean;
}

const gridData = { usingGrid: true };
const GridContext = createContext<GridContext | null>(null);

export const VideoGrid: React.FC<VideoGridProps> = ({
  size,
  children,
  ...props
}) => {
  const layout = props.layout || 'standard';
  const gridEl = createRef<HTMLDivElement>();
  const ratio = useElementAspectRatio(gridEl);
  const gridSize = size || React.Children.count(children);

  return (
    <GridContext.Provider value={gridData}>
      <StyledGrid
        ref={gridEl}
        {...props}
        size={gridSize}
        ratio={ratio}
        featured={layout === 'featured'}
        data-testid="video-grid"
      >
        {children}
      </StyledGrid>
    </GridContext.Provider>
  );
};

export const useGridData = () => {
  const gridData = useContext(GridContext);

  return gridData;
};

export default VideoGrid;
