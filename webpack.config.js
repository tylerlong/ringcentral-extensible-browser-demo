const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })]
}

module.exports = config
