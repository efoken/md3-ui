import { useEventCallback, useForkRef } from "@md3-ui/hooks"
import {
  OwnerStateProps,
  StyleSheet,
  StylesProp,
  SxProps,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__, isHTMLElement, splitProps } from "@md3-ui/utils"
import * as React from "react"
import {
  NativeSyntheticEvent,
  Platform,
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  View as RNView,
  ViewStyle as RNViewStyle,
  StyleProp,
  TargetedEvent,
} from "react-native"

export interface ButtonBaseProps
  extends Omit<RNPressableProps, "children" | "disabled" | "style"> {
  /**
   * If `true`, the ripples are centered. They won't start at the cursor
   * interaction position.
   * @default false
   */
  centerRipple?: boolean
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple?: boolean
  /** @ignore */
  focusColor?: string
  /** @ignore */
  focusOpacity?: number
  /** @ignore */
  hoverColor?: string
  /** @ignore */
  hoverOpacity?: number
  /**
   * Callback fired when the component is focused with a keyboard. We also
   * trigger an `onFocus` callback.
   */
  onFocusVisible?: (event: NativeSyntheticEvent<TargetedEvent>) => void
  /** @ignore */
  pressedColor?: string
  /** @ignore */
  pressedOpacity?: number
  /** @ignore */
  rippleColor?: string
  /** @ignore */
  style?: StyleProp<RNViewStyle>
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: StylesProp<{
    root?: RNViewStyle
    container?: RNViewStyle
  }>
  /**
   * The system prop that allows defining system overrides as well as
   * additional styles.
   */
  sx?: SxProps
}

export type ButtonBaseStyleKey = keyof NonNullable<ButtonBaseProps["styles"]>

type ButtonBaseOwnerState = Required<
  Pick<
    ButtonBaseProps,
    "disabled" | "hoverOpacity" | "pressedColor" | "pressedOpacity"
  >
>

const ButtonBaseRoot = styled(RNPressable, {
  name: "ButtonBase",
  slot: "Root",
})<OwnerStateProps<ButtonBaseOwnerState>>(({ theme, ownerState }) => ({
  cursor: ownerState.disabled ? "default" : "pointer",
  outlineWidth: 0,
  pointerEvents: ownerState.disabled ? "none" : undefined,
  userSelect: "none",

  ...(Platform.OS === "web" && {
    transition: theme.sys.motion.create("box-shadow", {
      duration: 200,
      easing: "linear",
    }),
  }),
}))

const ButtonBaseContainer = styled(RNView, {
  name: "ButtonBase",
  slot: "Container",
  skipSx: true,
})({
  backgroundColor: "transparent",
  overflow: "hidden",
})

const ButtonBaseHover = styled("span", {
  name: "ButtonBase",
  slot: "Hover",
  skipSx: true,
})(({ theme }) => ({
  borderRadius: "inherit" as any,
  bottom: 0,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  transition: theme.sys.motion.create(["background-color", "opacity"], {
    duration: 200,
    easing: "linear",
  }),
  zIndex: -1,
}))

const ButtonBaseRippleContainer = styled("span", {
  name: "ButtonBase",
  slot: "RippleContainer",
  skipSx: true,
})({
  borderRadius: "inherit" as any,
  bottom: 0,
  left: 0,
  overflow: "hidden",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 0,
})

const ButtonBaseRipple = styled("span", {
  name: "ButtonBase",
  slot: "Ripple",
  skipSx: true,
})<OwnerStateProps<ButtonBaseOwnerState>>(({ ownerState, theme }) => ({
  animationDuration: "550ms",
  animationFillMode: "forwards",
  animationKeyframes: {
    "0%": {
      opacity: 1,
      transform: "scale(0)",
    },
    "100%": {
      opacity: 0,
      transform: "scale(1)",
    },
  },
  animationTimingFunction: "ease-in",
  backgroundColor: theme.utils.rgba(
    ownerState.pressedColor,
    ownerState.pressedOpacity - ownerState.hoverOpacity,
  ),
  borderRadius: theme.sys.shape.corner.full,
  pointerEvents: "none",
  position: "absolute",
  zIndex: -1,
}))

