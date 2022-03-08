import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { Icon, IconProps } from "./icon"

interface CreateIconOptions {
  defaultProps?: IconProps
  displayName?: string
  path: React.ReactElement
  viewBox?: string
}

export function createIcon({
  defaultProps = {},
  displayName,
  path,
  viewBox = "0 0 24 24",
}: CreateIconOptions) {
  const Component = React.forwardRef<any, IconProps>((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
      {path}
    </Icon>
  ))

  if (__DEV__) {
    Component.displayName = displayName
  }

  return Component
}
