import { OwnerStateProps, styled, useThemeProps } from "@md3-ui/styles"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"
import { ButtonBase, ButtonBaseProps } from "./button-base"

export interface IconButtonProps extends ButtonBaseProps {
  children: React.ReactElement
  edge?: "start" | "end"
  styles?: {
    root?: RNViewStyle
  }
}

export type IconButtonStyleKey = keyof NonNullable<IconButtonProps["styles"]>

const IconButtonRoot = styled(ButtonBase, {
  name: "IconButton",
  slot: "Root",
})<OwnerStateProps<Pick<IconButtonProps, "edge">>>(({ theme, ownerState }) => ({
  alignItems: "center",
  height: 48,
  justifyContent: "center",
  marginLeft: ownerState.edge === "start" ? -theme.spacing(1.5) : undefined,
  marginRight: ownerState.edge === "end" ? -theme.spacing(1.5) : undefined,
  width: 48,
}))

export const IconButton = React.forwardRef<RNView, IconButtonProps>(
  (inProps, ref) => {
    const { children, edge, style, styles, ...props } = useThemeProps({
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
          size: 24,
        })}
      </IconButtonRoot>
    )
  },
)
