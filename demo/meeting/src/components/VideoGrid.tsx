// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, {
  useEffect,
  useLayoutEffect,
  createRef,
  useState,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'throttle-debounce';
import styled from 'styled-components';

// TODO: take from component library VideoGrid, need to replace later
interface StyledNotificationProps extends VideoGridProps {
  ratio?: AspectRatio | null;
  size: number;
}

const sizeRatioMap: any = {
  '1'       : 'grid-template: 1fr / 1fr;',
  '1.slim'  : 'grid-template: repeat(3,1fr) / 1fr;',
  '1.r1by2' : 'grid-template: repeat(3,1fr) / 1fr;',
  '1.r21by9': 'grid-template: 1fr / 3fr 1fr;',
  '1.r29by9': 'grid-template: 1fr / 2fr 1fr;',
  '1.r36by9': 'grid-template: 1fr / 1fr 1fr;',

  '2'       : 'grid-template: 1fr / repeat(2,1fr);',
  '2.slim'  : 'grid-template: repeat(3,1fr) / 1fr;',
  '2.r1by2' : 'grid-template: repeat(3,1fr) / 1fr;',
  '2.r2by3' : 'grid-template: repeat(2,1fr) / 1fr;',
  '2.r1by1' : 'grid-template: repeat(2,1fr) / 1fr;',
  '2.r4by3' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '2.r3by2' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '2.r16by9': 'grid-template: 4fr 3fr / repeat(2,1fr);',
  '2.r21by9': 'grid-template: 5fr 1fr / repeat(2,1fr)',
  '2.r29by9': 'grid-template: 1fr / repeat(2,1fr)',
  '2.r36by9': 'grid-template: 1fr / repeat(2,2fr) 1fr;',

  '3'       : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '3.slim'  : 'grid-template: repeat(3,1fr) / 1fr;',
  '3.r1by2' : 'grid-template: repeat(3,1fr) / 1fr;',
  '3.r2by3' : 'grid-template: repeat(3,1fr) / 1fr;',
  '3.r4by3' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '3.r21by9': 'grid-template: 2fr 1fr / repeat(3,1fr);',
  '3.r29by9': 'grid-template: 4fr 1fr / repeat(3,1fr);',
  '3.r36by9': 'grid-template: 4fr 1fr / repeat(3,1fr);',

  '4'       : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '4.slim'  : 'grid-template: repeat(4,1fr) / 1fr;',
  '4.r1by2' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '4.r2by3' : 'grid-template: repeat(2,3fr) 2fr / repeat(2,1fr);',
  '4.r1by1' : 'grid-template: repeat(2,2fr) 1fr / repeat(2,1fr);',
  '4.r4by3' : 'grid-template: repeat(2,4fr) 1fr / repeat(2,1fr);',
  '4.r21by9': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '4.r29by9': 'grid-template: 2fr 2fr / repeat(3,1fr);',
  '4.r36by9': 'grid-template: 2fr 1fr / repeat(4,1fr);',

  '5'       : 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '5.slim'  : 'grid-template: repeat(5,1fr) / 1fr;',
  '5.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '5.r2by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r1by1' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r4by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r3by2' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r16by9': 'grid-template: repeat(2,6fr) 1fr / repeat(3,1fr);',
  '5.r21by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '5.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '5.r36by9': 'grid-template: 2fr 1fr / repeat(5,1fr);',

  '6'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '6.slim'  : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r1by1' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r4by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r21by9': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '6.r16by9': 'grid-template: repeat(2,7fr) 1fr / repeat(3,1fr);',
  '6.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '6.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '7'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.slim'  : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.r16by9': 'grid-template: repeat(2,4fr) 1fr/ repeat(4,1fr);',
  '7.r21by9': 'grid-template: repeat(2,3fr) / repeat(4,1fr);',
  '7.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '7.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '8'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.slim'  : 'grid-template: repeat(5,10fr) 1fr / repeat(2,1fr);',
  '8.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '8.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '8.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.r16by9': 'grid-template: repeat(2,3fr) 1fr / repeat(4,1fr);',
  '8.r21by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '8.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '8.r36by9': 'grid-template: repeat(2,4fr) / repeat(5,1fr);',

  '9'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.slim'  : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '9.r1by2' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '9.r2by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '9.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.r16by9': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '9.r21by9': 'grid-template: repeat(2,6fr) 1fr / repeat(5,1fr);',
  '9.r29by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',
  '9.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '10'       : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.slim'  : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r1by2' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r2by3' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r1by1' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.r4by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.r3by2' : 'grid-template: repeat(3,6fr) 1fr / repeat(4,1fr);',
  '10.r16by9': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '10.r21by9': 'grid-template: repeat(2,6fr) 1fr / repeat(5,1fr);',
  '10.r29by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',
  '10.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '11'       : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.slim'  : 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '11.r1by2' : 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '11.r2by3' : 'grid-template: repeat(4,5fr) 1fr / repeat(3,1fr);',
  '11.r1by1' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.r4by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.r3by2' : 'grid-template: repeat(3,5fr) 1fr / repeat(4,1fr);',
  '11.r16by9': 'grid-template: repeat(3,7fr) / repeat(4,1fr);',
  '11.r21by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '11.r29by9': 'grid-template: repeat(2,10fr) 1fr / repeat(6,1fr);',
  '11.r36by9': 'grid-template: repeat(2,1fr) / repeat(6,1fr);',

  '12'       : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '12.slim'  : 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '12.r1by2' : 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '12.r2by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '12.r1by1' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '12.r4by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '12.r3by2' : 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '12.r16by9': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '12.r21by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '12.r29by9': 'grid-template: repeat(2,4fr) 2fr / repeat(6,1fr);',
  '12.r36by9': 'grid-template: repeat(2,4fr) / repeat(6,1fr);',

  '13'       : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '13.slim'  : 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
  '13.r1by2' : 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
  '13.r2by3' : 'grid-template: repeat(5,6fr) / repeat(3,6fr);',
  '13.r1by1' : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '13.r4by3' : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '13.r21by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '13.r29by9': 'grid-template: repeat(3,1fr) / repeat(6,1fr);',
  '13.r36by9': 'grid-template: repeat(2,1fr) / repeat(7,1fr);',

  '14'       : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '14.slim'  : 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
  '14.r1by2' : 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
  '14.r2by3' : 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '14.r1by1' : 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '14.r4by3' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '14.r16by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '14.r21by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '14.r29by9': 'grid-template: repeat(3,1fr) / repeat(6,1fr);',
  '14.r36by9': 'grid-template: repeat(2,1fr) / repeat(7,1fr);',

  '15'       : 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '15.slim'  : 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
  '15.r1by2' : 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '15.r2by3' : 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '15.r1by1' : 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '15.r3by2' : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '15.r4by3' : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '15.r16by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '15.r21by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '15.r29by9': 'grid-template: repeat(3,1fr) / repeat(6,1fr);',
  '15.r36by9': 'grid-template: repeat(2,1fr) / repeat(8,1fr);',

  '16'       : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '16.slim'  : 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
  '16.r1by2' : 'grid-template: repeat(6,1fr) / repeat(3,1fr);',
  '16.r2by3' : 'grid-template: repeat(6,1fr) / repeat(3,1fr);',
  '16.r1by1' : 'grid-template: repeat(4,5fr) 1fr / repeat(4,1fr);',
  '16.r4by3' : 'grid-template: repeat(4,2fr) 1fr / repeat(4,1fr);',
  '16.r16by9': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',
  '16.r21by9': 'grid-template: repeat(3,1fr) / repeat(6,1fr);',
  '16.r29by9': 'grid-template: repeat(3,1fr) / repeat(7,1fr);',
  '16.r36by9': 'grid-template: repeat(3,1fr) / repeat(7,1fr);',
};

