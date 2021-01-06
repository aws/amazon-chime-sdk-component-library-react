// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Caution: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M12 6c.68 0 1.294.338 1.643.905l5.085 8.281c.35.571.365 1.258.039 1.841-.335.6-.98.972-1.682.972H6.915c-.701 0-1.345-.372-1.68-.972-.326-.583-.312-1.27.039-1.841l5.085-8.281C10.707 6.338 11.32 6 12 6zm.79 1.429c-.33-.538-1.25-.536-1.58 0L6.125 15.71c-.16.261-.167.563-.017.829.16.288.463.46.807.46h10.17c.346 0 .648-.172.809-.46.149-.266.143-.568-.018-.829zm-.218 7.18v1.219h-1.166v-1.219h1.166zm.023-5.388v1.83l-.288 2.727h-.597l-.305-2.727V9.22h1.19z" />
  </Svg>
);

Caution.displayName = 'Caution';

export default Caution;
