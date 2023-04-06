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
  stories: [
    '../src/**/ui/Badge/*.mdx',
    '../src/**/ui/Badge/*.stories.@(ts|js|tsx|mdx)',
  ],
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
  },
};
export default config;
