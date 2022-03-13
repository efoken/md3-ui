module.exports =
  // Use a different config for production build.
  process.env.NODE_ENV === "production" && !process.env.STORYBOOK
    ? {
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
    : {
        presets: ["module:metro-react-native-babel-preset"],
      }
