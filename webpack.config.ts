/* eslint-disable node/no-unpublished-import */
import dotenv from 'dotenv-override-true';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {DefinePlugin, ProvidePlugin} from 'webpack';

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new ProvidePlugin({
      Promise: ['es6-promise', 'Promise'],
    }),
  ],
};

module.exports = config;
