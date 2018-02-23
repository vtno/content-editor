const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require("path")

const config = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: { inline: true },
  devtool: "eval",
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}

module.exports = config