export const ButtonBase = React.forwardRef<RNView, ButtonBaseProps>(
  (inProps, ref) => {
    const {
      centerRipple = false,
      children,
      disabled = false,
      disableRipple = false,
      focusColor: focusColorProp,
      focusOpacity = 0.12,
      hoverColor: hoverColorProp,
      hoverOpacity = 0.08,
      href,
      onBlur,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onPress,
      pressedColor: pressedColorProp,
      pressedOpacity = 0.12,
      rippleColor,
      style,
      styles,
      ...props
    } = useThemeProps({ name: "ButtonBase", props: inProps })

    const theme = useTheme()

    const rootRef = React.useRef<RNView>(null)
    const handleRef = useForkRef(rootRef, ref)

    const [focusVisible, setFocusVisible] = React.useState(false)

    if (disabled && focusVisible) {
      setFocusVisible(false)
    }

    const [ripples, setRipples] = React.useState<
      { id: number; ripple: React.ReactElement }[]
    >([])

    const [{ backgroundColor = null, ...containerStyle } = {}] = splitProps(
      StyleSheet.flatten(style),
      [
        "backgroundColor",
        "borderRadius",
        "bottom",
        "flexBasis",
        "flexGrow",
        "flexShrink",
        "height",
        "left",
        "margin",
        "marginBottom",
        "marginEnd",
        "marginHorizontal",
        "marginLeft",
        "marginRight",
        "marginStart",
        "marginTop",
        "marginVertical",
        "position",
        "right",
        "top",
        "width",
      ],
    )

    const hoverColor =
      rippleColor ?? hoverColorProp ?? theme.sys.color.background
    const focusColor = rippleColor ?? focusColorProp ?? hoverColor
    const pressedColor =
      rippleColor ?? pressedColorProp ?? theme.sys.color.background

    const underlayColor =
      // When button has no background color, simply use `rippleColor` as is
      backgroundColor == null
        ? theme.utils.rgba(pressedColor, pressedOpacity)
        : // Otherwise we mix the `rippleColor` with the background color
          theme.utils.mix(
            pressedOpacity,
            backgroundColor.toString(),
            pressedColor,
          )

    const removeRipple = (rippleId: number) => () => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== rippleId))
    }

    const appendRipple = React.useCallback(
      (event: TouchEvent | MouseEvent | {} = {}) => {
        const currentRef = rootRef.current as HTMLDivElement | null

        if (disabled || disableRipple || currentRef == null) {
          return
        }

        const { width, height, left, top } = currentRef.getBoundingClientRect()

        // Get the size of the ripple
        let rippleX: number
        let rippleY: number
        let rippleSize: number

        if (
          centerRipple ||
          (!("clientX" in event) && !("touches" in event)) ||
          ("clientX" in event && event?.clientX === 0 && event?.clientY === 0)
        ) {
          rippleX = Math.round(width / 2)
          rippleY = Math.round(height / 2)
        } else {
          const { clientX, clientY } =
            "touches" in event ? event.touches[0] : event
          rippleX = Math.round(clientX - left)
          rippleY = Math.round(clientY - top)
        }

        if (centerRipple) {
          rippleSize = Math.sqrt((2 * width ** 2 + height ** 2) / 3)
        } else {
          const sizeX =
            Math.max(Math.abs(currentRef.clientWidth - rippleX), rippleX) * 2 +
            2
          const sizeY =
            Math.max(Math.abs(currentRef.clientHeight - rippleY), rippleY) * 2 +
            2
          rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2)
        }

        const rippleId =
          ripples.length === 0 ? 1 : ripples[ripples.length - 1].id + 1

        const ripple = (
          <ButtonBaseRipple
            key={rippleId}
            ownerState={{
              disabled,
              hoverOpacity,
              pressedColor,
              pressedOpacity,
            }}
            style={{
              height: rippleSize,
              left: -(rippleSize / 2) + rippleX,
              top: -(rippleSize / 2) + rippleY,
              width: rippleSize,
            }}
            onAnimationEnd={removeRipple(rippleId)}
          />
        )

        setRipples((prevRipples) => [...prevRipples, { id: rippleId, ripple }])
      },
      [
        rootRef,
        disabled,
        disableRipple,
        centerRipple,
        ripples,
        pressedColor,
        pressedOpacity,
        hoverOpacity,
      ],
    )

    const handleBlur = useEventCallback(
      (event: NativeSyntheticEvent<TargetedEvent>) => {
        setFocusVisible(false)
        onBlur?.(event)
      },
    )

    const handleFocus = useEventCallback(
      (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (rootRef.current == null) {
          // @ts-expect-error: fix for https://github.com/facebook/react/issues/7769
          rootRef.current = event.currentTarget
        }

        if (
          Platform.OS !== "web" ||
          (event.target as unknown as Element).matches(":focus-visible")
        ) {
          setFocusVisible(true)
          onFocusVisible?.(event)
        }

        onFocus?.(event)
      },
    )

    const isNonNativeButton = () => {
      const buttonEl = rootRef.current as HTMLElement | null
      return (
        buttonEl?.tagName !== "BUTTON" &&
        !(buttonEl?.tagName === "A" && (buttonEl as HTMLAnchorElement).href)
      )
    }

    const handleKeyDown = useEventCallback((event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        appendRipple()
      }

      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === " "
      ) {
        event.preventDefault()
      }

      onKeyDown?.(event)

      // Keyboard accessibility for non interactive elements
      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === "Enter" &&
        !disabled
      ) {
        event.preventDefault()
        onPress?.(event as any)
      }
    })

    const handleKeyUp = useEventCallback((event: React.KeyboardEvent) => {
      onKeyUp?.(event)

      // Keyboard accessibility for non interactive elements
      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === " " &&
        !event.defaultPrevented
      ) {
        onPress?.(event as any)
      }
    })

    const handlePressOut = () => {
      setFocusVisible(false)
    }

    React.useEffect(() => {
      const currentRef = rootRef.current

      if (isHTMLElement<HTMLDivElement>(currentRef)) {
        currentRef.addEventListener("mousedown", appendRipple)
        currentRef.addEventListener("touchstart", appendRipple)

        return () => {
          currentRef.removeEventListener("mousedown", appendRipple)
          currentRef.removeEventListener("touchend", appendRipple)
        }
      }

      return () => {}
    }, [appendRipple, handleKeyDown, rootRef])

    const ownerState = {
      disabled,
      hoverOpacity,
      pressedColor,
      pressedOpacity,
    }

    const button = (
      <ButtonBaseRoot
        ref={handleRef}
        android_ripple={
          disableRipple
            ? {}
            : {
                borderless: true,
                color: theme.utils.rgba(pressedColor, pressedOpacity),
              }
        }
        aria-disabled={disabled}
        disabled={disabled}
        href={href}
        ownerState={ownerState}
        role={href ? undefined : "button"}
        {...(Platform.OS === "web" && {
          style: [style, styles?.root],
        })}
        {...(Platform.OS === "android" && {
          // For Android we need a wrapping View to cut off the ripple effect.
          // Because of this View and when the button should have
          // `position: absolute`, we need to apply it to the wrapper View and
          // override it here to have `position: relative` with 0px inset.
          style: [
            style,
            styles?.root,
            {
              bottom: 0,
              left: 0,
              marginBottom: 0,
              marginEnd: 0,
              marginLeft: 0,
              marginRight: 0,
              marginStart: 0,
              marginTop: 0,
              position: "relative",
              right: 0,
              top: 0,
            },
          ],
        })}
        {...(Platform.OS === "ios" && {
          style: ({ pressed }) => [
            style,
            styles?.root,
            pressed && !disableRipple && { backgroundColor: underlayColor },
          ],
        })}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onPress={onPress}
        onPressOut={handlePressOut}
        {...props}
      >
        {({ hovered, focused }) => (
          <>
            {React.Children.only(children)}
            {Platform.OS === "web" && (
              <ButtonBaseHover
                style={{
                  backgroundColor:
                    focused && focusVisible ? focusColor : hoverColor,
                  opacity:
                    focused && focusVisible
                      ? focusOpacity
                      : hovered
                      ? hoverOpacity
                      : 0,
                }}
              />
            )}
            {Platform.OS === "web" && !disableRipple && (
              <ButtonBaseRippleContainer>
                {ripples.map(({ ripple }) => ripple)}
              </ButtonBaseRippleContainer>
            )}
          </>
        )}
      </ButtonBaseRoot>
    )

    return Platform.OS === "android" ? (
      <ButtonBaseContainer style={[containerStyle, styles?.container]}>
        {button}
      </ButtonBaseContainer>
    ) : (
      button
    )
  },
)

if (__DEV__) {
  ButtonBase.displayName = "ButtonBase"
}
