const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getSettingsForStyle(withModules = false, isProd = false) {
  return [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      options: isProd
        ? {
            sourceMap: false,
            importLoaders: 2,
            modules: !withModules ? false : { localIdentName: '[hash:base64]' },
          }
        : {
            sourceMap: true,
            importLoaders: 1,
            modules: !withModules
              ? false
              : { localIdentName: '[path][name]__[local]' },
          },
    },
    {
      loader: 'postcss-loader',
      options: isProd ? {} : { sourceMap: true },
    },
    {
      loader: 'sass-loader',
      options: isProd ? {} : { sourceMap: true },
    },
  ];
}

module.exports = {
  getSettingsForStyle,
};
