import { Box, createTheme, Md3Provider } from "@md3-ui/core"
import { Preview } from "@storybook/react"
import { SafeAreaProvider } from "react-native-safe-area-context"

const preview: Preview = {
  globalTypes: {
    direction: {
      name: "Direction",
      description: "Direction for layout",
      defaultValue: "LTR",
      toolbar: {
        icon: "globe",
        items: ["LTR", "RTL"],
      },
    },
  },
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 8,
      },
      values: [
        { name: "white", value: "#fff" },
        { name: "black", value: "#000" },
        { name: "light", value: "#fffbfe" },
        { name: "dark", value: "#1c1b1f" },
      ],
    },
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (StoryFn, context) => (
      <SafeAreaProvider style={{ height: "100%" }}>
        <Md3Provider theme={createTheme()}>
          <Box
            dir={context.globals.direction.toLowerCase()}
            id="story-wrapper"
            sx={{ alignItems: "flex-start" }}
          >
            <StoryFn />
          </Box>
        </Md3Provider>
      </SafeAreaProvider>
    ),
  ],
}

export default preview
