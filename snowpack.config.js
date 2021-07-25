// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
  },
  plugins: ['@snowpack/plugin-webpack'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: { out: "docs", },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};
