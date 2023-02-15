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

export interface ListItemTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    dense?: boolean
    disableGutter?: boolean
    disablePadding?: boolean
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

export type ListItemProps<
  C extends React.ElementType = ListItemTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ListItemTypeMap<P, C>, C>

export type ListItemStyleKey = keyof NonNullable<ListItemProps["styles"]>

const ListItemRoot = styled(RNView, {
  name: "ListItem",
  slot: "Root",
})(({ theme }) => ({
  backgroundColor: theme.sys.color.surface,
  borderRadius: theme.sys.shape.corner.none,
  width: "100%",
}))

export const ListItem = React.forwardRef<RNView, ListItemProps>(
  (inProps, ref) => {
    const { children, style, styles, ...props } = useThemeProps({
      name: "ListItem",
      props: inProps,
    })

    return (
      <ListItemRoot
        ref={ref}
        role="listitem"
        style={[style, styles?.root]}
        {...props}
      >
        {children}
      </ListItemRoot>
    )
  },
) as OverridableComponent<ListItemTypeMap>

if (__DEV__) {
  ListItem.displayName = "ListItem"
}