export const StyledGrid = styled.div<StyledNotificationProps>`
  display: grid;
  height: 100%;
  width: 100%;

  ${({ size, ratio }) => `
    ${sizeRatioMap[size]}
    ${(ratio && sizeRatioMap[`${size}.${ratio}`]) || ''}
  `}
`;

export type AspectRatio =
  | 'r36by9'
  | 'r29by9'
  | 'r21by9'
  | 'r16by9'
  | 'r3by2'
  | 'r4by3'
  | 'r1by1'
  | 'r2by3'
  | 'r1by2'
  | 'slim';

// Todo - Use a defined range per aspect ratio, instead of the specific ratio value
function getAspectRatio(height: number, width: number): AspectRatio {
  const aspectRatio = width / height;

  if (aspectRatio > 36 / 9) {
    return 'r36by9';
  }
  if (aspectRatio > 29 / 9) {
    return 'r29by9';
  }
  if (aspectRatio > 21 / 9) {
    return 'r21by9';
  }
  if (aspectRatio > 16 / 9) {
    return 'r16by9';
  }
  if (aspectRatio > 3 / 2) {
    return 'r3by2';
  }
  if (aspectRatio > 4 / 3) {
    return 'r4by3';
  }
  if (aspectRatio > 1) {
    return 'r1by1';
  }
  if (aspectRatio > 2 / 3) {
    return 'r2by3';
  }
  if (aspectRatio > 1 / 2) {
    return 'r1by2';
  }
  return 'slim';
}

interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

const VideoGrid: React.FC<VideoGridProps> = ({ children, size, ...props}) => {
  const gridEl = createRef<HTMLDivElement>();
  const [ratio, setRatio] = useState<AspectRatio | null>(null);

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

    const handleResize = debounce(50, (entries: any) => {
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
      size={size}
      ratio={ratio}
    >
      {children}
    </StyledGrid>
  );
};

export default VideoGrid;
