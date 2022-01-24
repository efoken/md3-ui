import { useForkRef } from "@md3-ui/hooks"
import {
  Global,
  styled,
  useTheme,
  StyleSheet,
  useThemeProps,
} from "@md3-ui/styles"
import { splitProps } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native"

export type ButtonBaseProps = Omit<
  PressableProps,
  "children" | "disabled" | "style"
> & {
  centerRipple?: boolean
  children?: React.ReactNode
  disabled?: boolean
  disableHover?: boolean
  disableRipple?: boolean
  hoverColor?: string
  hoverOpacity?: number
  pressedColor?: string
  pressedOpacity?: number
  pressedStyle?: StyleProp<ViewStyle>
  rippleSize?: number
  style?: StyleProp<ViewStyle>
}

const ButtonBaseContainer = styled(View, {
  name: "ButtonBase",
  slot: "Container",
})({
  backgroundColor: "rgba(255, 255, 255, 0)",
  overflow: "hidden",
})

export const ButtonBase = React.forwardRef<View, ButtonBaseProps>(
  (inProps, ref) => {
    const {
      centerRipple = false,
      children,
      disabled = false,
      disableHover = false,
      disableRipple = false,
      hoverColor: hoverColorProp,
      hoverOpacity = 0.08,
      onKeyDown,
      onKeyUp,
      onPress,
      pressedColor: pressedColorProp,
      pressedOpacity = 0.12,
      pressedStyle,
      rippleSize: rippleSizeProp = 100,
      style,
      ...props
    } = useThemeProps({ name: "ButtonBase", props: inProps })

    const theme = useTheme()

    const rootRef = React.useRef<View>(null)
    const handleRef = useForkRef(rootRef, ref)

    const [ripples, setRipples] = React.useState<
      { id: number; ripple: React.ReactNode }[]
    >([])

    const [{ backgroundColor = null, ...containerStyle } = {}] = splitProps(
      StyleSheet.flatten(style),
      [
        "backgroundColor",
        "borderRadius",
        "bottom",
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
      ]
    )

    const hoverColor = theme.utils.rgba(hoverColorProp ?? "#000", hoverOpacity)
    const pressedColor = pressedColorProp ?? "#000"

    const underlayColor =
      // When button has no background color, simply use `rippleColor` as is
      backgroundColor == null
        ? theme.utils.rgba(pressedColor, pressedOpacity)
        : // Otherwise we mix the `rippleColor` with the background color
          theme.utils.mix(
            pressedOpacity,
            pressedColor,
            backgroundColor.toString()
          )

    const removeRipple = (rippleID: number) => () => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== rippleID))
    }

    const appendRipple = React.useCallback(
      (event?: MouseEvent) => {
        const currentRef = rootRef.current as HTMLDivElement | null

        if (disabled || disableRipple || currentRef == null) {
          return
        }

        const { clientX = 0, clientY = 0 } = event ?? {}
        const { height, width, top, left } = currentRef.getBoundingClientRect()

        const rippleSize = Math.min(height, width, rippleSizeProp)

        const positionTop =
          clientX > 0 && !centerRipple
            ? clientY - top - rippleSize / 2
            : rippleSize / 2 - height / 2
        const positionLeft =
          clientY > 0 && !centerRipple
            ? clientX - left - rippleSize / 2
            : width / 2 - rippleSize / 2

        const rippleID =
          ripples.length === 0 ? 1 : ripples[ripples.length - 1].id + 1

        const ripple = (
          <span
            key={rippleID}
            style={{
              animation: "touchable-animation 550ms ease-in",
              backgroundColor: theme.utils.rgba(
                pressedColor,
                pressedOpacity - hoverOpacity
              ),
              borderRadius: "50%",
              height: rippleSize,
              left: positionLeft,
              pointerEvents: "none",
              position: "absolute",
              top: positionTop,
              width: rippleSize,
              zIndex: -1,
            }}
            onAnimationEnd={removeRipple(rippleID)}
          />
        )

        setRipples((prevRipples) => [...prevRipples, { id: rippleID, ripple }])
      },
      [
        rootRef,
        disabled,
        disableRipple,
        rippleSizeProp,
        centerRipple,
        ripples,
        theme,
        pressedColor,
        pressedOpacity,
        hoverOpacity,
      ]
    )

    const isNonNativeButton = React.useCallback(() => {
      const buttonEl = rootRef.current as HTMLElement | null
      return (
        buttonEl?.tagName !== "BUTTON" &&
        !(buttonEl?.tagName === "A" && (buttonEl as HTMLAnchorElement).href)
      )
    }, [rootRef])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
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
      },
      [appendRipple, disabled, isNonNativeButton, onKeyDown, onPress]
    )

    const handleKeyUp = React.useCallback(
      (event: React.KeyboardEvent) => {
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
      },
      [isNonNativeButton, onKeyUp, onPress]
    )

    React.useEffect(() => {
      const currentRef = rootRef.current as HTMLDivElement | null

      if (Platform.OS === "web" && currentRef != null) {
        currentRef.addEventListener("mousedown", appendRipple)

        return () => {
          currentRef.removeEventListener("mousedown", appendRipple)
        }
      }

      return () => {}
    }, [appendRipple, handleKeyDown, rootRef])

    const button = (
      <>
        {Platform.OS === "web" && (
          <Global
            styles={{
              "@keyframes touchable-animation": {
                from: {
                  opacity: 1,
                  transform: "scale(0)",
                },
                to: {
                  opacity: 0,
                  transform: "scale(10)",
                },
              },
            }}
          />
        )}
        <Pressable
          ref={handleRef}
          android_ripple={
            disableRipple
              ? {}
              : {
                  borderless: true,
                  color: pressedColor,
                }
          }
          disabled={disabled}
          pointerEvents={disabled ? "none" : undefined}
          {...(Platform.OS === "web" && {
            style: ({ pressed }) => [
              {
                cursor: disabled ? "default" : "pointer",
                overflow: "hidden",
                transition: "box-shadow 200ms linear",
                userSelect: "none",
              },
              style,
              pressed && !disableRipple && pressedStyle,
            ],
          })}
          {...(Platform.OS === "android" && {
            // For Android we need a wrapping View to cut off the ripple effect.
            // Because of this View and when the button should have
            // `position: absolute`, we need to apply it to the wrapper View and
            // override it here to have `position: relative` with 0px inset.
            style: ({ pressed }) => [
              style,
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
              pressed && !disableRipple && pressedStyle,
            ],
          })}
          {...(Platform.OS === "ios" && {
            style: ({ pressed }) => [
              style,
              pressed && !disableRipple && pressedStyle,
              pressed && !disableRipple && { backgroundColor: underlayColor },
            ],
          })}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onPress={onPress}
          {...props}
        >
          {({ hovered }) => (
            <>
              {React.Children.only(children)}
              {Platform.OS === "web" && !disableHover && (
                <span
                  style={{
                    backgroundColor: hoverColor,
                    bottom: 0,
                    left: 0,
                    opacity: hovered ? 1 : 0,
                    position: "absolute",
                    right: 0,
                    top: 0,
                    transition: "opacity 200ms linear",
                    zIndex: -1,
                  }}
                />
              )}
              {ripples.map(({ ripple }) => ripple)}
            </>
          )}
        </Pressable>
      </>
    )

    return Platform.OS === "android" ? (
      <ButtonBaseContainer style={containerStyle}>{button}</ButtonBaseContainer>
    ) : (
      button
    )
  }
)
