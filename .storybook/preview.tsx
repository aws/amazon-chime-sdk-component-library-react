import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'themeprovider-storybook';

import { GlobalStyles } from '../src/theme/GlobalStyles';
import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';

const themes = [lightTheme, darkTheme];

const StorybookStyle = createGlobalStyle`
  #root {
    height: 100vh;
  }

  .sb-show-main {
    padding: 0 !important;
  }
`;

const withGlobalStyles = (Story: any) => (
  <>
    <GlobalStyles />
    <StorybookStyle />
    <Story />
  </>
);

export const decorators = [
  withGlobalStyles,
  withThemesProvider(themes),
  withKnobs
];
