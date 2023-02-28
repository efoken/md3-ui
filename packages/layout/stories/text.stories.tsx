import { Meta, StoryObj } from "@storybook/react"
import { Stack, Text, TextProps } from "../src"

export default {
  title: "Layout/Text",
  component: Text,
} as Meta<TextProps>

export const Basic: StoryObj = {
  render: () => (
    <Stack spacing={2}>
      <Text variant="displayLarge">Display Large</Text>
      <Text variant="displayMedium">Display Medium</Text>
      <Text variant="displaySmall">Display Small</Text>
      <Text variant="headlineLarge">Headline Large</Text>
      <Text variant="headlineMedium">Headline Medium</Text>
      <Text variant="headlineSmall">Headline Small</Text>
      <Text variant="titleLarge">Title Large</Text>
      <Text variant="titleMedium">Title Medium</Text>
      <Text variant="titleSmall">Title Small</Text>
      <Text variant="labelLarge">Label Large</Text>
      <Text variant="labelMedium">Label Medium</Text>
      <Text variant="labelSmall">Label Small</Text>
      <Text variant="bodyLarge">Body Large</Text>
      <Text variant="bodyMedium">Body Medium</Text>
      <Text variant="bodySmall">Body Small</Text>
    </Stack>
  ),
}
