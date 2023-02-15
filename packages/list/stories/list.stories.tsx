import { Meta, StoryObj } from "@storybook/react"
import { List, ListItem, ListProps } from "../src"

export default {
  title: "Lists",
  component: List,
  // subcomponents: { ListItem },
} as Meta<ListProps>

export const Basic: StoryObj<ListProps> = {
  render: (args) => (
    <List {...args}>
      <ListItem />
      <ListItem />
      <ListItem />
    </List>
  ),
}
