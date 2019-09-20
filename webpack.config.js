const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: path.resolve(__dirname, "client/src/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader"
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-react-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/public/index.html",
      favicon: "./client/public/favicon.ico"
    })
  ],
  devServer: {
    publicPath: "/",
    contentBase: "/",
    hot: true,
    overlay: true,
    port: 4000,
    inline: true,
    open: "http://localhost:4000"
  }
};

module.exports = config;
