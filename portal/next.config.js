const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "portal",
        remotes: {
          homepage: `homepage@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./pages/BoringPage": "./pages/boring-page.tsx",
          "./components/BoringButton": "./components/BoringButton.tsx",
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};
