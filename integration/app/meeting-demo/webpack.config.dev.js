// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const config = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const app = 'meeting';

module.exports = Object.assign(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: __dirname + `/app/${app}.html`,
      filename: __dirname + `/dist/${app}.html`,
      inject: 'head',
    }),
  ],
});