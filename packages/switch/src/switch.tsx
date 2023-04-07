import { useBoolean, useControlled, useEventCallback } from "@md3-ui/hooks"
import {
  StylesProp,
  SxProps,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
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
    handle?: RNViewStyle
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
  borderRadius: theme.comp.switch.track.shape,
  borderWidth: theme.comp.switch.track.outline.width,
  cursor: "pointer",
  height: theme.comp.switch.track.height,
  justifyContent: "center",
  width: theme.comp.switch.track.width,
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

const SwitchHandle = styled(Animated.View, {
  name: "Switch",
  slot: "Handle",
  skipSx: true,
})(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.sys.color.outline,
  borderRadius: theme.comp.switch.handle.shape,
  height: theme.comp.switch.unselected.handle.height,
  justifyContent: "center",
  width: theme.comp.switch.unselected.handle.width,
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

  const handleAnimation = React.useRef(new Animated.Value(0)).current

  const animateHandle = useEventCallback(
    (toValue: number, callback?: Animated.EndCallback) => {
      Animated.timing(handleAnimation, {
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
    animateHandle(0)
  })

  React.useEffect(() => {
    if (checked !== checkedProp) {
      animate(!!checked)
    }
  }, [checked, checkedProp, animate])

  React.useEffect(() => {
    animateHandle(pressed ? 1 : 0)
  }, [animateHandle, pressed])

  const handleChange = (event: NativeSyntheticEvent<SwitchChangeEventData>) => {
    const newChecked = event.nativeEvent.checked

    setChecked(newChecked)
    onChange?.(event)
  }

  const switchAnimationInputRange = prevChecked ? [-offset, -1] : [1, offset]

  const handleSizeStyle = {
    height: handleAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: prevChecked
        ? [
            theme.comp.switch.selected.handle.height,
            theme.comp.switch.pressed.handle.height,
          ]
        : [
            theme.comp.switch.unselected.handle.height,
            theme.comp.switch.pressed.handle.height,
          ],
    }),
    width: handleAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: prevChecked
        ? [
            theme.comp.switch.selected.handle.width,
            theme.comp.switch.pressed.handle.width,
          ]
        : [
            theme.comp.switch.unselected.handle.width,
            theme.comp.switch.pressed.handle.width,
          ],
    }),
  }

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
          <SwitchHandle
            style={[
              styles?.handle,
              {
                backgroundColor:
                  pressed && !prevChecked
                    ? handleAnimation.interpolate({
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
              },
              handleSizeStyle,
            ]}
          >
            {prevChecked
              ? checkedIcon &&
                React.cloneElement(checkedIcon, {
                  height: theme.comp.switch.selected.icon.size,
                  width: theme.comp.switch.selected.icon.size,
                })
              : undefined}
          </SwitchHandle>
        </SwitchSwitchBase>
      </Animated.View>
    </SwitchRoot>
  )
})

Switch.displayName = "Switch"
