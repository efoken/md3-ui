module.exports = {
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{ts,tsx}"],
  moduleFileExtensions: [
    "web.js",
    "web.jsx",
    "web.ts",
    "web.tsx",
    "js",
    "jsx",
    "ts",
    "tsx",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-native-web/)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
}
