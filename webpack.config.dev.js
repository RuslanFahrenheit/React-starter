const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './src'),
  entry: './index.jsx',
  output: {
    path: outputPath,
    filename: 'index.js',
  },
  devServer: {
    contentBase: outputPath,
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
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
        },
      },
    ],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: path.join(__dirname, '/public/index.html'),
    }),
  ],
};
