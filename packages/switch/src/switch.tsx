import { useBoolean, useControlled, useEventCallback } from "@md3-ui/hooks"
import {
  StylesProp,
  SxProps,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  FlexAlignType as RNFlexAlignType,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import {
  SwitchBase,
  SwitchBaseProps,
  SwitchChangeEventData,
} from "./switch-base"

const ANIMATION_DURATION = 75

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
  styles?: StylesProp<{
    root?: RNViewStyle
    switchBase?: RNViewStyle
    thumb?: RNViewStyle
  }>
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
  backgroundColor: theme.sys.color.surfaceVariant,
  borderColor: theme.sys.color.outline,
  borderRadius: theme.sys.shape.corner.full,
  borderWidth: 2,
  cursor: "pointer",
  height: 32,
  justifyContent: "center",
  width: 52,
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
  backgroundColor: theme.sys.color.outline,
  borderRadius: theme.sys.shape.corner.full,
  height: 16,
  justifyContent: "center",
  width: 16,
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
        duration: ANIMATION_DURATION,
        easing: Easing.bezier(...theme.sys.motion.easing.standard),
        useNativeDriver: false,
      }).start(callback)
    },
  )

  const thumbAnimation = React.useRef(new Animated.Value(0)).current

  const animateThumb = useEventCallback(
    (toValue: number, callback?: Animated.EndCallback) => {
      Animated.timing(thumbAnimation, {
        toValue,
        duration: ANIMATION_DURATION,
        easing: Easing.bezier(...theme.sys.motion.easing.standard),
        useNativeDriver: false,
      }).start(callback)
    },
  )

  const animate = useEventCallback((newChecked: boolean) => {
    animateSwitch(newChecked, ({ finished }) => {
      if (finished) {
        setPrevChecked(newChecked)
        setAlignItems(newChecked ? "flex-end" : "flex-start")
        setTimeout(() => {
          switchAnimation.setValue(newChecked ? -1 : 1)
        })
      }
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

  const handleChange = (event: NativeSyntheticEvent<SwitchChangeEventData>) => {
    const newChecked = event.nativeEvent.checked

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
            outputRange: [
              theme.sys.color.surfaceVariant,
              theme.sys.color.primary,
            ],
            extrapolate: "clamp",
          }),
          borderColor: switchAnimation.interpolate({
            inputRange: switchAnimationInputRange,
            outputRange: [theme.sys.color.outline, theme.sys.color.primary],
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
            prevChecked ? theme.sys.color.primary : theme.sys.color.onSurface
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
                          theme.sys.color.outline,
                          theme.sys.color.onSurfaceVariant,
                        ],
                        extrapolate: "clamp",
                      })
                    : switchAnimation.interpolate({
                        inputRange: switchAnimationInputRange,
                        outputRange: [
                          theme.sys.color.outline,
                          theme.sys.color.onPrimary,
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
