const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mf-authentication",

  exposes: {
    "./web-components": "./src/bootstrap.ts",
  },

  shared: {
    ...shareAll({ requiredVersion: "auto" }),
  },
});
