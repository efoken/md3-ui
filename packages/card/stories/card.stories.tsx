import { Button } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import { Card, CardActions, CardContent, CardProps } from "../src"

export default {
  title: "Components/Cards",
  component: Card,
  subcomponents: { CardActions, CardContent },
} as Meta<CardProps>

export const Elevated: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>
      <Text color="on-surface" variant="title-large" sx={{ marginBottom: 1 }}>
        Play
        <br />
        relaxing songs
      </Text>
      <Text color="on-surface-variant" variant="body-medium">
        From your recent favorites
      </Text>
    </CardContent>
    <CardActions>
      <Button variant="filled">Get started</Button>
    </CardActions>
  </Card>
)

Elevated.args = {
  sx: {
    minWidth: 300,
  },
  variant: "elevated",
}

export const Filled: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>
      <Text color="on-surface" variant="title-large" sx={{ marginBottom: 1 }}>
        Play
        <br />
        relaxing songs
      </Text>
      <Text color="on-surface-variant" variant="body-medium">
        From your recent favorites
      </Text>
    </CardContent>
    <CardActions>
      <Button variant="outlined" sx={{ bgColor: "surface" }}>
        Get started
      </Button>
    </CardActions>
  </Card>
)

Filled.args = {
  sx: {
    minWidth: 300,
  },
  variant: "filled",
}

export const Outlined: Story<CardProps> = (args) => (
  <Card {...args}>
    <CardContent>
      <Text color="on-surface" variant="title-large" sx={{ marginBottom: 1 }}>
        Play
        <br />
        relaxing songs
      </Text>
      <Text color="on-surface-variant" variant="body-medium">
        From your recent favorites
      </Text>
    </CardContent>
    <CardActions>
      <Button variant="tonal">Get started</Button>
    </CardActions>
  </Card>
)

Outlined.args = {
  sx: {
    minWidth: 300,
  },
  variant: "outlined",
}
