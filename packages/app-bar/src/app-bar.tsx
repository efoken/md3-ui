import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

const Z_INDEX = 1200

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
     * The positioning type. The behavior of the different options is described
     * in the [MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
     * @default "relative"
     */
    position?: "absolute" | "fixed" | "static" | "sticky" | "relative"
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

export type AppBarProps<
  C extends React.ElementType = AppBarTypeMap["defaultAs"],
  P = {},
> = OverrideProps<AppBarTypeMap<P, C>, C>

export type AppBarStyleKey = keyof NonNullable<AppBarProps["styles"]>

const AppBarRoot = styled(RNView, {
  name: "AppBar",
  slot: "Root",
})<OwnerStateProps<Pick<AppBarProps, "position">>>(({ theme, ownerState }) => ({
  ...theme.sys.elevation.level0,
  backgroundColor: theme.sys.color.surface,
  borderRadius: 0,
  minHeight: 64,
  justifyContent: "center",
  width: "100%",

  ...(ownerState.position === "absolute" && {
    left: "auto",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: Z_INDEX,
  }),

  ...(ownerState.position === "fixed" && {
    left: "auto",
    position: Platform.OS === "web" ? ("fixed" as any) : "absolute",
    right: 0,
    top: 0,
    zIndex: Z_INDEX,

    "@media print": {
      position: "absolute",
    },
  }),

  ...(ownerState.position === "static" && {
    position: Platform.OS === "web" ? ("static" as any) : "relative",
  }),

  ...(ownerState.position === "sticky" && {
    left: "auto",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: Z_INDEX,
  }),

  ...(ownerState.position === "relative" && {
    position: "relative",
  }),
}))

export const AppBar = React.forwardRef<RNView, AppBarProps>((inProps, ref) => {
  const {
    position = "relative",
    style,
    styles,
    ...props
  } = useThemeProps({
    name: "AppBar",
    props: inProps,
  })

  const ownerState = {
    position,
  }

  return (
    <AppBarRoot
      ref={ref}
      ownerState={ownerState}
      style={[style, styles?.root]}
      {...props}
    />
  )
}) as OverridableComponent<AppBarTypeMap>

if (__DEV__) {
  AppBar.displayName = "AppBar"
}
