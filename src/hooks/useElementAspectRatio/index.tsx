// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { RefObject, useEffect, useLayoutEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { debounce } from 'throttle-debounce';

export type AspectRatio =
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

  if (aspectRatio > 1.6) {
    return 'r16by9';
  }
  if (aspectRatio > 1.4) {
    return 'r3by2';
  }
  if (aspectRatio > 1.25) {
    return 'r4by3';
  }
  if (aspectRatio > 0.9) {
    return 'r1by1';
  }
  if (aspectRatio > 0.7) {
    return 'r2by3';
  }
  if (aspectRatio > 0.4) {
    return 'r1by2';
  }

  return 'slim';
}

export interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  size: number;
}

export const useElementAspectRatio = (
  ref: RefObject<HTMLElement>
): AspectRatio | null => {
  const [ratio, setRatio] = useState<AspectRatio | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const { height, width } = ref.current.getBoundingClientRect();
    setRatio(getAspectRatio(height, width));
  }, []);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const handleResize = debounce(50, (entries: any) => {
      const { height, width } = entries[0].contentRect;
      setRatio(getAspectRatio(height, width));
    });

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return ratio;
};

export default useElementAspectRatio;
