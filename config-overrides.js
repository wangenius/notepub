const { overrideDevServer } = require("customize-cra");
const devServerConfig = () => (config) => {
  return {
    ...config,
    historyApiFallback: true,
  };
};

// config-overrides.js
module.exports = {
  webpack: function (config, env) {
    return config;
  },
  devServer: overrideDevServer(devServerConfig()),
};
