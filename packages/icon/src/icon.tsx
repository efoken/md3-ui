import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  StylesProp,
  SxProps,
  useTextStyle,
  useThemeProps,
} from "@md3-ui/system"
import * as React from "react"
import { Platform, ViewStyle as RNViewStyle } from "react-native"
import Svg from "react-native-svg"

const ICON_SIZE = {
  inherit: undefined,
  small: 12,
  medium: 18,
  large: 24,
}

export interface IconTypeMap<P = {}, C extends React.ElementType = typeof Svg> {
  props: P & {
    /**
     * The node passed into the SVG element.
     */
    children?: React.ReactNode
    /**
     * The color of the component. You can use the `htmlColor` prop to apply a
     * color attribute to the SVG element.
     * @default "currentColor"
     */
    color?: string
    htmlColor?: string
    /** @default "medium" */
    size?: "inherit" | "small" | "medium" | "large"
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
  }
  defaultAs: C
}

export type IconProps<
  C extends React.ElementType = IconTypeMap["defaultAs"],
  P = {},
> = OverrideProps<IconTypeMap<P, C>, C>

export type IconStyleKey = keyof NonNullable<IconProps["styles"]>

const IconRoot = styled(Svg, {
  name: "Icon",
  slot: "Root",
})<OwnerStateProps<Pick<IconProps, "height" | "size" | "width">>>(
  ({ ownerState }) => ({
    flexShrink: 0,

    ...(ownerState.size === "small" && {
      fontSize: ICON_SIZE.small,
      height: ICON_SIZE.small,
      width: ICON_SIZE.small,
    }),

    ...(ownerState.size === "medium" && {
      fontSize: ICON_SIZE.medium,
      height: ICON_SIZE.medium,
      width: ICON_SIZE.medium,
    }),

    ...(ownerState.size === "large" && {
      fontSize: ICON_SIZE.large,
      height: ICON_SIZE.large,
      width: ICON_SIZE.large,
    }),

    ...((ownerState.height != null || ownerState.width != null) && {
      fontSize: Math.max(
        Number(ownerState.height ?? 0),
        Number(ownerState.width ?? 0),
      ),
      height: Number(ownerState.height),
      width: Number(ownerState.width),
    }),
  }),
)

export const Icon = React.forwardRef<any, IconProps>((inProps, ref) => {
  const {
    children,
    color: colorProp,
    height: heightProp,
    htmlColor,
    size = "medium",
    style,
    styles,
    width: widthProp,
    ...props
  } = useThemeProps({
    name: "Icon",
    props: inProps,
  })

  const textStyle = useTextStyle()

  const color = colorProp ?? textStyle.color
  const height = heightProp ?? textStyle.fontSize
  const width = widthProp ?? textStyle.fontSize

  const ownerState = {
    height,
    size,
    width,
  }

  return (
    <IconRoot
      ref={ref}
      color={Platform.OS === "web" ? htmlColor ?? color : color}
      fill={color ?? Platform.OS === "web" ? "currentColor" : undefined}
      ownerState={ownerState}
      style={[textStyle, style, styles?.root]}
      {...{
        // Support size prop of e.g. `react-native-vector-icons`
        size: Math.max(height ?? ICON_SIZE[size], width ?? 0),
      }}
      {...props}
    >
      {children}
    </IconRoot>
  )
}) as OverridableComponent<IconTypeMap>

Icon.displayName = "Icon"
