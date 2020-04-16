import React, {
  useEffect,
  useLayoutEffect,
  createRef,
  useState,
  Children,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'throttle-debounce';

import { StyledGrid } from './Styled';

export type AspectRatio =
  | 'r21by9'
  | 'r16by9'
  | 'r3by2'
  | 'r4by3'
  | 'r1by1'
  | 'r2by3'
  | 'slim';

// Todo - Use a defined range per aspect ratio
function getAspectRatio(height: number, width: number): AspectRatio {
  const aspectRatio = width / height;

  if (aspectRatio > 21 / 9) {
    return 'r21by9';
  } else if (aspectRatio > 16 / 9) {
    return 'r16by9';
  } else if (aspectRatio > 3 / 2) {
    return 'r3by2';
  } else if (aspectRatio > 4 / 3) {
    return 'r4by3';
  } else if (aspectRatio > 1) {
    return 'r1by1';
  } else if (aspectRatio > 2 / 3) {
    return 'r2by3';
  } else {
    return 'slim';
  }
}

export interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {}

const VideoGrid: React.FC<VideoGridProps> = ({ children, ...props }) => {
  const gridEl = createRef<HTMLDivElement>();
  const [ratio, setRatio] = useState<AspectRatio>();

  useLayoutEffect(() => {
    if (!gridEl.current) {
      return;
    }

    const { height, width } = gridEl.current.getBoundingClientRect();
    setRatio(getAspectRatio(height, width));
  }, []);

  useEffect(() => {
    if (!gridEl.current) {
      return;
    }

    const handleResize = debounce(100, (entries: ResizeObserverEntry[]) => {
      const { height, width } = entries[0].contentRect;
      setRatio(getAspectRatio(height, width));
    });

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(gridEl.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <StyledGrid
      ref={gridEl}
      {...props}
      size={Children.count(children)}
      ratio={ratio}
    >
      {children}
    </StyledGrid>
  );
};

export default VideoGrid;
