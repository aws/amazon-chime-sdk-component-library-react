const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|tsx|mdx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-viewport/register',
    'themeprovider-storybook/register',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
};
