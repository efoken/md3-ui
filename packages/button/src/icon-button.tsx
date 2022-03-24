import { OwnerStateProps, styled, SxProps, useThemeProps } from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"

export interface IconButtonProps extends ButtonBaseProps {
  /**
   * The icon to display.
   */
  children: React.ReactElement
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon with
   * content above or below, without ruining the border size and shape).
   */
  edge?: "start" | "end" | false
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: RNViewStyle
  }
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type IconButtonStyleKey = keyof NonNullable<IconButtonProps["styles"]>

const IconButtonRoot = styled(ButtonBase, {
  name: "IconButton",
  slot: "Root",
})<OwnerStateProps<Pick<IconButtonProps, "edge">>>(({ theme, ownerState }) => ({
  alignItems: "center",
  height: 48,
  justifyContent: "center",
  marginEnd: ownerState.edge === "end" ? -theme.spacing(1.5) : undefined,
  marginStart: ownerState.edge === "start" ? -theme.spacing(1.5) : undefined,
  width: 48,
}))

export const IconButton = React.forwardRef<RNView, IconButtonProps>(
  (inProps, ref) => {
    const {
      children,
      edge = false,
      style,
      styles,
      ...props
    } = useThemeProps({
      name: "IconButton",
      props: inProps,
    })

    const ownerState = {
      edge,
    }

    return (
      <IconButtonRoot
        ref={ref}
        style={[style, styles?.root]}
        ownerState={ownerState}
        {...props}
      >
        {React.cloneElement(children, {
          height: 24,
          width: 24,
        })}
      </IconButtonRoot>
    )
  },
)

if (__DEV__) {
  IconButton.displayName = "IconButton"
}
