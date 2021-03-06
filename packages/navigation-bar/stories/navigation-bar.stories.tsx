import { ChangeHistory, Circle } from "@md3-ui/icons"
import { Badge } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import * as React from "react"
import { NavigationBar, NavigationBarItem, NavigationBarProps } from "../src"

export default {
  title: "Components/Navigation bar",
  component: NavigationBar,
  subcomponents: { NavigationBarItem },
} as Meta<NavigationBarProps>

export const Basic: Story<NavigationBarProps> = ({
  value: valueArg,
  ...args
}) => {
  const [value, setValue] = React.useState(0)

  return (
    <NavigationBar
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      {...args}
    >
      <NavigationBarItem icon={<Circle />} label="Label" />
      <NavigationBarItem icon={<ChangeHistory />} label="Label" />
      <NavigationBarItem
        icon={
          <Badge badgeContent={1}>
            <ChangeHistory />
          </Badge>
        }
        label="Label"
      />
      <NavigationBarItem icon={<ChangeHistory />} label="Label" />
      <NavigationBarItem
        icon={
          <Badge badgeContent={10}>
            <ChangeHistory />
          </Badge>
        }
        label="Label"
      />
    </NavigationBar>
  )
}
