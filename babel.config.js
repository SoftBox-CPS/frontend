module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    process.env.NODE_ENV === 'development' && 'react-refresh/babel',
  ];

  const presets = ['@babel/preset-env', '@babel/preset-react'];

  return {
    presets,
    plugins,
  };
};
