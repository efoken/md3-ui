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
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  Text as RNText,
  TextStyle as RNTextStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

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

const BadgeRoot = styled(Animated.View, {
  name: "Badge",
  slot: "Root",
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
    max = 99,
    showZero = false,
    style,
    styles,
    value: valueProp,
    ...props
  } = useThemeProps({
    name: "Badge",
    props: inProps,
  })

  const { handleLayout, ...layout } = useLayout()

  const invisible = invisibleProp || (valueProp === 0 && !showZero)

  const [scale] = useAnimate({
    duration: 225,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    shouldReset: false,
    useNativeDriver: true,
    fromValue: invisible ? 0 : 1,
    toValue: invisible ? 0 : 1,
  })

  const value =
    valueProp != null && Number(valueProp) > max ? `${max}+` : valueProp

  const ownerState = {
    value,
  }

  return (
    <RNView>
      <BadgeRoot
        ref={ref}
        ownerState={ownerState}
        style={[
          {
            transform: [
              { scale },
              { translateX: layout.width / 2 },
              { translateY: -(layout.height / 4) },
            ],
          },
          style,
          styles?.root,
        ]}
        {...props}
      >
        <BadgeValue
          ownerState={ownerState}
          style={styles?.value}
          onLayout={handleLayout}
        >
          {value}
        </BadgeValue>
      </BadgeRoot>
      {children}
    </RNView>
  )
}) as OverridableComponent<BadgeTypeMap>

if (__DEV__) {
  Badge.displayName = "Badge"
}
