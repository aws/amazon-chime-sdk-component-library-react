// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

export interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  title?: string;
}

const Svg: React.FC<SvgProps> = ({
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
