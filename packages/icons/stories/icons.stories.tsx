import { IconProps } from "@md3-ui/icon"
import { Box } from "@md3-ui/layout"
import { Meta, Story } from "@storybook/react"
import * as Md3Icons from "../src"

export default {
  title: "Components/Icons",
} as Meta<IconProps>

export const Icons: Story<IconProps> = () => (
  <Box
    style={{
      gridTemplateColumns: `repeat(auto-fill, minmax(8rem, 1fr))`,
    }}
    sx={{
      display: "grid" as any,
      width: "100%",
    }}
  >
    {Object.values(Md3Icons)
      .filter((Component) => !!Component.displayName)
      .map((Component) => (
        <Component height={40} width={40} />
      ))}
  </Box>
)
