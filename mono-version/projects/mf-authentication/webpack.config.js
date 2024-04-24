const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mf-authentication",

  exposes: {
    "./Module":
      "./projects/mf-authentication/src/app/authentication/authentication.module.ts",
  },
});
