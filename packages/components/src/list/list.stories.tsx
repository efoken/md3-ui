import { Meta, StoryObj } from "@storybook/react"
import { MdPerson } from "react-icons/md"
import { Image } from "react-native"
import { List, ListItem, ListItemIcon, ListItemImage, ListProps } from "."
import { Stack } from "../stack"

export default {
  title: "Lists",
  component: List,
} satisfies Meta<ListProps>

export const WithImageOrThumbnail: StoryObj<ListProps> = {
  render: (args) => (
    <Stack spacing={2.5}>
      <List {...args}>
        <ListItem
          multilineSupportingText
          start={
            <ListItemImage>
              <Image
                source={{
                  uri: "https://placehold.co/128x128?font=roboto",
                  width: 56,
                  height: 56,
                }}
              />
            </ListItemImage>
          }
          headline="Headline"
          supportingText="Supporting text that is long enough to fill up multiple lines"
        />
        <ListItem
          start={
            <ListItemImage>
              <Image
                source={{
                  uri: "https://placehold.co/128x128?font=roboto",
                  width: 64,
                  height: 64,
                }}
              />
            </ListItemImage>
          }
          headline="Headline"
          supportingText="Supporting text"
        />
        <ListItem
          start={
            <ListItemImage>
              <Image
                source={{
                  uri: "https://placehold.co/128x128?font=roboto",
                  width: 64,
                  height: 64,
                }}
              />
            </ListItemImage>
          }
          headline="Headline"
        />
      </List>
      <List {...args}>
        <ListItem
          multilineSupportingText
          start={
            <ListItemImage>
              <Image
                source={{
                  uri: "https://placehold.co/128x128?font=roboto",
                  width: 64,
                  height: 64,
                }}
              />
            </ListItemImage>
          }
          headline="Headline"
          supportingText="Supporting text that is long enough to fill up multiple lines"
          end={<input type="checkbox" />}
        />
        <ListItem
          start={
            <ListItemImage>
              <Image
                source={{
                  uri: "https://placehold.co/128x128?font=roboto",
                  width: 64,
                  height: 64,
                }}
              />
            </ListItemImage>
          }
          headline="Headline"
          supportingText="Supporting text"
          end={<input type="checkbox" />}
        />
        <ListItem
          start={
            <ListItemImage>
              <Image
                source={{
                  uri: "https://placehold.co/128x128?font=roboto",
                  width: 64,
                  height: 64,
                }}
              />
            </ListItemImage>
          }
          headline="Headline"
          end={<input type="checkbox" />}
        />
      </List>
    </Stack>
  ),
}

export const WithIcon: StoryObj<ListProps> = {
  render: (args) => (
    <Stack spacing={2.5}>
      <List {...args}>
        <ListItem
          multilineSupportingText
          start={
            <ListItemIcon>
              <MdPerson />
            </ListItemIcon>
          }
          headline="Headline"
          supportingText="Supporting text that is long enough to fill up multiple lines"
        />
        <ListItem
          start={
            <ListItemIcon>
              <MdPerson />
            </ListItemIcon>
          }
          headline="Headline"
          supportingText="Supporting text"
        />
        <ListItem
          start={
            <ListItemIcon>
              <MdPerson />
            </ListItemIcon>
          }
          headline="Headline"
        />
      </List>
      <List {...args}>
        <ListItem
          multilineSupportingText
          start={
            <ListItemIcon>
              <MdPerson />
            </ListItemIcon>
          }
          headline="Headline"
          supportingText="Supporting text that is long enough to fill up multiple lines"
          end={<input type="checkbox" />}
        />
        <ListItem
          start={
            <ListItemIcon>
              <MdPerson />
            </ListItemIcon>
          }
          headline="Headline"
          supportingText="Supporting text"
          end={<input type="checkbox" />}
        />
        <ListItem
          start={
            <ListItemIcon>
              <MdPerson />
            </ListItemIcon>
          }
          headline="Headline"
          end={<input type="checkbox" />}
        />
      </List>
    </Stack>
  ),
}

export const TextOnly: StoryObj<ListProps> = {
  render: (args) => (
    <Stack spacing={2.5}>
      <List {...args}>
        <ListItem
          multilineSupportingText
          headline="Headline"
          supportingText="Supporting text that is long enough to fill up multiple lines"
        />
        <ListItem headline="Headline" supportingText="Supporting text" />
        <ListItem headline="Headline" />
      </List>
      <List {...args}>
        <ListItem
          multilineSupportingText
          headline="Headline"
          supportingText="Supporting text that is long enough to fill up multiple lines"
          end={<input type="checkbox" />}
        />
        <ListItem
          headline="Headline"
          supportingText="Supporting text"
          end={<input type="checkbox" />}
        />
        <ListItem headline="Headline" end={<input type="checkbox" />} />
      </List>
    </Stack>
  ),
}
