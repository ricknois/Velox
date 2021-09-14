module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo']],
    plugins: ['transform-inline-environment-variables'],
  };
};

// ['@babel/preset-env', { targets: { node: 'current' } }],
// ['@babel/preset-react', { targets: { node: 'current' } }],
