const { getDefaultConfig } = require("expo/metro-config")
const path = require("node:path")

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, "..")

const config = getDefaultConfig(projectRoot)

module.exports = {
  ...config,
  // 1. Watch all files within the monorepo
  watchFolders: [workspaceRoot],
  resolver: {
    ...config.resolver,
    // 2. Let Metro know where to resolve packages and in what order
    nodeModulesPaths: [
      path.resolve(projectRoot, "node_modules"),
      path.resolve(workspaceRoot, "node_modules"),
    ],
    // 3. Force Metro to resolve (sub)dependencies only from `nodeModulesPaths`
    disableHierarchicalLookup: true,
    unstable_enableSymlinks: true,
  },
}
