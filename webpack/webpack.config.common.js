const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "..", "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "[name].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "shared/styles/colors.scss";',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "..", "src")],
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".css"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
};
