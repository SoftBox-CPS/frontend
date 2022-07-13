const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');
const publicPath = path.resolve(__dirname, 'public');
const srcPath = path.resolve(__dirname, 'src');

const isProd = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(publicPath, 'index.html'),
  }),
  !isProd && new ReactRefreshPlugin(),
].filter(Boolean);

const getSettingsForStyle = (withModules = false) => {
  return [
    'style-loader',
    !withModules
      ? 'css-loader'
      : {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: !isProd
                ? '[path][name]__[local]'
                : '[hash:base64]',
            },
          },
        },
    'sass-loader',
  ];
};

module.exports = {
  entry: path.join(srcPath, 'index.jsx'),
  target: isProd ? 'browserList' : 'web',
  plugins,
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8800,
    hot: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\jsx?/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        exclude: /\.modules\.s?css$/,
        use: getSettingsForStyle(),
      },
      {
        // css-modules
        test: /\.modules\.s?css$/,
        use: getSettingsForStyle(true),
      },
    ],
  },
};
