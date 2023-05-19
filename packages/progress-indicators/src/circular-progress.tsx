import { useAnimate } from "@md3-ui/hooks"
import {
  OverridableComponent,
  OverrideProps,
  StylesProp,
  SxProps,
  styled,
  useTheme,
  useThemeProps,
} from "@md3-ui/system"
import { clamp } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { Circle, Svg } from "react-native-svg"

const INDETERMINATE_DURATION = 2400
const INDETERMINATE_EASING = Easing.bezier(0.4, 0, 0.7, 1)
const INDETERMINATE_FRAMES = (60 * INDETERMINATE_DURATION) / 1000

export interface CircularProgressTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * @default false
     */
    fourColor?: boolean
    /**
     * Whether or not to render indeterminate progress in an animated state.
     * @default false
     */
    indeterminate?: boolean
    /**
     * Progress to display, a fraction between 0 and 1.
     * @default 0
     */
    progress?: number
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
    /**
     * @default true
     */
    visible?: boolean
  }
  defaultAs: C
}

export type CircularProgressProps<
  C extends React.ElementType = CircularProgressTypeMap["defaultAs"],
  P = {},
> = OverrideProps<CircularProgressTypeMap<P, C>, C>

export type CircularProgressStyleKey = keyof NonNullable<
  CircularProgressProps["styles"]
>

const CircularProgressRoot = styled(RNView, {
  name: "CircularProgress",
  slot: "Root",
})(({ theme }) => ({
  height: theme.comp.circularProgress.size,
  width: theme.comp.circularProgress.size,
}))

const CircularProgressSvg = styled(Svg, {
  name: "CircularProgress",
  slot: "Svg",
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
  transform: "rotate(-90deg)" as any,
})

const CircularProgressSvgProgress = styled(
  Animated.createAnimatedComponent(Circle),
  {
    name: "CircularProgress",
    slot: "SvgProgress",
  },
)(({ theme }) => ({
  backgroundColor: theme.comp.circularProgress.activeIndicator.color,

  "@media (forced-colors: active)": {
    backgroundColor: "canvastext",
  },
}))

const CircularProgressSpinner = styled(Animated.View, {
  name: "CircularProgress",
  slot: "Spinner",
})(({ theme }) => ({
  height: theme.comp.circularProgress.size,
  width: theme.comp.circularProgress.size,
}))

const CircularProgressSpinnerSide = styled(RNView, {
  name: "CircularProgress",
  slot: "SpinnerSide",
})({
  alignItems: "center",
  bottom: 0,
  justifyContent: "center",
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
})

const CircularProgressSpinnerLayer = styled(Animated.View, {
  name: "CircularProgress",
  slot: "SpinnerLayer",
})({
  height: "100%",
  width: "100%",
})

const CircularProgressSpinnerCircleContainer = styled(RNView, {
  name: "CircularProgress",
  slot: "SpinnerCircleContainer",
})(({ theme }) => ({
  height: theme.comp.circularProgress.size / 2,
  overflow: "hidden",
  width: theme.comp.circularProgress.size,
}))

const CircularProgressSpinnerViewport = styled(Animated.View, {
  name: "CircularProgress",
  slot: "SpinnerViewport",
})(({ theme }) => ({
  height: theme.comp.circularProgress.size,
  width: theme.comp.circularProgress.size,
}))

const CircularProgressSpinnerCircle = styled(RNView, {
  name: "CircularProgress",
  slot: "SpinnerCircle",
})(({ theme }) => ({
  borderColor: theme.comp.circularProgress.activeIndicator.color,
  borderRadius: theme.comp.circularProgress.size / 2,
  borderWidth: theme.comp.circularProgress.activeIndicator.width,
  height: theme.comp.circularProgress.size,
  width: theme.comp.circularProgress.size,

  "@media (forced-colors: active)": {
    borderColor: "canvastext",
  },
}))

