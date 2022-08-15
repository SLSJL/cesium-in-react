const CracoCesiumPlugin = require("craco-cesium");
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoCesiumPlugin(),
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#00b87e",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
