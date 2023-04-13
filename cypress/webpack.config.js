const { createWebpackConfig } = require('react-scripts/config/webpack.config');

module.exports = (webpackEnv) => {
  const config = createWebpackConfig(webpackEnv);
  // Add your custom settings here
  return config;
};
