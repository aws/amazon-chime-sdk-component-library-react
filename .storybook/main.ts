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
    '../src/components/ui/icons/*/**.@(stories.tsx|mdx)',
    '../src/components/ui/Badge/**.@(stories.tsx|mdx)',
    '../src/components/ui/Button/**.@(stories.tsx|mdx)',
    '../src/components/ui/Checkbox/**.@(stories.tsx|mdx)',
    '../src/components/ui/ContentTile/**.@(stories.tsx|mdx)',
    '../src/components/ui/ControlBar/**.@(stories.tsx|mdx)',
    '../src/components/ui/FormField/**.@(stories.tsx|mdx)',
    '../src/components/ui/Radio/**.@(stories.tsx|mdx)',
    '../src/components/ui/Heading/**.@(stories.tsx|mdx)',
    '../src/components/ui/Label/**.@(stories.tsx|mdx)',
    '../src/components/ui/Input/**.@(stories.tsx|mdx)',
    '../src/components/ui/Modal/**.@(stories.tsx|mdx)',
    '../src/components/ui/Navbar/**.@(stories.tsx|mdx)',
    '../src/components/ui/Flex/docs/**.@(stories.tsx|mdx)',
    '../src/components/ui/Notification/**.@(stories.tsx|mdx)',
    '../src/components/ui/NotificationGroup/**.@(stories.tsx|mdx)',
    '../src/components/ui/PopOver/**.@(stories.tsx|mdx)',
    '../src/components/ui/Portal/**.@(stories.tsx|mdx)',
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
