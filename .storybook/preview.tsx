import { Box } from "@md3-ui/layout"
import { ThemeProvider } from "@md3-ui/styles"
import { DecoratorFn } from "@storybook/react"
import { SafeAreaProvider } from "react-native-safe-area-context"

export const decorators: DecoratorFn[] = [
  (StoryFn) => (
    <SafeAreaProvider style={{ height: "100%" }}>
      <ThemeProvider>
        <Box sx={{ alignItems: "center" }}>
          <StoryFn />
        </Box>
      </ThemeProvider>
    </SafeAreaProvider>
  ),
]
