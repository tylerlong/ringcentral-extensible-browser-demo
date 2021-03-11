const dotenv = require('dotenv-override-true')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

const config = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ]
}

module.exports = config
