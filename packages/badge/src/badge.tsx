import { useAnimate, useLayout } from "@md3-ui/hooks"
import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  StylesProp,
  SxProps,
  styled,
  useThemeProps,
} from "@md3-ui/system"
import * as React from "react"
import {
  Animated,
  Easing,
  Text as RNText,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"
import { useBadge } from "./use-badge"

export interface BadgeTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * If `true`, the badge is invisible.
     * @default false
     */
    invisible?: boolean
    /**
     * Max count to show.
     * @default 99
     */
    max?: number
    /** @default false */
    showZero?: boolean
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNViewStyle
      badge?: RNTextStyle
      value?: RNTextStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /**
     * The value rendered within the badge.
     */
    value?: string | number
  }
  defaultAs: C
}

export type BadgeProps<
  C extends React.ElementType = BadgeTypeMap["defaultAs"],
  P = {},
> = OverrideProps<BadgeTypeMap<P, C>, C>

export type BadgeStyleKey = keyof NonNullable<BadgeProps["styles"]>

type BadgeOwnerState = Pick<BadgeProps, "value">

const BadgeRoot = styled(RNView, {
  name: "Badge",
  slot: "Root",
})()

const BadgeBadge = styled(Animated.View, {
  name: "Badge",
  slot: "Badge",
})<OwnerStateProps<BadgeOwnerState>>(({ ownerState, theme }) => ({
  backgroundColor: theme.comp.badge.color,
  borderRadius: theme.comp.badge.shape,
  height: theme.comp.badge.size,
  minWidth: theme.comp.badge.size,
  position: "absolute",
  right: 0,
  top: 0,
  width: "auto",
  zIndex: 1,

  ...(ownerState.value != null && {
    backgroundColor: theme.comp.badge.large.color,
    borderRadius: theme.comp.badge.large.shape,
    height: theme.comp.badge.large.size,
    minWidth: theme.comp.badge.large.size,
  }),
}))

const BadgeValue = styled(RNText, {
  name: "Badge",
  slot: "Value",
  skipSx: true,
})<OwnerStateProps<BadgeOwnerState>>(({ theme, ownerState }) => ({
  ...theme.comp.badge.large.labelText.textStyle,
  textAlign: "center",

  ...(ownerState.value != null && {
    color: theme.comp.badge.large.labelText.color,
    paddingHorizontal: 4,
  }),
}))

export const Badge = React.forwardRef<RNView, BadgeProps>((inProps, ref) => {
  const {
    children,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false,
    style,
    styles,
    value: valueProp,
    ...props
  } = useThemeProps({
    name: "Badge",
    props: inProps,
  })

  const { displayValue, invisible, value } = useBadge({
    invisible: invisibleProp,
    max: maxProp,
    showZero,
    value: valueProp,
  })

  const { handleLayout, ...layout } = useLayout()

  const [scale] = useAnimate({
    duration: 225,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    shouldReset: false,
    useNativeDriver: true,
    fromValue: invisible ? 0 : 1,
    toValue: invisible ? 0 : 1,
  })

  const ownerState = {
    value,
  }

  return (
    <BadgeRoot ref={ref} style={[style, styles?.root]} {...props}>
      {children}
      <BadgeBadge
        ownerState={ownerState}
        style={[
          {
            transform: [
              { scale },
              { translateX: layout.width / 2 },
              { translateY: -(layout.height / 4) },
            ],
          },
          styles?.badge,
        ]}
      >
        <BadgeValue
          ownerState={ownerState}
          style={styles?.value}
          onLayout={handleLayout}
        >
          {displayValue}
        </BadgeValue>
      </BadgeBadge>
    </BadgeRoot>
  )
}) as OverridableComponent<BadgeTypeMap>

Badge.displayName = "Badge"
