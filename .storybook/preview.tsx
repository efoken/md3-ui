import { ThemeProvider } from "@md3-ui/styles"
import { DecoratorFn } from "@storybook/react"
import { Global } from "@storybook/theming"
import { View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export const decorators: DecoratorFn[] = [
  (StoryFn) => (
    <SafeAreaProvider style={{ height: "100%" }}>
      <ThemeProvider>
        <Global
          styles={{
            body: {
              backgroundColor: "transparent !important",
            },
          }}
        />
        <View style={{ alignItems: "center", gap: 16 } as any}>
          <StoryFn />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  ),
]
