/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // hot reload
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800, //チェック時間
      aggregateTimeout: 300, // 遅延時間
      ignored : ['node_modules']
    };
    return config;
  },
  basePath: process.env.GITHUB_ACTIONS ? "/next-blog" : "",
  trailingSlash: true,
};

module.exports = nextConfig;