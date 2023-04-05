const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function getSettingsForStyle(withModules = false, isProd = false) {
  return [
    isProd ? {
      loader: MiniCssExtractPlugin.loader,
      options: { esModule: false }
    } : 'style-loader',
    {
      loader: 'css-loader',
      options: isProd
        ? {
            sourceMap: false,
            importLoaders: 1,
            modules: {
              localIdentName: '[hash:base64]'
            }
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
    },
    {
      loader: 'sass-loader',
    },
  ];
}

module.exports = {
  getSettingsForStyle,
};
