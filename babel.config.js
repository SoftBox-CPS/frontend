module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    process.env.NODE_ENV === 'development' && 'react-refresh/babel',
  ].filter(Boolean);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  return {
    presets,
    plugins,
  };
};
