import React from 'react';
import { addDecorator, configure } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withThemesProvider } from 'themeprovider-storybook';

import lightTheme from '../src/theme/light';
import darkTheme from '../src/theme/dark';
import { GlobalStyles } from '../src/theme/GlobalStyles';

const themes = [lightTheme, darkTheme];

// automatically import all files ending in *.stories.tsx in src/components
const requiredStories = require.context(
  '../src',
  true,
  /\.stories\.(tsx|mdx)$/
);

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
configure(requiredStories, module);
