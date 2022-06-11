// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const Hamburger: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg {...props}>
    <path d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm0 1c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm3.5 8.5c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h7zm-1-2c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-6c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492l.09-.008h6zm1-2c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-7c-.276 0-.5-.224-.5-.5 0-.245.177-.45.41-.492L8.5 9.5h7z" />
  </Svg>
);

Hamburger.displayName = 'Hamburger';

export default Hamburger;
