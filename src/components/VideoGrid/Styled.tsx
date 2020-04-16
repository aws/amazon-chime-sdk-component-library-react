import styled from 'styled-components';

import { VideoGridProps, AspectRatio } from './';

interface StyledNotificationProps extends VideoGridProps {
  ratio?: AspectRatio;
  size: number;
}

const sizeRatioMap = {
  '1'       : 'grid-template: 1fr / 1fr',
  '1.slim'  : 'grid-template: repeat(2,1fr) / 1fr',
  '1.r21by9': 'grid-template: 1fr / 3fr 1fr;',

  '2'       : 'grid-template: 1fr / repeat(2,1fr);',
  '2.slim'  : 'grid-template: repeat(3,1fr) / 1fr',
  '2.r2by3' : 'grid-template: repeat(2,1fr) / 1fr',
  '2.r1by1' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '2.r4by3' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '2.r3by2' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '2.r16by9': 'grid-template: 1fr 1fr / repeat(2,1fr);',

  '3'       : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '3.slim'  : 'grid-template: repeat(3,1fr) / 1fr',
  '3.r2by3' : 'grid-template: repeat(3,1fr) / 1fr',
  '3.r4by3' : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '3.r21by9': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',

  '4'       : 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '4.slim'  : 'grid-template: repeat(4,1fr) / 1fr',
  '4.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '4.r4by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '4.r21by9': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',

  '5'       : 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '5.slim'  : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '5.r2by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r1by1' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r4by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r16by9': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '5.r21by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',

  '6'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '6.slim'  : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r1by1' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r4by3' : 'grid-template: repeat(3,1fr) / repeat(2,1fr);',

  '7'       : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.slim'  : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '7.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',

  '8'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.slim'  : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '8.r2by3' : 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '8.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',

  '9'       : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.slim'  : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '9.r2by3' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '9.r1by1' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.r4by3' : 'grid-template: repeat(3,1fr) / repeat(3,1fr);',

  '10'      : 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.slim' : 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r2by3': 'grid-template: repeat(5,1fr) / repeat(2,1fr);',
  '10.r1by1': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.r4by3': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
};

export const StyledGrid = styled.div<StyledNotificationProps>`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;

  ${({ size, ratio }) => `
    ${sizeRatioMap[size]}
    ${(ratio && sizeRatioMap[`${size}.${ratio}`]) || ''}
  `}
`;
