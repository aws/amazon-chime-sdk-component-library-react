import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import { GlobalStyles } from '../src/theme/GlobalStyles';
import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';
import { addDecorator } from '@storybook/react';

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

addDecorator(withThemesProvider(themes, ThemeProvider));
addDecorator(withGlobalStyles);
// export const decorators = [
//   withGlobalStyles
// ];
