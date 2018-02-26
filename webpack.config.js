const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const path = require("path")

const config = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "app")]
  },
  devServer: { inline: true },
  devtool: "eval",
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
