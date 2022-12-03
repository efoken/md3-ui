import { useBoolean, useControlled, useEventCallback } from "@md3-ui/hooks"
import { styled, SxProps, useTheme, useThemeProps } from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  FlexAlignType as RNFlexAlignType,
  Platform,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { SwitchBase, SwitchBaseProps, SwitchChangeEvent } from "./switch-base"

export interface SwitchProps extends SwitchBaseProps {
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ReactElement
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The icon to display when the component is unchecked.
   */
  icon?: React.ReactElement
  /**
   * Override or extend the styles applied to the component.
   */
  styles?: {
    root?: RNViewStyle
    switchBase?: RNViewStyle
    thumb?: RNViewStyle
  }
  /**
   * The system prop that allows defining system overrides as well as additional
   * styles.
   */
  sx?: SxProps
  /**
   * The value of the component. The DOM API casts this to a string. The browser
   * uses "on" as the default value.
   */
  value?: string
}

const SwitchRoot = styled(Animated.View, {
  name: "Switch",
  slot: "Root",
})(({ theme }) => ({
  backgroundColor: theme.color["surface-variant"],
  borderColor: theme.color.outline,
  borderRadius: theme.shape.corner.full,
  borderWidth: 2,
  height: 32,
  justifyContent: "center",
  width: 52,

  ...(Platform.OS === "web" && {
    cursor: "pointer",
  }),
}))

const SwitchSwitchBase = styled(SwitchBase, {
  name: "Switch",
  slot: "SwitchBase",
  skipSx: true,
})(() => ({
  alignItems: "center",
  height: 40,
  justifyContent: "center",
  marginHorizontal: -6,
  width: 40,
}))

const SwitchThumb = styled(Animated.View, {
  name: "Switch",
  slot: "Thumb",
  skipSx: true,
})(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.color.outline,
  borderRadius: theme.shape.corner.full,
  justifyContent: "center",
}))

export const Switch = React.forwardRef<RNView, SwitchProps>((inProps, ref) => {
  const {
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled = false,
    onChange,
    required = false,
    style,
    styles,
    value,
    ...props
  } = useThemeProps({
    name: "Switch",
    props: inProps,
  })

  const theme = useTheme()

  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: "Switch",
    state: "checked",
  })

  const [prevChecked, setPrevChecked] = React.useState(checked)

  const [, handleHover] = useBoolean()
  const [pressed, handlePress] = useBoolean()

  const [alignItems, setAlignItems] = React.useState<RNFlexAlignType>(
    checked ? "flex-end" : "flex-start",
  )

  const offset = 20

  const switchAnimation = React.useRef(
    new Animated.Value(checked ? -1 : 1),
  ).current

  const animateSwitch = useEventCallback(
    (newChecked: boolean, callback?: Animated.EndCallback) => {
      Animated.timing(switchAnimation, {
        toValue: newChecked ? offset : -offset,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(callback)
    },
  )

  const thumbAnimation = React.useRef(new Animated.Value(0)).current

  const animateThumb = useEventCallback(
    (toValue: number, callback?: Animated.EndCallback) => {
      Animated.timing(thumbAnimation, {
        toValue,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(callback)
    },
  )

  const animate = useEventCallback((newChecked: boolean) => {
    animateSwitch(newChecked, () => {
      setPrevChecked(newChecked)
      setAlignItems(newChecked ? "flex-end" : "flex-start")
      switchAnimation.setValue(newChecked ? -1 : 1)
    })
    animateThumb(0)
  })

  React.useEffect(() => {
    if (checked !== checkedProp) {
      animate(!!checked)
    }
  }, [checked, checkedProp, animate])

  React.useEffect(() => {
    animateThumb(pressed ? 1 : 0)
  }, [animateThumb, pressed])

  const handleChange = (
    event: SwitchChangeEvent | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newChecked =
      typeof event.target === "object"
        ? event.target.checked
        : (event as SwitchChangeEvent).checked

    setChecked(newChecked)
    onChange?.(event)
  }

  const switchAnimationInputRange = prevChecked ? [-offset, -1] : [1, offset]

  const thumbSize = thumbAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: prevChecked ? [24, 28] : [16, 28],
  })

  return (
    <SwitchRoot
      ref={ref}
      style={[
        {
          alignItems,
          backgroundColor: switchAnimation.interpolate({
            inputRange: switchAnimationInputRange,
            outputRange: [theme.color["surface-variant"], theme.color.primary],
            extrapolate: "clamp",
          }),
          borderColor: switchAnimation.interpolate({
            inputRange: switchAnimationInputRange,
            outputRange: [theme.color.outline, theme.color.primary],
            extrapolate: "clamp",
          }),
        },
        styles?.root,
        style,
      ]}
    >
      <Animated.View
        style={{
          transform: [
            {
              translateX: switchAnimation.interpolate({
                inputRange: switchAnimationInputRange,
                outputRange: prevChecked ? [-offset, 0] : [0, offset],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <SwitchSwitchBase
          checked={checked}
          disabled={disabled}
          required={required}
          rippleColor={
            prevChecked ? theme.color.primary : theme.color["on-surface"]
          }
          style={styles?.switchBase}
          styles={{
            input: {
              left: "-100%",
              width: "300%",
            },
          }}
          value={value}
          onChange={handleChange}
          onHoverIn={handleHover.on}
          onHoverOut={handleHover.off}
          onPressIn={handlePress.on}
          onPressOut={handlePress.off}
          {...props}
        >
          <SwitchThumb
            style={[
              styles?.thumb,
              {
                backgroundColor:
                  pressed && !prevChecked
                    ? thumbAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [
                          theme.color.outline,
                          theme.color["on-surface-variant"],
                        ],
                        extrapolate: "clamp",
                      })
                    : switchAnimation.interpolate({
                        inputRange: switchAnimationInputRange,
                        outputRange: [
                          theme.color.outline,
                          theme.color["on-primary"],
                        ],
                        extrapolate: "clamp",
                      }),
                height: thumbSize,
                width: thumbSize,
              },
            ]}
          >
            {prevChecked
              ? checkedIcon &&
                React.cloneElement(checkedIcon, {
                  height: 16,
                  width: 16,
                })
              : undefined}
          </SwitchThumb>
        </SwitchSwitchBase>
      </Animated.View>
    </SwitchRoot>
  )
})

if (__DEV__) {
  Switch.displayName = "Switch"
}
