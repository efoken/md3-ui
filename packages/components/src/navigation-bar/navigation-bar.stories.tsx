import { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { MdChangeHistory, MdCircle } from "react-icons/md"
import { NavigationBar, NavigationBarItem, NavigationBarProps } from "."
import { Badge } from "../badge"

export default {
  title: "Components/Navigation bar",
  component: NavigationBar,
} satisfies Meta<NavigationBarProps>

export const Basic: StoryObj<NavigationBarProps> = {
  render: ({ value: valueArg, ...args }) => {
    const [value, setValue] = useState(0)

    return (
      <NavigationBar
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        {...args}
      >
        <NavigationBarItem icon={<MdCircle />} label="Label" />
        <NavigationBarItem icon={<MdChangeHistory />} label="Label" />
        <NavigationBarItem
          icon={
            <Badge value={1}>
              <MdChangeHistory />
            </Badge>
          }
          label="Label"
        />
        <NavigationBarItem icon={<MdChangeHistory />} label="Label" />
        <NavigationBarItem
          icon={
            <Badge value={10}>
              <MdChangeHistory />
            </Badge>
          }
          label="Label"
        />
      </NavigationBar>
    )
  },
}
