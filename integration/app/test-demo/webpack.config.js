const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app = 'meeting';

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'styled-components': path.resolve('./node_modules/styled-components'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${app}-bundle.js`,
    publicPath: '/',
    libraryTarget: 'var',
    library: `app_${app}`
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: __dirname + `/public/${app}.html`,
      filename: __dirname + `/dist/${app}.html`,
      inject: 'head'
    }),
  ],
  devServer: {
    proxy: {
      context: ['/join', '/attendee'],
      target: 'http://127.0.0.1:8080',
    },
    historyApiFallback: {
      index: `/${app}.html`,
    },
    hot: false,
    port: 9000,
  }
};
