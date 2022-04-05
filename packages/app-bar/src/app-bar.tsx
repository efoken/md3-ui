import {
  OverridableComponent,
  OverrideProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface AppBarTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
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
  defaultAs: C
}

export type AppBarProps<
  C extends React.ElementType = AppBarTypeMap["defaultAs"],
  P = {},
> = OverrideProps<AppBarTypeMap<P, C>, C>

export type AppBarStyleKey = keyof NonNullable<AppBarProps["styles"]>

const AppBarRoot = styled(RNView, {
  name: "AppBar",
  slot: "Root",
})(({ theme }) => ({
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

  return <AppBarRoot ref={ref} style={[style, styles?.root]} {...props} />
}) as OverridableComponent<AppBarTypeMap>

if (__DEV__) {
  AppBar.displayName = "AppBar"
}
