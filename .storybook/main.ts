import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: ['../src/**/*.@(stories.tsx|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-styling',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
    // Storybook 7 appends "--page" to the URL of auto-generated documentation.
    // By default, Storybook uses the "Docs" name that would break all our existing links.
    defaultName: 'Page',
  },
};
export default config;
