// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { VideoGridProps } from './';
import { AspectRatio } from '../../hooks/useElementAspectRatio';

interface StyledGridProps extends VideoGridProps {
  ratio?: AspectRatio | null;
  size: number;
}

const sizeRatioMap = {
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
  '2.r21by9': 'grid-template: 1fr / repeat(2,1fr)',
  '2.r29by9': 'grid-template: 1fr / repeat(2,1fr)',
  '2.r36by9': 'grid-template: 1fr / repeat(2,2fr) 1fr;',

  '3'       : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '3.slim'  : 'grid-template: repeat(3,1fr) / 1fr;',
  '3.r1by2' : 'grid-template: repeat(3,1fr) / 1fr;',
  '3.r2by3' : 'grid-template: repeat(3,1fr) / 1fr;',
  '3.r4by3' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '3.r21by9': 'grid-template: 2fr 1fr / repeat(3,1fr);',
  '3.r29by9': 'grid-template: 1fr / repeat(3,1fr);',
  '3.r36by9': 'grid-template: 1fr / repeat(3,1fr);',

  '4'       : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '4.slim'  : 'grid-template: repeat(4,1fr) / 1fr;',
  '4.r1by2' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '4.r2by3' : 'grid-template: repeat(2,3fr) 2fr / repeat(2,1fr);',
  '4.r1by1' : 'grid-template: repeat(2,2fr) 1fr / repeat(2,1fr);',
  '4.r4by3' : 'grid-template: repeat(2,4fr) 1fr / repeat(2,1fr);',
  '4.r21by9': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '4.r29by9': 'grid-template: 1fr / repeat(4,1fr);',
  '4.r36by9': 'grid-template: 1fr / repeat(4,1fr);',

  '5'       : 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '5.slim'  : 'grid-template: repeat(5,1fr) / 1fr;',
  '5.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '5.r2by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r1by1' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r4by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r3by2' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r16by9': 'grid-template: repeat(2,6fr) / repeat(3,1fr);',
  '5.r21by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '5.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '5.r36by9': 'grid-template: 1fr / repeat(5,1fr);',

  '6'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '6.slim'  : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r1by1' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r4by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r21by9': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '6.r16by9': 'grid-template: repeat(2,7fr) / repeat(3,1fr);',
  '6.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '6.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '7'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.slim'  : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.r16by9': 'grid-template: repeat(2,4fr) / repeat(4,1fr);',
  '7.r21by9': 'grid-template: repeat(2,3fr) / repeat(4,1fr);',
  '7.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '7.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '8'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.slim'  : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '8.r1by2' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '8.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '8.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.r16by9' : 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '8.r21by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '8.r29by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',
  '8.r36by9': 'grid-template: repeat(2,4fr) / repeat(5,1fr);',

  '9'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.slim'  : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '9.r1by2' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '9.r2by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '9.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.r16by9' : 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '9.r21by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',
  '9.r29by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',
  '9.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '10'       : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.slim'  : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r1by2' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r2by3' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r1by1' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.r4by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.r3by2' : 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '10.r16by9': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '10.r21by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',
  '10.r29by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',
  '10.r36by9': 'grid-template: repeat(2,1fr) / repeat(5,1fr);',

  '11'       : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.slim'  : 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '11.r1by2' : 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '11.r2by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.r1by1' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.r4by3' : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.r3by2' : 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '11.r16by9': 'grid-template: repeat(3,7fr) / repeat(4,1fr);',
  '11.r21by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '11.r29by9': 'grid-template: repeat(2,1fr) / repeat(6,1fr);',
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
  '15.r16by9' : 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '15.r21by9': 'grid-template: repeat(3,1fr) / repeat(5,1fr);',
  '15.r29by9': 'grid-template: repeat(3,1fr) / repeat(6,1fr);',
  '15.r36by9': 'grid-template: repeat(2,1fr) / repeat(8,1fr);',

  '16'       : 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '16.slim'  : 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
  '16.r1by2' : 'grid-template: repeat(6,1fr) / repeat(3,1fr);',
  '16.r2by3' : 'grid-template: repeat(6,1fr) / repeat(3,1fr);',
  '16.r1by1' : 'grid-template: repeat(4,5fr) 1fr / repeat(4,1fr);',
  '16.r4by3' : 'grid-template: repeat(4,2fr) 1fr / repeat(4,1fr);',
  '16.r16by9' : 'grid-template: repeat(4,1fr) / repeat(5,1fr);',
  '16.r21by9': 'grid-template: repeat(3,1fr) / repeat(6,1fr);',
  '16.r29by9': 'grid-template: repeat(3,1fr) / repeat(7,1fr);',
  '16.r36by9': 'grid-template: repeat(3,1fr) / repeat(7,1fr);',
};

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  height: 100%;
  width: 100%;

  ${({ size, ratio }) => `
    ${sizeRatioMap[size]}
    ${(sizeRatioMap[`${size}.${ratio}`]) || ''}
  `}
`;
