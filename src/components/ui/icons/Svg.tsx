// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

export interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {
  /** CSS classname to apply custom styles. */
  className?: string;
  /** Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height. */
  viewBox?: string;
  /** The horizontal length of a SVG component. */
  width?: string;
  /** The vertical length of a SVG component. */
  height?: string;
  /** The title of a SVG component. */
  title?: string;
  /** Optional styling via styled component string. */
  css?: string;
}

const Svg: React.FC<React.PropsWithChildren<SvgProps>> = ({
  className,
  children,
  viewBox = '0 0 24 24',
  xmlns = 'http://www.w3.org/2000/svg',
  width,
  height,
  title,
  ...otherProps
}) => {
  // This is necessary because some versions of Firefox would not use rems as values
  // for width and height attributes: https://bugzilla.mozilla.org/show_bug.cgi?id=1231147
  const styles = {
    width: width,
    height: height,
  };

  return (
    <svg
      xmlns={xmlns}
      className={`Svg ${className || ''}`}
      height={height}
      style={styles}
      viewBox={viewBox}
      width={width}
      {...otherProps}
    >
      {title && <title>{title}</title>}
      <g fillRule="evenodd" fill="currentColor">
        {children}
      </g>
    </svg>
  );
};

export default Svg;
