import * as React from "react"
import { Animated, Platform } from "react-native"
import { useEventCallback } from "./use-event-callback"

export interface UseAnimateProps
  extends Partial<Animated.TimingAnimationConfig> {
  /**
   * Set `false` if this animation is being used inside a parallel or sequence
   * animation.
   * @default true
   */
  animate?: boolean
  /**
   * If `true` the animation returns to its initial state.
   * @default false
   */
  bounce?: boolean
  /**
   * Callback triggered after the animation has ended. In case `animate` is
   * `false` this won't be triggered.
   */
  callback?: (props: {
    animatedValue: Animated.Value
    animation: Animated.CompositeAnimation
  }) => void
  /**
   * The value from which the animation will start.
   * @default 0
   */
  fromValue?: number
  /**
   * The amount of times the animation should run, -1 if you want to create an
   * infinite loop.
   * @default 1
   */
  iterations?: number
  /**
   * Pass in case you want to reuse an animated value.
   */
  referenceValue?: Animated.Value
  /**
   * If `true` the animation resets when the values change. Useful for
   * animations that bounce, but are triggered dependent (set to `false`).
   * @default true
   */
  shouldReset?: boolean
  /**
   * The value to which the animation should end.
   * @default 1
   */
  toValue?: number
}

export function useAnimate({
  animate = true,
  bounce = false,
  callback,
  delay = 0,
  duration = 800,
  easing,
  fromValue = 0,
  isInteraction = true,
  iterations = 1,
  referenceValue,
  shouldReset = true,
  toValue = 1,
  useNativeDriver = false,
}: UseAnimateProps) {
  const animatedValue =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    referenceValue ?? React.useRef(new Animated.Value(fromValue)).current

  const baseConfig = {
    easing,
    isInteraction,
    duration: bounce ? duration / 2 : duration,
    useNativeDriver: Platform.OS === "web" ? false : useNativeDriver,
  }

  const sequence = [
    Animated.timing(animatedValue, {
      delay,
      toValue,
      ...baseConfig,
    }),
  ]

  if (bounce) {
    sequence.push(
      Animated.timing(animatedValue, {
        toValue: fromValue,
        ...baseConfig,
      }),
    )
  }
  const sequenceAnimation = Animated.sequence(sequence)

  const interpolate = React.useCallback(
    ({
      inputRange,
      outputRange,
      ...config
    }: Omit<Animated.InterpolationConfigType, "inputRange"> &
      Partial<Pick<Animated.InterpolationConfigType, "inputRange">>) =>
      animatedValue.interpolate({
        inputRange: inputRange ?? [
          Math.min(fromValue, toValue),
          Math.max(fromValue, toValue),
        ],
        outputRange,
        ...config,
      }),
    [animatedValue, fromValue, toValue],
  )

  const animation =
    iterations === 1 || iterations === 0 || callback != null
      ? sequenceAnimation
      : Animated.loop(sequenceAnimation, { iterations })

  const reset = () => {
    animation.reset()
  }

  const start = useEventCallback((next?: (finished: boolean) => void) => {
    if (shouldReset) {
      animation.reset()
    }

    const callbackAnimation: Animated.EndCallback = ({ finished }) => {
      callback?.({ animatedValue, animation })
      next?.(finished)
    }

    if (delay) {
      Animated.sequence([Animated.delay(delay), animation]).start(
        callbackAnimation,
      )
    } else {
      animation.start(callbackAnimation)
    }
  })

  React.useEffect(() => {
    if (animate && (animatedValue as any)._value !== toValue) {
      start()
    }
  }, [animate, animatedValue, start, toValue])

  return [animatedValue, { interpolate, reset, start }] as const
}
