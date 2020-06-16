const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-viewport/register',
    'storybook-addon-styled-component-theme/dist/register',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
};
