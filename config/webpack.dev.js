const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dotenv = require('dotenv').config({ path: __dirname + '/.env'});

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const { getSettingsForStyle } = require('./settings');

const {
  API_URL: url,
  API_PORT: port
} = process.env;

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
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: `${url}:${port}`,
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      }
    }
  },

  // Plugins
  // ?ReactRefreshPlugin enable "Fast Refresh" for React Components
  plugins: [
    new ReactRefreshPlugin()
  ],

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
