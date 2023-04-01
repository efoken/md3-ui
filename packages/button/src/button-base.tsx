import { useEventCallback, useForkRef } from "@md3-ui/hooks"
import {
  OwnerStateProps,
  Pressable,
  StyleSheet,
  StylesProp,
  SxProps,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import {
  __DEV__,
  getOwnerWindow,
  isFunction,
  isHTMLElement,
  splitProps,
} from "@md3-ui/utils"
import * as React from "react"
import {
  NativeSyntheticEvent,
  Platform,
  PressableProps as RNPressableProps,
  PressableStateCallbackType as RNPressableStateCallbackType,
  View as RNView,
  ViewStyle as RNViewStyle,
  StyleProp,
  TargetedEvent,
} from "react-native"

const RIPPLE_INITIAL_ORIGIN_SCALE = 0.2
const RIPPLE_PADDING = 10
const SOFT_EDGE_MINIMUM_SIZE = 75
const SOFT_EDGE_CONTAINER_RATIO = 0.35

export interface ButtonBaseStateCallbackType
  extends RNPressableStateCallbackType {
  readonly focused: boolean
  readonly focusVisible: boolean
  readonly hovered: boolean
}

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
  children?:
    | React.ReactNode
    | ((state: ButtonBaseStateCallbackType) => React.ReactNode)
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
  /** @ignore */
  surfaceTintColor?: string
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

const ButtonBaseRoot = styled(Pressable, {
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
})<
  OwnerStateProps<
    ButtonBaseOwnerState & {
      endPoint: any
      rippleScale: number
      startPoint: any
    }
  >
>(({ ownerState, theme }) => ({
  animationDuration: "550ms",
  animationFillMode: "forwards",
  animationKeyframes: {
    "0%": {
      opacity: 1,
      transform: `translateX(${ownerState.startPoint.x}px) translateY(${ownerState.startPoint.y}px) scale(1)`,
    },
    "100%": {
      opacity: 0,
      transform: `translateX(${ownerState.endPoint.x}px) translateY(${ownerState.endPoint.y}px) scale(${ownerState.rippleScale})`,
    },
  },
  animationTimingFunction: "ease-in",
  backgroundImage: `radial-gradient(closest-side, ${theme.utils.rgba(
    ownerState.pressedColor,
    ownerState.pressedOpacity,
  )}, max(calc(100% - 70px), 65%), transparent 100%)`,
  borderRadius: theme.sys.shape.corner.full,
  left: 0,
  pointerEvents: "none",
  position: "absolute",
  top: 0,
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

    const [{ backgroundColor = null, ...containerStyle }] = splitProps(
      StyleSheet.flatten([style, styles?.root]),
      [
        "backgroundColor",
        "borderRadius",
        "overflow",
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

    const determineRippleSize = () => {
      const currentRef = rootRef.current as unknown as HTMLDivElement

      const { width, height } = currentRef.getBoundingClientRect()
      const maxSize = Math.max(height, width)
      const softEdgeSize = Math.max(
        SOFT_EDGE_CONTAINER_RATIO * maxSize,
        SOFT_EDGE_MINIMUM_SIZE,
      )

      const initialSize = Math.floor(maxSize * RIPPLE_INITIAL_ORIGIN_SCALE)

      const hypotenuse = Math.sqrt(width ** 2 + height ** 2)
      const maxRadius = hypotenuse + RIPPLE_PADDING

      return {
        initialSize,
        rippleScale: (maxRadius + softEdgeSize) / initialSize,
        rippleSize: initialSize,
      }
    }

    const getNormalizedPointerEventCoords = (event: PointerEvent) => {
      const currentRef = rootRef.current as unknown as HTMLDivElement

      const { scrollX, scrollY } = getOwnerWindow(currentRef)
      const { left, top } = currentRef.getBoundingClientRect()
      const documentX = scrollX + left
      const documentY = scrollY + top

      return { x: event.pageX - documentX, y: event.pageY - documentY }
    }

    const getTranslationCoordinates = React.useCallback(
      (event: Event | undefined, initialSize: number) => {
        const currentRef = rootRef.current as unknown as HTMLDivElement

        const { height, width } = currentRef.getBoundingClientRect()
        // End in the center
        const endPoint = {
          x: (width - initialSize) / 2,
          y: (height - initialSize) / 2,
        }

        let startPoint =
          event instanceof PointerEvent && !centerRipple
            ? getNormalizedPointerEventCoords(event)
            : {
                x: width / 2,
                y: height / 2,
              }

        // Center around start point
        startPoint = {
          x: startPoint.x - initialSize / 2,
          y: startPoint.y - initialSize / 2,
        }

        return { startPoint, endPoint }
      },
      [centerRipple],
    )

    const removeRipple = (rippleId: number) => () => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== rippleId))
    }

    const appendRipple = React.useCallback(
      (event?: PointerEvent) => {
        const currentRef = rootRef.current as HTMLDivElement | null

        if (disabled || disableRipple || currentRef == null) {
          return
        }

        const { initialSize, rippleScale, rippleSize } = determineRippleSize()
        const { endPoint, startPoint } = getTranslationCoordinates(
          event,
          initialSize,
        )

        const rippleId =
          ripples.length === 0 ? 1 : ripples[ripples.length - 1].id + 1

        const ripple = (
          <ButtonBaseRipple
            key={rippleId}
            ownerState={{
              disabled,
              endPoint,
              hoverOpacity,
              pressedColor,
              pressedOpacity,
              rippleScale,
              startPoint,
            }}
            style={{
              height: rippleSize,
              width: rippleSize,
            }}
            onAnimationEnd={removeRipple(rippleId)}
          />
        )

        setRipples((prevRipples) => [...prevRipples, { id: rippleId, ripple }])
      },
      [
        disabled,
        disableRipple,
        getTranslationCoordinates,
        hoverOpacity,
        pressedColor,
        pressedOpacity,
        ripples,
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

    const handlePressOut = useEventCallback(() => {
      setFocusVisible(false)
    })

    React.useEffect(() => {
      const currentRef = rootRef.current

      if (isHTMLElement<HTMLDivElement>(currentRef)) {
        currentRef.addEventListener("pointerdown", appendRipple)

        return () => {
          currentRef.removeEventListener("pointerdown", appendRipple)
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
        style={({ pressed }) => [
          style,
          styles?.root,
          // For Android we need a wrapping View to cut off the ripple effect.
          // Because of this View and when the button should have
          // `position: absolute`, we need to apply it to the wrapper View and
          // override it here to have `position: relative` with 0px inset.
          Platform.OS === "android" && {
            bottom: 0,
            left: 0,
            marginBottom: 0,
            marginEnd: 0,
            marginLeft: 0,
            marginRight: 0,
            marginStart: 0,
            marginTop: 0,
            overflow: "visible",
            position: "relative",
            right: 0,
            top: 0,
          },
          Platform.OS === "ios" &&
            pressed &&
            !disableRipple && { backgroundColor: underlayColor },
        ]}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onPress={onPress}
        onPressOut={handlePressOut}
        {...props}
      >
        {({ focused, hovered, ...state }) => (
          <>
            {isFunction(children)
              ? children({ ...state, focused, focusVisible, hovered })
              : children}
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
