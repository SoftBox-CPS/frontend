const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
require('dotenv').config({ path: __dirname + '/.env'});

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const { getSettingsForStyle } = require('./settings');
const { DefinePlugin } = require('webpack');

// It's better to define full API URLs
const {
  API_URL: url
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
    port: 9000,
    allowedHosts: 'all',
    proxy: {
      // '/api': {
      //   target: process.env.API_URL,
      //   pathRewrite: { '^/api': '' },
      //   changeOrigin: true,
      // },
      // Proxy all `/api` requests to url 
      "/api": url
    }
  },

  // Plugins
  // ?ReactRefreshPlugin enable "Fast Refresh" for React Components
  plugins: [
    new ReactRefreshPlugin(),
    new DefinePlugin({
      /**
       * Replaces API_URL variables with assigned values.
       * Declare API_URL variable in .ts file (currently declared in types/globals.ts)
       */
      API_URL: JSON.stringify("http://localhost:9000/api")
    })
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
