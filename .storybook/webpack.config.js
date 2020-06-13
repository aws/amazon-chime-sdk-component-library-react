const { resolve } = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = ({ config }) => {
  config.module.rules = [
    {
      test: /\.css$/,
      use: [
        'style-loader',
        { 
          loader: 'css-loader', 
          options: { importLoaders: 1 } 
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              postcssPresetEnv({
                stage: 4
              })
            ]
          }
        }
      ]
    },
    {
      test: /\.tsx?$/,
      use: ['ts-loader']
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader']
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    },
    {
      test: /\.(ts|tsx)$/,
      include: [
        resolve(__dirname, '../src'),
        resolve(__dirname, '../.storybook')
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
    },
    { // add loader for mdx file
      test: /\.stories\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    }
  ]
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
}
