const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
module.exports = withTypescript(
  withSass()
);

// {
//   webpack(config, options) {
//     return config;
//   },
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: "[local]___[hash:base64:5]",
//   },
//   sassLoaderOptions: {
//     includePaths: ["absolute/path/a", "absolute/path/b"]
//   }
// }