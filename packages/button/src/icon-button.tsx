import { styled, useThemeProps } from "@md3-ui/styles"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"

export interface IconButtonProps extends ButtonBaseProps {
  children: React.ReactElement
  styles?: {
    root?: RNViewStyle
  }
}

export type IconButtonStyleKey = keyof NonNullable<IconButtonProps["styles"]>

const IconButtonRoot = styled(ButtonBase, {
  name: "IconButton",
  slot: "Root",
})({
  alignItems: "center",
  height: 48,
  justifyContent: "center",
  width: 48,
})

export const IconButton = React.forwardRef<RNView, IconButtonProps>(
  (inProps, ref) => {
    const { children, style, styles, ...props } = useThemeProps({
      name: "IconButton",
      props: inProps,
    })

    return (
      <IconButtonRoot ref={ref} style={[style, styles?.root]} {...props}>
        {React.cloneElement(children, {
          size: 24,
        })}
      </IconButtonRoot>
    )
  },
)
