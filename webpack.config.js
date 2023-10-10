const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

var SRC_DIR = path.join(__dirname, "./client/src"); // your index.jsx file

var DIST_DIR = path.join(__dirname, "./client/src"); // your bundle file

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to a separate file
          "css-loader", // Transpile CSS
          "postcss-loader", // Apply PostCSS transformations (including Tailwind CSS)
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css", // Output CSS filename
    }),
  ],
};
