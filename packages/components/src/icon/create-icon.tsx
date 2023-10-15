import { forwardRef } from "react"
import { Icon, IconProps } from "./icon"

export interface CreateIconOptions {
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
  const Component = forwardRef<any, any>((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
      {path}
    </Icon>
  ))

  Component.displayName = displayName

  return Component
}
