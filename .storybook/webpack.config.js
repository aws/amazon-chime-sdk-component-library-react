const webpackConfig = require('../webpack.config');
const path = require('path');
const cssRule = webpackConfig.module.rules[0];

module.exports = ({ config }) => {
  config.module.rules = [
    {
      test: /\.css$/,
      use: ['style-loader', ...cssRule.use.slice(1)]
    },
    ...webpackConfig.module.rules.slice(1),
    {
      test: /\.(ts|tsx)$/,
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../.storybook')
      ]
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { 
            parser: 'typescript',
            prettierConfig: {
              printWidth: 100,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'es5',
              singleQuote: true,
            },
            uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
          }
        }
      ],
      enforce: 'pre',
    }
  ]
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
}
