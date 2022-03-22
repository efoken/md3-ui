import * as React from "react"
import { useCallback, useEffect } from "react"
import { Animated, Platform } from "react-native"

export interface UseAnimateProps
  extends Partial<Omit<Animated.TimingAnimationConfig, "toValue">> {
  /** @default false */
  animate?: boolean
  /** @default false */
  bounce?: boolean
  callback?: (props: {
    animatedValue: Animated.Value
    animation: Animated.CompositeAnimation
  }) => void
  /** @default 0 */
  fromValue?: number
  /** @default 1 */
  iterations?: number
  referenceValue?: Animated.Value
  /** @default true */
  shouldReset?: boolean
  /** @default 1 */
  toValue?: number
}

export function useAnimate({
  animate = false,
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

  const interpolate = useCallback(
    ({
      inputRange,
      outputRange,
      ...config
    }: Animated.InterpolationConfigType) =>
      animatedValue.interpolate({
        inputRange: inputRange || [
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

  const reset = useCallback(() => {
    animation.reset()
  }, [animation])

  const start = useCallback(
    (next?: () => void) => {
      if (shouldReset) {
        animation.reset()
      }

      const callbackAnimation = () => {
        callback?.({ animatedValue, animation })
        next?.()
      }

      if (delay) {
        Animated.sequence([Animated.delay(delay), animation]).start(
          callbackAnimation,
        )
      } else {
        animation.start(callbackAnimation)
      }
    },
    [animatedValue, animation, callback, delay, shouldReset],
  )

  useEffect(() => {
    if (animate) {
      start()
    }
  }, [animate, start])

  return [animatedValue, { interpolate, reset, start }] as const
}
