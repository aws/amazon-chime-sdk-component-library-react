import React, {
  useEffect,
  useLayoutEffect,
  createRef,
  useState
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'throttle-debounce';

import { StyledGrid } from './Styled';
import useElementAspectRatio from '../../hooks/useElementAspectRatio';

export interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ size, children, ...props }) => {
  const gridEl = createRef<HTMLDivElement>();
  const ratio = useElementAspectRatio(gridEl);

  return (
    <StyledGrid
      ref={gridEl}
      {...props}
      size={size}
      ratio={ratio}
      data-testid='video-grid'
    >
      {children}
    </StyledGrid>
  );
};

export default VideoGrid;
