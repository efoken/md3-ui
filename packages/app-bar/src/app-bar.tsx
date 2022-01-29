import { styled, SxProps, useThemeProps } from "@md3-ui/system"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface AppBarTypeMap<
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

export type AppBarProps<
  C extends React.ElementType = AppBarTypeMap["defaultAs"],
  P = {},
> = OverrideProps<AppBarTypeMap<P, C>, C>

const AppBarRoot = styled(RNView)(({ theme }) => ({
  ...theme.elevation.level0,
  backgroundColor: theme.color.surface,
  borderRadius: 0,
  minHeight: 64,
  justifyContent: "center",
  width: "100%",
}))

export const AppBar = React.forwardRef<RNView, AppBarProps>((inProps, ref) => {
  const { style, styles, ...props } = useThemeProps({
    name: "AppBar",
    props: inProps,
  })

  return <AppBarRoot ref={ref} style={[styles?.root, style]} {...props} />
}) as OverridableComponent<AppBarTypeMap>
