// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import Svg, { SvgProps } from '../Svg';

const SignalStrength: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg {...props}>
    <path d="M17.366 5c.772 0 1.4.629 1.4 1.4v11.2c0 .772-.628 1.4-1.4 1.4h-1.2c-.772 0-1.4-.628-1.4-1.4V6.4c0-.771.628-1.4 1.4-1.4zm-5 4c.772 0 1.4.629 1.4 1.4v7.2c0 .772-.628 1.4-1.4 1.4h-1.2c-.772 0-1.4-.628-1.4-1.4v-7.2c0-.771.628-1.4 1.4-1.4zM7.6 13c.772 0 1.4.629 1.4 1.4v3.2c0 .772-.628 1.4-1.4 1.4H6.4c-.772 0-1.4-.628-1.4-1.4v-3.2c0-.771.628-1.4 1.4-1.4zm9.766-7h-1.2c-.22 0-.4.18-.4.4v11.2c0 .22.18.4.4.4h1.2c.22 0 .4-.18.4-.4V6.4c0-.22-.18-.4-.4-.4zm-5 4h-1.2c-.22 0-.4.18-.4.4v7.2c0 .22.18.4.4.4h1.2c.22 0 .4-.18.4-.4v-7.2c0-.22-.18-.4-.4-.4zM7.6 14H6.4c-.22 0-.4.18-.4.4v3.2c0 .22.18.4.4.4h1.2c.22 0 .4-.18.4-.4v-3.2c0-.22-.18-.4-.4-.4z" />
  </Svg>
);

SignalStrength.displayName = 'SignalStrength';

export default SignalStrength;
