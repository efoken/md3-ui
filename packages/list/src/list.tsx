import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface ListTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * If `true`, vertical padding is removed from the list.
     * @default false
     */
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

export type ListProps<
  C extends React.ElementType = ListTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ListTypeMap<P, C>, C>

export type ListStyleKey = keyof NonNullable<ListProps["styles"]>

const ListRoot = styled(RNView, {
  name: "List",
  slot: "Root",
})<OwnerStateProps<Pick<ListProps, "disablePadding">>>(({ ownerState }) => ({
  ...(!ownerState.disablePadding && {
    paddingVertical: 8,
  }),
}))

export const List = React.forwardRef<RNView, ListProps>((inProps, ref) => {
  const {
    children,
    disablePadding = false,
    style,
    styles,
    ...props
  } = useThemeProps({
    name: "List",
    props: inProps,
  })

  const ownerState = {
    disablePadding,
  }

  return (
    <ListRoot
      ref={ref}
      ownerState={ownerState}
      role="list"
      style={[style, styles?.root]}
      {...props}
    >
      {children}
    </ListRoot>
  )
}) as OverridableComponent<ListTypeMap>

if (__DEV__) {
  List.displayName = "List"
}
