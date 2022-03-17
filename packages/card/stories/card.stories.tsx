import { Button } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import { Card, CardActions, CardContent, CardProps } from "../src"

export default {
  title: "Components/Cards",
  component: Card,
  subcomponents: { CardActions, CardContent },
} as Meta<CardProps>

export const Basic: Story<CardProps> = (args) => (
  <Card sx={{ minWidth: 275 }} {...args}>
    <CardContent>
      <Text variant="body-medium">Word of the Day</Text>
      <Text as="div" variant="title-medium">
        be•nev•o•lent
      </Text>
      <Text sx={{ marginBottom: 1.5 }}>adjective</Text>
      <Text variant="body-small">
        well meaning and kindly.
        <br />
        &quot;a benevolent smile&quot;
      </Text>
    </CardContent>
  </Card>
)

export const Filled: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>
      <Text variant="title-large">
        Play
        <br />
        relaxing songs
      </Text>
      <Text color="on-secondary-container" variant="body-medium">
        From your recent favorites
      </Text>
    </CardContent>
    <CardActions>
      <Button variant="filled">Get started</Button>
    </CardActions>
  </Card>
)

Filled.args = {
  variant: "filled",
}
