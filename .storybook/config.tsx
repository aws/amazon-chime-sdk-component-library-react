import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';
import { GlobalStyles } from '../src/theme/globalStyles';

const themes = [lightTheme, darkTheme];

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
  }

  body {
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100vh;
  }
`;

// automatically import all files ending in *.stories.tsx in src/components
const requiredStories = require.context('../src/components', true, /\.stories\.(tsx|mdx)$/);

const withGlobalStyles = (cb: Function) => (
  <>
    <GlobalStyles />
    {cb()}
  </>
);

addDecorator(withGlobalStyles);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withThemesProvider(themes));
addDecorator((story) => story());

configure(requiredStories, module);
