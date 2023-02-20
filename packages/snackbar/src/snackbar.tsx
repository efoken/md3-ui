import {
  OverridableComponent,
  OverrideProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { SnackbarContent } from "./snackbar-content"

const Z_INDEX = 1400

export interface SnackbarTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The action to display. It renders after the message, at the end of the
     * snackbar.
     */
    action?: React.ReactNode
    /**
     * The message to display.
     */
    message?: string
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
      content?: RNTextStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type SnackbarProps<
  C extends React.ElementType = SnackbarTypeMap["defaultAs"],
  P = {},
> = OverrideProps<SnackbarTypeMap<P, C>, C>

export type SnackbarStyleKey = keyof NonNullable<SnackbarProps["styles"]>

const SnackbarRoot = styled(RNView, {
  name: "Snackbar",
  slot: "Root",
})(({ theme }) => ({
  alignItems: "center",
  bottom: 8,
  flexDirection: "row",
  justifyContent: "flex-start",
  left: 8,
  position: Platform.OS === "web" ? ("fixed" as any) : "absolute",
  right: 8,
  zIndex: Z_INDEX,

  [theme.breakpoints.up("medium")]: {
    bottom: 24,
    left: 24,
    right: "auto",
  },
}))

export const Snackbar = React.forwardRef<RNView, SnackbarProps>(
  (inProps, ref) => {
    const { action, message, style, styles, ...props } = useThemeProps({
      name: "Snackbar",
      props: inProps,
    })

    return (
      <SnackbarRoot
        ref={ref}
        role="presentation"
        style={[style, styles?.root]}
        {...props}
      >
        <SnackbarContent
          action={action}
          message={message}
          style={styles?.content}
        />
      </SnackbarRoot>
    )
  },
) as OverridableComponent<SnackbarTypeMap>

if (__DEV__) {
  Snackbar.displayName = "Snackbar"
}
