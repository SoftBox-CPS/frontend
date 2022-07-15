const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const { getSettingsForStyle } = require('./settings');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.s?css$/,
        exclude: /\.module\.s?css$/,
        use: getSettingsForStyle(),
      },
      {
        // css-modules
        test: /\.module\.s?css$/,
        use: getSettingsForStyle(true),
      },
    ],
  },
});
