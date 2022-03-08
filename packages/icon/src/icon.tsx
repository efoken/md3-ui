import { useTextContext } from "@md3-ui/layout"
import { styled, SxProps, useThemeProps } from "@md3-ui/system"
import * as React from "react"
import { Platform, ViewStyle as RNViewStyle } from "react-native"
import Svg, { SvgProps } from "react-native-svg"

export interface IconProps extends SvgProps {
  children?: React.ReactElement
  /** @default "currentColor" */
  color?: string
  styles?: {
    root?: RNViewStyle
  }
  sx?: SxProps
}

export type IconStyleKey = keyof NonNullable<IconProps["styles"]>

const IconRoot = styled(Svg, {
  name: "Icon",
  slot: "Root",
})(() => ({
  flexShrink: 0,
  height: 24,
  width: 24,
}))

export const Icon = React.forwardRef<any, IconProps>((inProps, ref) => {
  const {
    children,
    color = Platform.OS === "web" ? "currentColor" : undefined,
    style,
    styles,
    ...props
  } = useThemeProps({
    name: "Icon",
    props: inProps,
  })

  const { style: textStyle } = useTextContext()

  return (
    <IconRoot
      ref={ref}
      color={color}
      style={[textStyle, style, styles?.root]}
      {...props}
    >
      {children}
    </IconRoot>
  )
})
