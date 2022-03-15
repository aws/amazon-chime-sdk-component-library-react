// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const path = require('path');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app = 'meeting';

module.exports = {
  mode: 'production',
  entry: ['./src/index.tsx'],
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg)$/,
        type: 'asset/inline'
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
    fallback: {
      fs: false,
      tls: false,
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${app}-bundle.js`,
    publicPath: '/',
    libraryTarget: 'var',
    library: `app_${app}`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: __dirname + `/app/${app}.html`,
      filename: __dirname + `/dist/${app}.html`,
      inject: 'head',
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [new RegExp(`${app}`)]),
  ],
  devServer: {
    proxy: {
      context: ['/join', '/attendee', '/end'],
      target: 'http://127.0.0.1:8080',
    },
    historyApiFallback: {
      index: `/${app}.html`,
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    devMiddleware: {
      index: `${app}.html`,
      writeToDisk: true,
    },
    client: {
      overlay: false,
    },
    hot: false,
    host: '0.0.0.0',
    port: 9000,
    https: true,
    open: true,
  },
};
