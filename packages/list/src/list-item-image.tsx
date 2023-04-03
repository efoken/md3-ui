import {
  OverridableComponent,
  OverrideProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface ListItemImageTypeMap<
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

export type ListItemImageProps<
  C extends React.ElementType = ListItemImageTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ListItemImageTypeMap<P, C>, C>

export type ListItemImageStyleKey = keyof NonNullable<
  ListItemImageProps["styles"]
>

const ListItemImageRoot = styled(RNView, {
  name: "ListItemImage",
  slot: "Root",
})(({ theme }) => ({
  borderRadius: theme.comp.list.listItem.leadingImage.shape,
  height: theme.comp.list.listItem.leadingImage.height,
  // Min height is two-line height
  marginVertical:
    (theme.comp.list.listItem.twoLine.container.height -
      theme.comp.list.listItem.leadingImage.height) /
    2,
  width: theme.comp.list.listItem.leadingImage.width,
}))

export const ListItemImage = React.forwardRef<RNView, ListItemImageProps>(
  (inProps, ref) => {
    const { children, style, styles, ...props } = useThemeProps({
      name: "ListItemImage",
      props: inProps,
    })

    return (
      <ListItemImageRoot ref={ref} style={[style, styles?.root]} {...props}>
        {React.cloneElement(children, {
          style: {
            height: "100%",
            width: "100%",
          },
        })}
      </ListItemImageRoot>
    )
  },
) as OverridableComponent<ListItemImageTypeMap>

if (__DEV__) {
  ListItemImage.displayName = "ListItemImage"
}