const commonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const productDomain = process.env.PRODUCT_DOMAIN || 'https://actual-domain.com';

const productionsConfig = {
  mode: 'production',
  output: {
    filename: `[name].[contenthash].js` // explain 
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${productDomain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],

}



module.exports = merge(commonConfig, productionsConfig);