const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  stories: ['../src/components/ui/Badge/Badge.stories.@(tsx|mdx)'],
  addons: [
    "storybook-addon-styled-component-theme/dist/preset",
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
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

// '../src/**/*.stories.@(ts|js|tsx|mdx)'
