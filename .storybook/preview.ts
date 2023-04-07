import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { GlobalStyles } from '../src/theme/GlobalStyles';
import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';

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
  testId: { table: { disable: true } }, 
};

export const parameters = {
  layout: 'centered',
};
