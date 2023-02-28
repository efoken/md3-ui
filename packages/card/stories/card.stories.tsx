import { FilledButton, OutlinedButton, TonalButton } from "@md3-ui/button"
import { Text } from "@md3-ui/layout"
import { Meta, StoryObj } from "@storybook/react"
import { Card, CardActions, CardContent, CardMedia, CardProps } from "../src"

export default {
  title: "Components/Cards",
  component: Card,
  // subcomponents: { CardActions, CardContent, CardMedia },
} as Meta<CardProps>

export const Elevated: StoryObj<CardProps> = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <Text color="onSurface" variant="titleLarge" sx={{ mb: 2 }}>
          Play
          <br />
          relaxing songs
        </Text>
        <Text color="onSurfaceVariant" variant="bodyMedium">
          From your recent favorites
        </Text>
      </CardContent>
      <CardActions>
        <FilledButton>Get started</FilledButton>
      </CardActions>
    </Card>
  ),
  args: {
    sx: {
      minWidth: 300,
    },
    variant: "elevated",
  },
}

export const Filled: StoryObj<CardProps> = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <Text color="onSurface" variant="titleLarge" sx={{ mb: 2 }}>
          Play
          <br />
          relaxing songs
        </Text>
        <Text color="onSurfaceVariant" variant="bodyMedium">
          From your recent favorites
        </Text>
      </CardContent>
      <CardActions>
        <OutlinedButton sx={{ bgColor: "surface" }}>Get started</OutlinedButton>
      </CardActions>
    </Card>
  ),
  args: {
    sx: {
      minWidth: 300,
    },
    variant: "filled",
  },
}

export const Outlined: StoryObj<CardProps> = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <Text color="onSurface" variant="titleLarge" sx={{ mb: 2 }}>
          Play
          <br />
          relaxing songs
        </Text>
        <Text color="onSurfaceVariant" variant="bodyMedium">
          From your recent favorites
        </Text>
      </CardContent>
      <CardActions>
        <TonalButton>Get started</TonalButton>
      </CardActions>
    </Card>
  ),
  args: {
    sx: {
      minWidth: 300,
    },
    variant: "outlined",
  },
}

export const Media: StoryObj<CardProps> = {
  render: (args) => (
    <Card {...args}>
      <CardMedia
        source={{
          uri: "https://images.unsplash.com/photo-1529244927325-b3ef2247b9fb?auto=format&fit=crop&w=2370&q=80",
        }}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Text color="onSurface" variant="titleLarge" sx={{ mb: 2 }}>
          Glass Souls&apos; World Tour
        </Text>
        <Text color="onSurfaceVariant" variant="bodyMedium">
          From your recent favorites
        </Text>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-start" }}>
        <TonalButton>Buy tickets</TonalButton>
      </CardActions>
    </Card>
  ),
  args: {
    sx: {
      minWidth: 300,
    },
    variant: "elevated",
  },
}
