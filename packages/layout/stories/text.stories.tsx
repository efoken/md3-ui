import { Meta, StoryObj } from "@storybook/react"
import { Stack, Text, TextProps } from "../src"

export default {
  title: "Layout/Text",
  component: Text,
} as Meta<TextProps>

export const Basic: StoryObj = {
  render: () => (
    <Stack spacing={2}>
      <Text variant="display-large">Display Large</Text>
      <Text variant="display-medium">Display Medium</Text>
      <Text variant="display-small">Display Small</Text>
      <Text variant="headline-large">Headline Large</Text>
      <Text variant="headline-medium">Headline Medium</Text>
      <Text variant="headline-small">Headline Small</Text>
      <Text variant="title-large">Title Large</Text>
      <Text variant="title-medium">Title Medium</Text>
      <Text variant="title-small">Title Small</Text>
      <Text variant="label-large">Label Large</Text>
      <Text variant="label-medium">Label Medium</Text>
      <Text variant="label-small">Label Small</Text>
      <Text variant="body-large">Body Large</Text>
      <Text variant="body-medium">Body Medium</Text>
      <Text variant="body-small">Body Small</Text>
    </Stack>
  ),
}
