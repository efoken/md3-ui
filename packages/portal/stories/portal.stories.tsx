import { Meta, Story } from "@storybook/react"
import * as React from "react"
import { Portal, PortalProps } from "../src"

export default {
  title: "Utils/Portal",
  component: Portal,
} as Meta<PortalProps>

export const Basic: Story = () => (
  <>
    <p>Welcome</p>
    <Portal>This text has been portaled</Portal>
  </>
)

export const WithMountRef: Story = () => {
  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <p>Welcome</p>
      <Portal containerRef={ref}>
        <span>This text has been portaled</span>
      </Portal>
      <div id="iframe" ref={ref}>
        Portal Div
      </div>
    </>
  )
}
