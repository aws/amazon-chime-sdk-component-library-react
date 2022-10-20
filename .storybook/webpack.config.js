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
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 8192
        }
      }
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
      use: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { 
            parser: 'typescript',
            prettierConfig: {
              printWidth: 120,
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
      test: /(\.stories)?\.mdx$/,
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
