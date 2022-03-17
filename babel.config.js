module.exports = {
  plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]],
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        bugfixes: true,
        loose: true,
        modules: false,
      },
    ],
  ],
}
