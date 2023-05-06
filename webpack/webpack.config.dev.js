const { merge } = require("webpack-merge");
const path = require("path");
const commonWebpackConfig = require("./webpack.config.common.js");

const devWebpackConfig = merge(commonWebpackConfig, {
  mode: "development",
  devServer: {
    port: 8081,
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
