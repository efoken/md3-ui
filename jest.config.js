/** @type {import('jest').Config} */
const config = {
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
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native(-.*)?|@react-native(-community)?/)",
  ],
  setupFilesAfterEnv: ["./jest.setup.js"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
}

module.exports = config
