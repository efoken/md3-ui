import { Box, createTheme, Md3Provider } from "@md3-ui/core"
import { Decorator, Parameters } from "@storybook/react"
import { I18nManager } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
}

export const parameters: Parameters = {
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
}

export const decorators: Decorator[] = [
  (StoryFn, context) => {
    const { direction } = context.globals
    const dir = direction.toLowerCase()

    I18nManager.forceRTL(dir === "rtl")

    return (
      <SafeAreaProvider style={{ height: "100%" }}>
        <Md3Provider theme={createTheme()}>
          <Box dir={dir} id="story-wrapper" sx={{ alignItems: "flex-start" }}>
            <StoryFn />
          </Box>
        </Md3Provider>
      </SafeAreaProvider>
    )
  },
]
