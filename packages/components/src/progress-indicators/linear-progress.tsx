import { useAnimate, useLayout, useLocale } from "@md3-ui/hooks"
import {
  OverridableComponent,
  OverrideProps,
  StylesProp,
  SxProps,
  styled,
  useThemeProps,
} from "@md3-ui/system"
import { clamp, createChainedFunction } from "@md3-ui/utils"
import { forwardRef, useEffect } from "react"
import {
  Animated,
  Easing,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

const INDETERMINATE_MAX_WIDTH = 0.6

export interface LinearProgressTypeMap<
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
      track?: RNViewStyle
      activeIndicator?: RNViewStyle
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

export type LinearProgressProps<
  C extends React.ElementType = LinearProgressTypeMap["defaultAs"],
  P = {},
> = OverrideProps<LinearProgressTypeMap<P, C>, C>

export type LinearProgressStyleKey = keyof NonNullable<
  LinearProgressProps["styles"]
>

const LinearProgressRoot = styled(RNView, {
  name: "LinearProgress",
  slot: "Root",
})({
  minWidth: 80,
})

const LinearProgressTrack = styled(Animated.View, {
  name: "LinearProgress",
  slot: "Track",
})(({ theme }) => ({
  backgroundColor: theme.comp.linearProgress.track.color,
  borderRadius: theme.comp.linearProgress.track.shape,
  bottom: 0,
  height: theme.comp.linearProgress.track.height,
  left: 0,
  outlineColor: "transparent",
  outlineStyle: "solid",
  outlineWidth: 1,
  overflow: "hidden",
  position: "absolute",
  right: 0,
  top: 0,

  "@media (forced-colors: active)": {
    backgroundColor: "graytext",
    borderColor: "canvastext",
    borderWidth: 1,
  },
}))

const LinearProgressActiveIndicator = styled(Animated.View, {
  name: "LinearProgress",
  slot: "ActiveIndicator",
})(({ theme }) => ({
  backgroundColor: theme.comp.linearProgress.activeIndicator.color,
  borderRadius: theme.comp.linearProgress.activeIndicator.shape,
  height: theme.comp.linearProgress.activeIndicator.height,
  willChange: "transform",

  "@media (forced-colors: active)": {
    backgroundColor: "canvastext",
  },
}))

export const LinearProgress = forwardRef<RNView, LinearProgressProps>(
  (inProps, ref) => {
    const {
      // fourColor = false,
      indeterminate = false,
      onLayout,
      progress: progressProp = 0,
      style,
      styles,
      visible = true,
      ...props
    } = useThemeProps({
      name: "LinearProgress",
      props: inProps,
    })

    const progress = clamp(0, progressProp, 1)

    const { direction } = useLocale()

    const { handleLayout, ...layout } = useLayout()

    const [animation, { start: startAnimation, stop: stopAnimation }] =
      useAnimate({
        ...(indeterminate
          ? {
              duration: 1500,
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

    useEffect(() => {
      if (visible) {
        if (indeterminate) {
          startAnimation()
        }
      } else {
        stopAnimation()
      }
    }, [indeterminate, startAnimation, stopAnimation, visible])

    return (
      <LinearProgressRoot
        ref={ref}
        accessible
        aria-busy={visible}
        aria-valuemax={1}
        aria-valuemin={0}
        aria-valuenow={indeterminate ? undefined : progress}
        role="progressbar"
        style={[style, styles?.root]}
        onLayout={createChainedFunction(onLayout, handleLayout)}
        {...props}
      >
        <LinearProgressTrack style={[{ opacity }, styles?.track]}>
          {layout.width > 0 && (
            <LinearProgressActiveIndicator
              style={[
                {
                  transform: [
                    {
                      translateX: animation.interpolate(
                        indeterminate
                          ? {
                              inputRange: [0, 0.5, 1],
                              outputRange: [
                                0.5 *
                                  (direction === "rtl" ? 1 : -1) *
                                  layout.width,
                                0.5 *
                                  (direction === "rtl" ? 1 : -1) *
                                  INDETERMINATE_MAX_WIDTH *
                                  layout.width,
                                0.7 *
                                  (direction === "rtl" ? -1 : 1) *
                                  layout.width,
                              ],
                            }
                          : {
                              inputRange: [0, 1],
                              outputRange: [
                                layout.width / (direction === "rtl" ? 2 : -2),
                                0,
                              ],
                            },
                      ),
                    },
                    {
                      scaleX: animation.interpolate(
                        indeterminate
                          ? {
                              inputRange: [0, 0.5, 1],
                              outputRange: [0, INDETERMINATE_MAX_WIDTH, 0],
                            }
                          : {
                              inputRange: [0, 1],
                              outputRange: [0, 1],
                            },
                      ),
                    },
                  ],
                  width: layout.width,
                },
                styles?.activeIndicator,
              ]}
            />
          )}
        </LinearProgressTrack>
      </LinearProgressRoot>
    )
  },
) as OverridableComponent<LinearProgressTypeMap>

LinearProgress.displayName = "LinearProgress"
