import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: sans-serif;
  }
`;

// automatically import all files ending in *.stories.tsx in src/components
const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const withGlobalStyles = (cb: Function) => (
  <>
    <GlobalStyle />
    {cb()}
  </>
);

addDecorator(withGlobalStyles);
addDecorator(withKnobs)
addDecorator((story) => (
  <ThemeProvider theme={lightTheme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module)