export const CircularProgress = React.forwardRef<RNView, CircularProgressProps>(
  (inProps, ref) => {
    const {
      // fourColor = false,
      indeterminate = false,
      progress: progressProp = 0,
      style,
      styles,
      visible = true,
      ...props
    } = useThemeProps({
      name: "CircularProgress",
      props: inProps,
    })

    const progress = clamp(0, progressProp, 1)

    const theme = useTheme()

    const [animation, { start: startAnimation, stop: stopAnimation }] =
      useAnimate({
        ...(indeterminate
          ? {
              duration: INDETERMINATE_DURATION,
              easing: Easing.linear,
              iterations: -1,
            }
          : {
              duration: 250,
              easing: Easing.bezier(0.4, 0, 0.6, 1),
              toValue: progress,
              shouldReset: false,
            }),
        animate: !indeterminate,
        useNativeDriver: true,
        isInteraction: false,
      })

    const [opacity] = useAnimate({
      duration: 200,
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
      isInteraction: false,
    })

    React.useEffect(() => {
      if (visible) {
        if (indeterminate) {
          startAnimation()
        }
      } else {
        stopAnimation()
      }
    }, [indeterminate, startAnimation, stopAnimation, visible])

    const pathLength =
      Math.PI *
      (theme.comp.circularProgress.size -
        theme.comp.circularProgress.activeIndicator.width)

    return (
      <CircularProgressRoot
        ref={ref}
        accessible
        aria-busy={visible}
        aria-valuemax={1}
        aria-valuemin={0}
        aria-valuenow={indeterminate ? undefined : progress}
        role="progressbar"
        style={[style, styles?.root]}
        {...props}
      >
        {indeterminate ? (
          <CircularProgressSpinner collapsable={false} style={[{ opacity }]}>
            {[0, 1].map((side) => (
              <CircularProgressSpinnerSide key={side}>
                <CircularProgressSpinnerLayer
                  style={{
                    transform: [
                      {
                        rotate: animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [
                            `${0 + 30 + 15}deg`,
                            `${2 * 360 + 30 + 15}deg`,
                          ],
                        }),
                      },
                    ],
                  }}
                >
                  <CircularProgressSpinnerCircleContainer
                    collapsable={false}
                    style={{
                      top: side ? theme.comp.circularProgress.size / 2 : 0,
                    }}
                  >
                    <CircularProgressSpinnerViewport
                      style={{
                        transform: [
                          {
                            translateY: side
                              ? -theme.comp.circularProgress.size / 2
                              : 0,
                          },
                          {
                            rotate: animation.interpolate({
                              // Thanks to https://github.com/n4kz/react-native-indicators for the great work
                              inputRange: Array.from(
                                { length: INDETERMINATE_FRAMES },
                                (_, i) => i / (INDETERMINATE_FRAMES - 1),
                              ),
                              outputRange: Array.from(
                                { length: INDETERMINATE_FRAMES },
                                (_, i) => {
                                  let frameProgress =
                                    (2 * i) / (INDETERMINATE_FRAMES - 1)

                                  if (frameProgress > 1) {
                                    frameProgress = 2 - frameProgress
                                  }

                                  const direction = side ? -1 : 1
                                  const rotation = side ? 360 - 15 : -180 + 15

                                  return `${
                                    direction *
                                      (180 - 30) *
                                      INDETERMINATE_EASING(frameProgress) +
                                    rotation
                                  }deg`
                                },
                              ),
                            }),
                          },
                        ],
                      }}
                    >
                      <CircularProgressSpinnerCircleContainer
                        collapsable={false}
                      >
                        <CircularProgressSpinnerCircle />
                      </CircularProgressSpinnerCircleContainer>
                    </CircularProgressSpinnerViewport>
                  </CircularProgressSpinnerCircleContainer>
                </CircularProgressSpinnerLayer>
              </CircularProgressSpinnerSide>
            ))}
          </CircularProgressSpinner>
        ) : (
          <CircularProgressSvg
            height={theme.comp.circularProgress.size}
            viewBox={`0 0 ${theme.comp.circularProgress.size} ${theme.comp.circularProgress.size}`}
            width={theme.comp.circularProgress.size}
          >
            <CircularProgressSvgProgress
              cx="50%"
              cy="50%"
              fill="transparent"
              r={(48 - theme.comp.circularProgress.activeIndicator.width) / 2}
              stroke={theme.comp.circularProgress.activeIndicator.color}
              strokeDasharray={pathLength}
              strokeDashoffset={animation.interpolate({
                inputRange: [0, 1],
                outputRange: [pathLength, 0],
              })}
              strokeWidth={theme.comp.circularProgress.activeIndicator.width}
              style={{ opacity }}
            />
          </CircularProgressSvg>
        )}
      </CircularProgressRoot>
    )
  },
) as OverridableComponent<CircularProgressTypeMap>

CircularProgress.displayName = "CircularProgress"
