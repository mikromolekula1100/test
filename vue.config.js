const { defineConfig } = require('@vue/cli-service')
const path = require("path"); // Not importing the builtin-path module was causing your build failure.
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: { https: false, zlib: false, http: false, url: false },
    },
    plugins: [
      new NodePolyfillPlugin(),
      new DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(""),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSource, "Assets"), to: "Assets" },
          { from: path.join(cesiumSource, "ThirdParty"), to: "ThirdParty" },
          { from: path.join(cesiumSource, "Widgets"), to: "Widgets" },
          { from: path.join(cesiumSource, cesiumWorkers), to: "Workers" },
        ],
      }),
    ],
  },
})
