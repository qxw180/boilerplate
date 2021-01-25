/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const path = require("path");
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // resolve配置，参考： https://nextjs.org/docs/advanced-features/module-path-aliases
    config.resolve.alias["@"] = path.join(__dirname, "src");

    return config;
  },
};
