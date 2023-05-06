const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.config.common.js");

const buildWebpackConfig = merge(commonWebpackConfig, {
  mode: "production",
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
