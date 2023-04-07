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
    '../src/hooks/**/*.mdx',
    '../src/providers/**/*.mdx',
    '../src/components/*.mdx',
    '../src/components/sdk/**/*.mdx',
    '../src/components/ui/Badge/*.mdx',
    '../src/components/ui/Badge/*.stories.tsx',
    '../src/components/ui/Button/*.mdx',
    '../src/components/ui/Button/*.stories.tsx',
    '../src/components/ui/Checkbox/*.mdx',
    '../src/components/ui/Checkbox/*.stories.tsx',
    '../src/components/ui/FormField/*.mdx',
    '../src/components/ui/FormField/*.stories.tsx',
    '../src/components/ui/Radio/*.mdx',
    '../src/components/ui/Radio/*.stories.tsx',
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
