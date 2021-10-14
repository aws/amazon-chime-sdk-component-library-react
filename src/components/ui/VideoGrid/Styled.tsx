// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components';

import { AspectRatio } from '../../../hooks/useElementAspectRatio';
import { VideoGridProps } from './';

interface StyledGridProps extends VideoGridProps {
  ratio?: AspectRatio | null;
  size: number;
  featured: boolean;
}

const sortedRatios: AspectRatio[] = [
  'slim',
  'r1by2',
  'r2by3',
  'r1by1',
  'r4by3',
  'r3by2',
  'r16by9',
];

const ratioStyles = {
  '1': 'grid-template: 1fr / 1fr;',
  '1.slim': 'grid-template: repeat(2, 1fr) / 1fr;',
  '1.r2by3': 'grid-template: 1fr / 1fr;',

  '1.featured': `grid-template: "ft" 1fr / 1fr;`,

  '2': 'grid-template: 1fr / repeat(2,1fr);',
  '2.slim': `grid-template: repeat(3,1fr) / 1fr;`,
  '2.r1by2': 'grid-template: repeat(2,1fr) / 1fr;',
  '2.r2by3': 'grid-template: repeat(2,1fr) / 1fr;',
  '2.r4by3': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '2.r16by9': `grid-template: 1fr / repeat(2,1fr);`,

  '2.featured': `grid-template: repeat(3,1fr) / repeat(2,1fr);
  grid-template-areas: 'ft ft' 'ft ft';`,
  '2.r16by9.featured': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v' 'ft ft v';`,

  '3': 'grid-template: repeat(3,1fr) / 1fr;',
  '3.r2by3': 'grid-template: repeat(3,1fr) / repeat(1,1fr);',
  '3.r1by1': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',

  '3.featured': `grid-template: repeat(3,1fr) / repeat(2,1fr);
    grid-template-areas: 'ft ft' 'ft ft';
  `,
  '3.r16by9.featured': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,

  '4': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',
  '4.slim': 'grid-template: repeat(4,1fr) / 1fr;',
  '4.r2by3': 'grid-template: repeat(2,1fr) / repeat(2,1fr);',

  '4.featured': `grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,
  '4.r16by9.featured': `grid-template-areas: 'ft ft v' 'ft ft v' 'ft ft v';`,

  '5': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '5.slim': 'grid-template: repeat(5,1fr) / 1fr;',
  '5.r1by2': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r2by3': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '5.r3by2': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '5.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);`,

  '5.featured': `grid-template: repeat(4,1fr) / repeat(2,1fr);
    grid-template-areas: 'ft ft' 'ft ft';`,
  '5.r1by1.featured': `grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,

  '6': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '6.slim': 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '6.r1by2': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r1by1': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r2by3': 'grid-template: repeat(3,1fr) / repeat(2,1fr);',
  '6.r3by2': 'grid-template: repeat(2,1fr) / repeat(3,1fr);',
  '6.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);`,

  '6.featured': `grid-template: repeat(4,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,
  '6.r1by1.featured': `grid-template: repeat(3,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft v' 'ft ft v';`,

  '7': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.slim': 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '7.r4by3': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '7.r16by9': `grid-template: repeat(2,1fr) / repeat(4,1fr);`,

  '7.featured': `grid-template: repeat(4,1fr) / repeat(3,1fr);
    grid-template-areas: 'ft ft ft' 'ft ft ft';`,
  '7.r1by1.featured': `grid-template: repeat(4,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft v';`,

  '8': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.slim': 'grid-template: repeat(4,1fr) / repeat(2,1fr);',
  '8.r4by3': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '8.r16by9': 'grid-template: repeat(2,1fr) / repeat(4,1fr);',

  '8.featured': `grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,
  '8.r1by1.featured': `grid-template: repeat(4,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';`,
  '8.r16by9.featured': `grid-template-areas: 'ft ft ft v' 'ft ft ft v' 'ft ft ft x';`,

  '9': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.slim': `grid-template: repeat(5,1fr) / repeat(2,1fr);`,
  '9.r1by1': 'grid-template: repeat(3,1fr) / repeat(3,1fr);',
  '9.r16by9': `grid-template: repeat(3,1fr) / repeat(4,1fr);`,

  '9.featured': `grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,
  '9.r1by1.featured': `grid-template: repeat(5,1fr) / repeat(5,1fr);
    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';`,

  '10': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.slim': `grid-template: repeat(5,1fr) / repeat(2,1fr);`,
  '10.r1by1': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '10.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',

  '10.featured': `grid-template: repeat(5,1fr) / repeat(4,1fr);
    grid-template-areas: 'ft ft ft ft ft' 'ft ft ft ft ft' 'ft ft ft ft ft';`,
  '10.r1by1.featured': `grid-template: repeat(5,1fr) / repeat(5,1fr);
    grid-template-areas: 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v' 'ft ft ft ft v';`,

  '11': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.slim': 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '11.r1by1': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '11.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',
  '11.r16by9': `grid-template: repeat(3,1fr) / repeat(4,1fr);`,

  '11.featured': `grid-template: repeat(6,1fr) / repeat(6,1fr);
    grid-template-areas: 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft';`,
  '11.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
      'ft ft ft ft ft v' 'ft ft ft ft ft x';`,

  '12': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '12.slim': 'grid-template: repeat(6,1fr) / repeat(2,1fr);',
  '12.r2by3': 'grid-template: repeat(4,1fr) / repeat(3,1fr);',
  '12.r3by2': 'grid-template: repeat(3,1fr) / repeat(4,1fr);',

  '12.featured': `grid-template: repeat(6,1fr) / repeat(6,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'
      'ft ft ft ft ft ft';`,
  '12.r1by1.featured': `grid-template-areas:
    'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
    'ft ft ft ft ft v' 'ft ft ft ft ft x';`,

  '13': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '13.slim': 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
  '13.r2by3': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '13.r1by1': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '13.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '13.r16by9': `grid-template: repeat(3,1fr) / repeat(5,1fr);`,

  '13.featured': `grid-template: repeat(7,1fr) / repeat(6,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft' 'ft ft ft ft ft ft'
      'ft ft ft ft ft ft';`,
  '13.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v' 'ft ft ft ft ft v'
      'ft ft ft ft ft v' 'ft ft ft ft ft x';`,

  '14': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '14.slim': 'grid-template: repeat(7,1fr) / repeat(2,1fr);',
  '14.r2by3': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '14.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '14.r16by9': `grid-template: repeat(3,1fr) / repeat(5,1fr);`,

  '14.featured': `grid-template: repeat(7,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft';`,
  '14.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v'
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,

  '15': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '15.slim': 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
  '15.r1by2': 'grid-template: repeat(5,1fr) / repeat(3,1fr);',
  '15.r3by2': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '15.r16by9': `grid-template: repeat(3,1fr) / repeat(5,1fr);`,

  '15.featured': `grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'
     'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
  '15.r1by1.featured': `grid-template-areas:
     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'
     'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,

  '16': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',
  '16.slim': 'grid-template: repeat(8,1fr) / repeat(2,1fr);',
  '16.r1by2': 'grid-template: repeat(6,1fr) / repeat(3,1fr);',
  '16.r1by1': 'grid-template: repeat(4,1fr) / repeat(4,1fr);',

  '16.featured': `grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
  '16.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,

  '17': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
  '17.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '17.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '17.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',

  '17.featured': `grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
  '17.r1by1.featured': `grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,

  '18': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
  '18.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '18.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '18.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',

  '18.featured': `grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
  '18.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v'
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,

  '19': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
  '19.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '19.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '19.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',

  '19.featured': `grid-template: repeat(8,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
  '19.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(10,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft x';`,

  '20': 'grid-template: repeat(5,1fr) / repeat(4,1fr);',
  '20.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '20.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '20.r1by1': 'grid-template: repeat(4,1fr) / repeat(5,1fr);',

  '20.featured': `grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,
  '20.r1by1.featured': `grid-template: repeat(10,1fr) / repeat(10,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft ft x';`,

  '21': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
  '21.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '21.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '21.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',

  '21.featured': `grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,
  '21.r1by1.featured': `grid-template: repeat(8,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v'  
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,

  '22': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
  '22.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '22.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '22.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',

  '22.featured': `grid-template: repeat(11,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft';`,
  '22.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(7,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft v' 'ft ft ft ft ft ft v' 'ft ft ft ft ft ft x';`,

  '23': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
  '23.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '23.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '23.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',

  '23.featured': `grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
  '23.r1by1.featured': `grid-template: repeat(8,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v'  
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,

  '24': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
  '24.slim': 'grid-template: repeat(8,1fr) / repeat(3,1fr);',
  '24.r1by2': 'grid-template: repeat(6,1fr) / repeat(4,1fr);',
  '24.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',

  '24.featured': `grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
  '24.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,

  '25': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',
  '25.slim': 'grid-template: repeat(9,1fr) / repeat(3,1fr);',
  '25.r1by2': 'grid-template: repeat(7,1fr) / repeat(4,1fr);',
  '25.r1by1': 'grid-template: repeat(5,1fr) / repeat(5,1fr);',

  '25.featured': `grid-template: repeat(11,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 
      'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft';`,
  '25.r1by1.featured': `grid-template: repeat(10,1fr) / repeat(8,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft x';`,

  '26': 'grid-template: repeat(6,1fr) / repeat(5,1fr);',
  '26.slim': 'grid-template: repeat(9,1fr) / repeat(3,1fr);',
  '26.r1by2': 'grid-template: repeat(7,1fr) / repeat(4,1fr);',
  '26.r1by1': 'grid-template: repeat(6,1fr) / repeat(5,1fr);',

  '26.featured': `grid-template: repeat(11,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft'
      'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft' 'ft ft ft ft ft ft ft ft ft';`,
  '26.r1by1.featured': `grid-template: repeat(9,1fr) / repeat(9,1fr);
    grid-template-areas:
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 
      'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft v' 'ft ft ft ft ft ft ft ft x';`,
};

const responsiveStyles = {
  '2.featured': `
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: calc(100% / 3);
      grid-auto-rows: calc(100% / 3);
    }
  `,

  '3.r16by9': `
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 50%;
      grid-auto-columns: 50%;
      grid-auto-flow: column;
    }
  `,

  '3.featured': `
    @media (max-width: 600px) {
      grid-template-areas: 'ft' 'ft';
      grid-template-columns: 1fr;
      grid-template-rows: 25%;
      grid-auto-rows: 25%;
    }
  `,

  '4.r16by9': `
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 50%;
      grid-auto-columns: 50%;
      grid-auto-flow: column;
    }
  `,

  '5.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: calc(100% / 3);
      grid-auto-columns: calc(100% / 3);
      grid-auto-flow: column;
    }
  `,

  '6.r16by9': `grid-template: repeat(2,1fr) / repeat(3,1fr);
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: calc(100% / 3);
      grid-auto-columns: calc(100% / 3);
      grid-auto-flow: column;
    }
  `,

  '7.r16by9': `
    @media (max-height: 600px) {
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: 25%;
      grid-auto-columns: 25%;
      grid-auto-flow: column;
    }
  `,
};

const portraitStyles = `
  @media (max-width: 600px) {
    grid-template-areas: 'ft ft' 'ft ft';
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 25%;
    grid-auto-rows: 25%;
  }
`;

const landscapeStyles = `
  @media (max-height: 600px) {
    grid-template-areas: 'ft ft' 'ft ft';
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: 25%;
    grid-auto-columns: 25%;
    grid-auto-flow: column;
  }
`;

export const StyledGrid = styled.div<StyledGridProps>`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${(props) => props.theme.videoGrid.bgd};

  ${({ size, featured }) =>
    ratioStyles[`${size}${featured ? '.featured' : ''}`] || ''}
  ${({ size, featured, ratio }) => {
    if (!ratio) {
      return;
    }

    let styles = '';
    const index = sortedRatios.indexOf(ratio);

    for (let i = 0; i <= index; i++) {
      const currentRatio = sortedRatios[i];
      const baseStyles =
        ratioStyles[`${size}.${currentRatio}${featured ? '.featured' : ''}`];
      styles += baseStyles || '';
    }

    const mobileStyles =
      responsiveStyles[`${size}.${ratio}${featured ? '.featured' : ''}`] ||
      responsiveStyles[`${size}${featured ? '.featured' : ''}`];

    if (mobileStyles) {
      styles += mobileStyles;
    } else if (ratio === 'r16by9' && (size > 7 || featured)) {
      styles += landscapeStyles;
    } else if (size > 7 || featured) {
      styles += portraitStyles;
    }

    return styles;
  }};
`;
