const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './src'),
  entry: './index.jsx',
  output: {
    path: outputPath,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebPackPlugin({
      template: path.join(__dirname, '/public/index.html'),
    }),
  ],
};
