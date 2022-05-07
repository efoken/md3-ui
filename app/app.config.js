const packagJson = require("./package.json")

module.exports = {
  expo: {
    name: "md3-ui-app",
    slug: "md3-ui-app",
    version: packagJson.version,
    owner: "efoken",
    assetBundlePatterns: ["**/*"],
  },
}
