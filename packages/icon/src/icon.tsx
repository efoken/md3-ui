import { useTextContext } from "@md3-ui/layout"
import { OwnerStateProps, styled, SxProps, useThemeProps } from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { Platform, ViewStyle as RNViewStyle } from "react-native"
import Svg, { SvgProps } from "react-native-svg"

export interface IconProps extends SvgProps {
  children?: React.ReactElement
  /** @default "currentColor" */
  color?: string
  /** @default "medium" */
  size?: "inherit" | "small" | "medium" | "large"
  styles?: {
    root?: RNViewStyle
  }
  sx?: SxProps
}

export type IconStyleKey = keyof NonNullable<IconProps["styles"]>

const IconRoot = styled(Svg, {
  name: "Icon",
  slot: "Root",
})<OwnerStateProps<Pick<IconProps, "height" | "size" | "width">>>(
  ({ ownerState }) =>
    ownerState.size === "small"
      ? { height: 12, width: 12 }
      : ownerState.size === "medium"
      ? { height: 18, width: 18 }
      : ownerState.size === "large"
      ? { height: 24, width: 24 }
      : undefined,
  ({ ownerState }) => ({
    flexShrink: 0,
    height: ownerState.height,
    width: ownerState.width,
  }),
)

export const Icon = React.forwardRef<any, IconProps>((inProps, ref) => {
  const {
    children,
    color = Platform.OS === "web" ? "currentColor" : undefined,
    height,
    size = "medium",
    style,
    styles,
    width,
    ...props
  } = useThemeProps({
    name: "Icon",
    props: inProps,
  })

  const { style: textStyle } = useTextContext()

  const ownerState = {
    height,
    size,
    width,
  }

  return (
    <IconRoot
      ref={ref}
      color={color}
      fill={color}
      ownerState={ownerState}
      style={[textStyle, style, styles?.root]}
      {...props}
    >
      {children}
    </IconRoot>
  )
})

if (__DEV__) {
  Icon.displayName = "Icon"
}
