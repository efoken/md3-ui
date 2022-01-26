import { styled, SxProps, useThemeProps } from "@md3-ui/styles"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface ToolbarTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    children?: React.ReactNode
    styles?: {
      root?: RNViewStyle
    }
    sx?: SxProps
  }
  defaultAs: C
}

export type ToolbarProps<
  C extends React.ElementType = ToolbarTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ToolbarTypeMap<P, C>, C>

const ToolbarRoot = styled(RNView, {
  name: "Toolbar",
  slot: "Root",
})(({ theme }) => ({
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: theme.spacing(2),
}))

export const Toolbar = React.forwardRef<RNView, ToolbarProps>(
  (inProps, ref) => {
    const { style, styles, ...props } = useThemeProps({
      name: "Toolbar",
      props: inProps,
    })

    return <ToolbarRoot ref={ref} style={[styles?.root, style]} {...props} />
  },
) as OverridableComponent<ToolbarTypeMap>
