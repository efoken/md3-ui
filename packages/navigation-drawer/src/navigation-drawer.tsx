import { useAnimate, useLayout, useLocale } from "@md3-ui/hooks"
import { Modal, ModalProps } from "@md3-ui/modal"
import { OwnerStateProps, styled, SxProps, useThemeProps } from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  Platform,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

const Z_INDEX = 1300

export interface NavigationDrawerProps
  extends Omit<ModalProps, "as" | "children" | "open"> {
  /**
   * Side from which the drawer will appear.
   * @default "start"
   */
  anchor?: "start" | "end"
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open?: boolean
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: RNViewStyle
    modal?: RNViewStyle
    dock?: RNViewStyle
    surface?: RNViewStyle
  }
  /**
   * The system prop that allows defining system overrides as well as additional
   * styles.
   */
  sx?: SxProps
  /**
   * The variant to use.
   * @default "standard"
   */
  variant?: "standard" | "modal" | "dismissible"
}

export type NavigationDrawerStyleKey = keyof NonNullable<
  NavigationDrawerProps["styles"]
>

const NavigationDrawerRoot = styled(Modal, {
  name: "NavigationDrawer",
  slot: "Root",
})({
  zIndex: Z_INDEX,
})

const NavigationDrawerDockRoot = styled(RNView, {
  name: "NavigationDrawer",
  slot: "Dock",
})({
  flexShrink: 0,
  flexGrow: 0,
  flexBasis: "auto",
})

const NavigationDrawerSurface = styled(Animated.View, {
  name: "NavigationDrawer",
  slot: "Surface",
})<OwnerStateProps<Pick<NavigationDrawerProps, "anchor" | "variant">>>(
  ({ theme, ownerState }) => ({
    backgroundColor: theme.sys.color.surface,
    flexGrow: 1,
    height: "100%",
    maxWidth: "100%",
    padding: 12,
    position: "absolute",
    width: 360,
    zIndex: Z_INDEX,

    ...(Platform.OS === "web" && {
      // We disable the focus ring for mouse, touch and keyboard users.
      outlineWidth: 0,
      position: "fixed" as any,
    }),

    ...(ownerState.anchor === "start" && {
      borderBottomEndRadius: 16,
      borderTopEndRadius: 16,
      start: 0,
    }),

    ...(ownerState.anchor === "end" && {
      borderBottomStartRadius: 16,
      borderTopStartRadius: 16,
      end: 0,
    }),

    ...(ownerState.variant === "standard" && {
      ...theme.sys.elevation.level0,
    }),

    ...(ownerState.variant === "modal" && {
      ...theme.sys.elevation.level1,
    }),
  }),
)

export const NavigationDrawer = React.forwardRef<RNView, NavigationDrawerProps>(
  (inProps, ref) => {
    const {
      anchor = "start",
      children,
      hideScrim = false,
      onClose,
      open = false,
      style,
      styles,
      variant = "standard",
      ...props
    } = useThemeProps({
      name: "NavigationDrawer",
      props: inProps,
    })

    const { handleLayout, width: maxWidth } = useLayout()
    const width = maxWidth === 0 ? 360 : maxWidth

    const { direction } = useLocale()

    const [transform] = useAnimate({
      duration: 225,
      easing: Easing.bezier(0, 0, 0.2, 1),
      shouldReset: false,
      useNativeDriver: true,
      toValue: open ? 0 : 1,
    })

    const ownerState = {
      anchor,
      variant,
    }

    const surface = (
      <NavigationDrawerSurface
        ownerState={ownerState}
        style={[
          styles?.surface,
          {
            transform: [
              {
                translateX: transform.interpolate({
                  inputRange: [0, 1],
                  outputRange:
                    anchor === "start"
                      ? [0, direction === "rtl" ? width : -width]
                      : [0, direction === "rtl" ? -width : width],
                }),
              },
            ],
          },
        ]}
        onLayout={handleLayout}
      >
        {children}
      </NavigationDrawerSurface>
    )

    return variant === "modal" ? (
      <NavigationDrawerRoot
        ref={ref}
        aria-modal
        hideScrim={hideScrim}
        open={open}
        role="dialog"
        style={[style, styles?.root, styles?.modal]}
        onClose={onClose}
        {...props}
      >
        {surface}
      </NavigationDrawerRoot>
    ) : (
      <NavigationDrawerDockRoot
        ref={ref}
        style={[style, styles?.root, styles?.dock]}
        {...props}
      >
        {surface}
      </NavigationDrawerDockRoot>
    )
  },
)

if (__DEV__) {
  NavigationDrawer.displayName = "NavigationDrawer"
}
