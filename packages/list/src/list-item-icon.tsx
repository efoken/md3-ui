import {
  OverridableComponent,
  OverrideProps,
  styled,
  StyleSheet,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface ListItemIconTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children: React.ReactElement
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

export type ListItemIconProps<
  C extends React.ElementType = ListItemIconTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ListItemIconTypeMap<P, C>, C>

export type ListItemIconStyleKey = keyof NonNullable<
  ListItemIconProps["styles"]
>

const ListItemIconRoot = styled(RNView, {
  name: "ListItemIcon",
  slot: "Root",
})()

export const ListItemIcon = React.forwardRef<RNView, ListItemIconProps>(
  (inProps, ref) => {
    const { children, style, styles, ...props } = useThemeProps({
      name: "ListItemIcon",
      props: inProps,
    })

    const { height, width } = StyleSheet.flatten([style, styles?.root])

    return (
      <ListItemIconRoot ref={ref} style={[style, styles?.root]} {...props}>
        {React.cloneElement(children, {
          height,
          width,
        })}
      </ListItemIconRoot>
    )
  },
) as OverridableComponent<ListItemIconTypeMap>

ListItemIcon.displayName = "ListItemIcon"
