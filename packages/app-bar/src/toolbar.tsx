import {
  OverridableComponent,
  OverrideProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface ToolbarTypeMap<
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
    styles?: StylesProp<{
      root?: RNViewStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type ToolbarProps<
  C extends React.ElementType = ToolbarTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ToolbarTypeMap<P, C>, C>

export type ToolbarStyleKey = keyof NonNullable<ToolbarProps["styles"]>

const ToolbarRoot = styled(RNView, {
  name: "Toolbar",
  slot: "Root",
})({
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: 16,
})

export const Toolbar = React.forwardRef<RNView, ToolbarProps>(
  (inProps, ref) => {
    const { style, styles, ...props } = useThemeProps({
      name: "Toolbar",
      props: inProps,
    })

    return <ToolbarRoot ref={ref} style={[style, styles?.root]} {...props} />
  },
) as OverridableComponent<ToolbarTypeMap>

Toolbar.displayName = "Toolbar"
