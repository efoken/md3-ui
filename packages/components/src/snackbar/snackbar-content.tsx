import {
  OverridableComponent,
  OverrideProps,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { forwardRef } from "react"
import {
  Text as RNText,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
  Role,
} from "react-native"

export interface SnackbarContentTypeMap<
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
    message?: React.ReactNode
    /**
     * The ARIA role attribute of the element.
     */
    role?: Role
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNViewStyle
      text?: RNTextStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type SnackbarContentProps<
  C extends React.ElementType = SnackbarContentTypeMap["defaultAs"],
  P = {},
> = OverrideProps<SnackbarContentTypeMap<P, C>, C>

export type SnackbarContentStyleKey = keyof NonNullable<
  SnackbarContentProps["styles"]
>

const SnackbarContentRoot = styled(RNView, {
  name: "SnackbarContent",
  slot: "Root",
})(({ theme }) => ({
  ...theme.sys.elevation.level3,
  backgroundColor: theme.sys.color.inverseSurface,
  borderRadius: theme.sys.shape.corner.extraSmall,
  flexDirection: "row",
  flexGrow: 1,
  flexWrap: "wrap",
  minHeight: 48,
  paddingHorizontal: 16,
  paddingVertical: 4,

  [theme.breakpoints.up("medium")]: {
    flexGrow: 0,
    minWidth: 288,
  },
}))

const SnackbarContentText = styled(RNText, {
  name: "SnackbarContent",
  slot: "Text",
})(({ theme }) => ({
  ...theme.sys.typescale.bodyMedium,
  color: theme.sys.color.inverseOnSurface,
  paddingVertical: 10,
}))

const SnackbarContentAction = styled(RNView, {
  name: "SnackbarContent",
  slot: "Action",
})({
  marginEnd: -8,
  marginStart: "auto",
  paddingStart: 16,
})

export const SnackbarContent = forwardRef<RNView, SnackbarContentProps>(
  (inProps, ref) => {
    const {
      action,
      message,
      role = "alert",
      style,
      styles,
      ...props
    } = useThemeProps({
      name: "SnackbarContent",
      props: inProps,
    })

    return (
      <SnackbarContentRoot
        ref={ref}
        role={role}
        style={[style, styles?.root]}
        {...props}
      >
        <SnackbarContentText style={styles?.text}>
          {message}
        </SnackbarContentText>
        {action && <SnackbarContentAction>{action}</SnackbarContentAction>}
      </SnackbarContentRoot>
    )
  },
) as OverridableComponent<SnackbarContentTypeMap>

SnackbarContent.displayName = "SnackbarContent"
