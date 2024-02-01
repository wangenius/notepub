const { overrideDevServer } = require("customize-cra");
const devServerConfig = () => (config) => {
  return {
    ...config,
    historyApiFallback: true,
    // 服务开启gzip
    // compress: true,
    // proxy: {
    //   "/api": {
    //     target: "http://192.168.4.195:2021/version",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "/api",
    //     },
    //   }
    // }
  };
};

// config-overrides.js
module.exports = {
  webpack: function (config, env) {
    return config;
  },
  jest: function (config) {
    return config;
  },
  devServer: overrideDevServer(devServerConfig()),
  paths: function (paths, env) {
    return paths;
  },
};
