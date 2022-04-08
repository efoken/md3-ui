import { useAnimate, useLayout } from "@md3-ui/hooks"
import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import {
  Animated,
  Easing,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface BadgeTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content rendered within the badge.
     */
    badgeContent?: number
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
    showZero?: boolean
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /**
     * The variant to use.
     * @default "standard"
     */
    variant?: "standard" | "dot"
  }
  defaultAs: C
}

export type BadgeProps<
  C extends React.ElementType = BadgeTypeMap["defaultAs"],
  P = {},
> = OverrideProps<BadgeTypeMap<P, C>, C>

export type BadgeStyleKey = keyof NonNullable<BadgeProps["styles"]>

const BadgeRoot = styled(RNView, {
  name: "Badge",
  slot: "Root",
})({
  flexShrink: 0,
})

const BadgeLabel = styled(Animated.Text, {
  name: "Badge",
  slot: "Label",
  skipSx: true,
})<OwnerStateProps<Pick<BadgeProps, "variant">>>(({ theme, ownerState }) => ({
  ...theme.typescale["label-small"],
  backgroundColor: theme.color.error,
  borderRadius: 8,
  color: theme.color["on-error"],
  height: 16,
  minWidth: 16,
  paddingHorizontal: theme.spacing(0.5),
  position: "absolute",
  right: 0,
  textAlign: "center",
  top: 0,

  ...(ownerState.variant === "dot" && {
    borderRadius: 3,
    height: 6,
    minWidth: 6,
    paddingHorizontal: 0,
  }),
}))

export const Badge = React.forwardRef<RNView, BadgeProps>((inProps, ref) => {
  const {
    badgeContent: badgeContentProp,
    children,
    invisible: invisibleProp = false,
    max = 99,
    showZero = false,
    style,
    styles,
    variant = "standard",
    ...props
  } = useThemeProps({
    name: "Badge",
    props: inProps,
  })

  const { handleLayout, ...layout } = useLayout()

  const invisible =
    !invisibleProp &&
    ((badgeContentProp === 0 && !showZero) ||
      (badgeContentProp == null && variant !== "dot"))

  const [scale] = useAnimate({
    duration: 225,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
    shouldReset: false,
    useNativeDriver: true,
    toValue: invisible ? 0 : 1,
  })

  const ownerState = {
    variant,
  }

  const badgeContent =
    variant !== "dot"
      ? badgeContentProp != null && Number(badgeContentProp) > max
        ? `${max}+`
        : badgeContentProp
      : undefined

  return (
    <BadgeRoot ref={ref} style={[style, styles?.root]} {...props}>
      <BadgeLabel
        ownerState={ownerState}
        style={{
          transform: [
            { scale },
            { translateX: layout.width / 4 },
            { translateY: -(layout.height / 4) },
          ],
        }}
        onLayout={handleLayout}
      >
        {badgeContent}
      </BadgeLabel>
      {children}
    </BadgeRoot>
  )
}) as OverridableComponent<BadgeTypeMap>

if (__DEV__) {
  Badge.displayName = "Badge"
}
