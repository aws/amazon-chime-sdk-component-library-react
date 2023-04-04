import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { GlobalStyles } from '../src/theme/GlobalStyles';
import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';

const StorybookStyle = createGlobalStyle`
  #root {
    height: 100vh;
  }

  .sb-show-main {
    padding: 0 !important;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
];

export const argTypes = {
  tag: { table: { disable: true } },
  id: { table: { disable: true } },
  className: { table: { disable: true } },
  css: { table: { disable: true } },
};
