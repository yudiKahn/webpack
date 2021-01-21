const path = require("path");
const webpack = require("webpack");
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  path.resolve(__dirname, "app"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new HtmlwebpackPlugin({
      title: 'My app'
    })
  ],
};