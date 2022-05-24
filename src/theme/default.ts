// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Breakpoints } from './styled';

export const fonts = {
  body: "'Ember', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  monospace: 'Menlo, monospace',
};

export const radii = {
  default: '0.25rem',
  circle: '50%',
};

export const zIndex = {
  navigation: 10,
  controlBar: 15,
  modal: 20,
  popOver: 30,
  notificationGroup: 40,
};

const breakpoints = [
  '20rem', // 320px
  '35.5rem', // 568px
  '48rem', // 768px
  '64rem', // 1024px
  '90rem', // 1440px
] as Breakpoints;

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const mediaQueries = {
  min: {
    xs: `@media screen and (min-width: ${breakpoints.xs})`,
    sm: `@media screen and (min-width: ${breakpoints.sm})`,
    md: `@media screen and (min-width: ${breakpoints.md})`,
    lg: `@media screen and (min-width: ${breakpoints.lg})`,
    xl: `@media screen and (min-width: ${breakpoints.xl})`,
  },
  max: {
    xs: `@media screen and (max-width: ${breakpoints.xs})`,
    sm: `@media screen and (max-width: ${breakpoints.sm})`,
    md: `@media screen and (max-width: ${breakpoints.md})`,
    lg: `@media screen and (max-width: ${breakpoints.lg})`,
    xl: `@media screen and (max-width: ${breakpoints.xl})`,
  },
};

const fontSizes = {
  baseFontSize: '16px',
  fontWeight: 'normal',

  h1: {
    fontSize: '5.3rem',
    fontWeight: 'normal',
    lineHeight: '5.625rem',
    mobile: {
      fontSize: '3.8125rem',
      fontWeight: 'normal',
      lineHeight: '5.625rem',
    },
  },

  h2: {
    fontSize: '3.925rem',
    fontWeight: 'normal',
    lineHeight: '3.75rem',
    mobile: {
      fontSize: '3.05rem',
      fontWeight: 'normal',
      lineHeight: '4.5rem',
    },
  },

  h3: {
    fontSize: '2.44125rem',
    fontWeight: 'normal',
    lineHeight: '3.75rem',
    mobile: {
      fontSize: '2.90625rem',
      fontWeight: 'normal',
      lineHeight: '3rem',
    },
  },

  h4: {
    fontSize: '1.953125rem',
    fontWeight: 'normal',
    lineHeight: '3.75rem',
    mobile: {
      fontSize: '2.15rem',
      fontWeight: 'normal',
      lineHeight: '3rem',
    },
  },

  h5: {
    fontSize: '1.5625rem',
    fontWeight: 'normal',
    lineHeight: '3rem',
    mobile: {
      fontSize: '1.59375rem',
      fontWeight: 'normal',
      lineHeight: '1.875rem',
    },
  },

  h6: {
    fontSize: '1.25rem',
    fontWeight: 'normal',
    lineHeight: '1.875rem',
    mobile: {
      fontSize: '1.18125rem',
      fontWeight: 'normal',
      lineHeight: '1.5rem',
    },
  },

  text: {
    fontSize: '0.875rem',
    lineHeight: '1.43',
  },

  label: {
    fontSize: '0.875rem',
    lineHeight: '1.43',
  },

  small: {
    fontSize: '0.75rem',
    lineHeight: '1.43',
  },
  footnote: {
    fontSize: '0.65rem',
    lineHeight: '1rem',
  },
};

const modalSizes = {
  md: {
    width: '35rem',
    height: '94vh',
  },
  lg: {
    width: '50rem',
    height: '94vh',
  },
  fullscreen: {
    width: '98vw',
    height: '96vh',
  },
};

const iconButtonSizes = {
  sm: '1.5rem',
  md: '2.5rem',
  lg: '4rem',
};

export const defaultTheme = {
  breakpoints,
  mediaQueries,
  fonts,
  fontSizes,
  radii,
  zIndex,
  modalSizes,
  iconButtonSizes,
};

export default defaultTheme;
